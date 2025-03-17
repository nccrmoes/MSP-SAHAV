var layerscollection = [];
var geoserverUrl = "https://marinespatialplanning.in/geoserver/MSPudhu/wms";
var geoserverWfsUrl = "https://marinespatialplanning.in/geoserver/MSPudhu/ows";
var map;
var all_layers;
var selectedArea; var selectedFilteredArea;

var addedLayers = {}; var drawnItems; var drawControl;
var selected_attr_layer; var selected_attr_prop; var selected_attr_value; var selected_condition;
var layersJson; var boundariesInfo; var lulcInfo;

var layersListDiv = document.getElementById("divlayersList");
var legendDiv = document.getElementById("divLegend");
var legenduri = geoserverUrl + "?";
legenduri += "REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=";
var basemap;
var swipercontrol; var lanuselyr; var geomorphlyr; var selectedservice; var selectedlayer;
var fisherieslayers = []; layers_tree=[];
let sub_menu_config={};
let menu_config = {};let alllayerInfo={};


function addbaseMap() {
    var val = sessionStorage.getItem("basemap");
    if (map == undefined || map == null)
        clearmap();
    
    if (val == "topo") {
        var mapLink = '<a href="http://www.esri.com/">Esri</a>';
        var wholink = 'ESRI';        
        basemap = L.tileLayer(
             'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                 attribution: '&copy; ' + mapLink + ', ' + wholink,
                 maxZoom: 20,
             })
        map.addLayer(basemap);
    }   
    else if (val == "satellite") {
        basemap = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 22,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });      
        map.addLayer(basemap);
    }
    else if (val == "imagery") {
        var mapLink = '<a href="http://www.esri.com/">Esri</a>';
        var wholink = 'ESRI';   
        basemap = L.tileLayer(
             'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                 attribution: '&copy; ' + mapLink + ', ' + wholink,
                 maxZoom: 20,
             })
        map.addLayer(basemap);
    }
}

function submenuItemClicked(layerName) {
    //console.log(layerName);
    let config = sub_menu_config[layerName];    
    let selectedKey = config.key;     
    if (!config) return console.warn(`No layer configuration found for: ${layerName}`);
    let selected_tree=alllayerInfo[selectedKey];   
    config.jsonpath.includes("Multi_DataTree.json") 
        ? loadlayers(config, layerName,selected_tree) 
        : readTextFile("./js/config/"+ config.jsonpath, text => {
            layers_tree = JSON.parse(text);            
            loadlayers(config, selectedKey,layers_tree);
        });
    function loadlayers(config, selectedKey,jsonTree) {       
        $("#legendtitle, #layerstitle, .chapter-header").text(config.title);
        $("#contentpara").html(config.about);
        $("#legendtitle, #layerstitle").text(config.title);
       
        if (config.otherfunctions && config.otherfunctions.name) {
            let func = window[config.otherfunctions.name];  

            if (typeof func === "function") {
                let params = config.otherfunctions.params.map(param => {
                    return param === "data" ? config.data : param === "tree" ? jsonTree : param === "title" ? config.title : param;
                });                
                if(jsonTree !== undefined)
                {
                    BuildMenuAndLoad(config.data, jsonTree);     
                    func(...params); 
                }
                else
                    func(...params); 
            } else {
                console.warn(`Function ${config.otherfunctions.name} not found.`);
            }
        } else {
            BuildMenuAndLoad(config.data, jsonTree);            
        }

        let center = Array.isArray(config.center) && config.center.length === 2 
            ? config.center 
            : [11.91, 79.78]; 
        map.setView(new L.LatLng(center[0], center[1]), config.zoom || 12);
    }
}

$(document).ready(function () {   
    //sessionStorage.clear();
    var val = sessionStorage.getItem("basemap");
    if (val == "" || val == undefined || val == null)
        sessionStorage.setItem("basemap", "satellite");

    readTextFile("./js/config/Multi_DataTree.json", function (text) {
        alllayerInfo = JSON.parse(text);
    });

    readTextFile("./js/config/menuitems.json", function (text) {
        sub_menu_config = JSON.parse(text);
    });

    readTextFile("./js/config/datarepo.json", function (text) {
        menu_config = JSON.parse(text);    
        
        document.querySelectorAll(".nav-item[data-menu]").forEach(menu => {
            const key = menu.getAttribute("data-menu");
            if (menu_config[key]) {
                const subMenu = buildSubMenu(menu_config[key]);
                if (subMenu) {
                    menu.classList.add("dropdown");
                    const dropdownToggle = menu.querySelector(".nav-link");
                    dropdownToggle.classList.add("dropdown-toggle");
                    dropdownToggle.setAttribute("data-toggle", "dropdown");
                    menu.appendChild(subMenu);
                }
            }
        });

    });

    $(".map-tool,.bubble-item").each(function() {
        $(this).click(function() {
            let action = $(this).data("action");
            if (typeof window[action] === "function") {
                window[action](); 
            } else {
                console.warn("Function not found for action:", action);
            }
        });
    });      
   
    clearlayers();
    addbaseMap();   
});


function buildSubMenu(data) {
    if (!data || data.length === 0) return null;

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");

    data.forEach(category => {
        const li = document.createElement("li");
        li.classList.add("position-relative"); // Ensure proper positioning

        // Create a menu link
        const a = document.createElement("a");
        a.classList.add("dropdown-item");
        a.href = "#";
        a.textContent = category.category || category.name;

        // Check if there are sub-items
        if (category.items && category.items.length > 0) {
            li.classList.add("dropdown-submenu");
            const subMenu = buildSubMenu(category.items.map(item => ({ category: item.name, items: item.items || [] })));
            if (subMenu) {
                subMenu.classList.add("dropdown-menu");
                li.appendChild(subMenu);
            }
        } else {
            // Add click event for menu item
            a.setAttribute("onclick", `submenuItemClicked('${category.category || category.name}')`);

            // Create a separate download icon
            const downloadIcon = document.createElement("span");
            downloadIcon.innerHTML = " ⭳";
            downloadIcon.classList.add("download-icon");
            downloadIcon.setAttribute("onclick", `downloadLayer('${category.category || category.name}', event)`);
            
            // Prevent menu from closing when clicking the download icon
            downloadIcon.addEventListener("click", (e) => e.stopPropagation());

            // Add spacing and append the download icon
            a.style.display = "flex";
            a.style.justifyContent = "space-between";
            a.appendChild(downloadIcon);
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

function resetMap()
{
    clearlayers();
    clearmap();
    addbaseMap();    
    layersJson=[];
}

function BuildMenuAndLoad(arr_ids,JsonInfo)
{ 
    clearlayers();
    clearmap();
    addbaseMap();    
    layersJson=[];
    layersJson=JsonInfo; 
    buildMenu(layersJson, () => {  
        $.each(arr_ids, function(index, value) {              
            var chkbox = document.getElementById(value);            
            chkbox.checked = true;
            chkbox.dispatchEvent(new Event('change')); 
        });      
    });
    $('.toggle-button').first().addClass('open');       
    openLegend();     
}

function clearmap() {   
    // Remove and reinitialize map
    if (map) {
        map.off();
        map.remove();
    }
    map = new L.Map('map', {
        zoomControl: false,
        zoomSnap: 0,
        zoomDelta: 0.25
    }).setView([11.96, 79.8], 9);  
  
    L.control.zoom({ position: 'bottomright' }).addTo(map);
}

function clearlayers() {   
    closeLegend();
    closeLayersList(); 
    initialRightHideSideBar();

    $("#divLegend, #divlayersList").empty();
    $("#divutils").hide(); 
    $("#divcharts, #divcharts2, #divcharts3, #divcharts4").empty().hide();    
    // Reset text content
    $(".chapter-header, #spnmangstatus, #hmstat","#contentpara").text(''); 
    $('.description, .chapter-header').show();
    $('.buoyda, .beachpics').hide(); 
    // Reset tracking variables
    existinglayerids = [];
    addedLayers = {};   
}

const selectedItems = []; const unselectedItems=[];

function handleCheckboxChange(checkbox, name, service, number) {
    const isChecked = checkbox.checked;
    const item = { number, name, service };
    if (isChecked) {
        selectedItems.push(item);
    } else {
        const index = selectedItems.findIndex(i => i.number === number);        
        if (index !== -1) {           
            selectedItems.splice(index, 1);         
            removeLayersFromMap(number,service);
            //closeattr_table();
        }       
    }
    const children = checkbox.closest('.toggle-button')?.nextElementSibling?.querySelectorAll('input[type="checkbox"]') || [];
    children.forEach(childCheckbox => {
        childCheckbox.checked = isChecked;
        const childItem = { number: childCheckbox.id, name: childCheckbox.nextElementSibling.textContent, service: childCheckbox.value };
        if (isChecked) {
            if (!selectedItems.some(i => i.number === childItem.number)) {
                selectedItems.push(childItem);
            }
        } else {
            const index = selectedItems.findIndex(i => i.number === childItem.number);
            if (index !== -1) {
                selectedItems.splice(index, 1);               
                removeLayersFromMap(childItem.number,childItem.service);                
            }
        }
    });
    AddLayersToMap();
}

function loadwmslayer(servicename) {  
    var layer;
    if (servicename != null) {
        layer = L.Geoserver.wms(geoserverUrl, {
            layers: servicename,
            format: 'image/png',
            transparent: true
        });
    }
    return layer;
}

var layerswithCustomLegends=["lulc","crz","geomorph","biohotspots","crp","vuln","tourism","coastameni","mbc","TvsS","TvsF"];
var layersnottransparent = [{ "name": "MSPudhu:Tourism_Activity" }, { "name": "MSPudhu:Crab_locations" }, { "name": "MSPudhu:Archeological_Site" }, { "name": "MSPudhu:Coastal_Protection_Structures" }, { "name": "MSPudhu:CRZ" }, { "name": "MSPudhu:Rock_Revetment_points" }, { "name": "MSPudhu:Groynes" }, { "name": "MSPudhu:Lighthouse" }, { "name": "MSPudhu:Jetty or Breakwater" }, { "name": "MSPudhu:Placenames" }, { "name": "MSPudhu:Port" }, { "name": "MSPudhu:Port Area" }, { "name": "MSPudhu:Railway Line" }, { "name": "MSPudhu:Lines" }, { "name": "MSPudhu:Points" }, { "name": "MSPudhu:VillageNames" }, { "name": "MSPudhu:SurveyPlotNumbers" }, { "name": "MSPudhu:Road" }, { "name": "MSPudhu:Hazard_Line" }, { "name": "MSPudhu:Multi_Hazard_Line" }, { "name": "MSPudhu:Government_Quarter" }, { "name": "MSPudhu:Govt_Office" }, { "name": "MSPudhu:Grave" }, { "name": "MSPudhu:Dams" }, { "name": "MSPudhu:Park_Area" }, { "name": "MSPudhu:Bus_Stations" }, { "name": "MSPudhu:Banks" }, { "name": "MSPudhu:Major_Road_Network" }, { "name": "MSPudhu:Major_Landmarks" }, { "name": "MSPudhu:Power_Mainline" }, { "name": "MSPudhu:Open_Drain" }, { "name": "MSPudhu:Religious_Place" }, { "name": "MSPudhu:Pump_House_Area" }, { "name": "MSPudhu:Playground_Area" }, { "name": "MSPudhu:Rail_Culvert" }, { "name": "MSPudhu:Railway_Station" }, { "name": "MSPudhu:Police_Stations" }, { "name": "MSPudhu:Road_Bridges" }, { "name": "MSPudhu:Veterinary_Hospitals" }, { "name": "MSPudhu:Stadium_Locations" }, { "name": "MSPudhu:Substation_Locations" }, { "name": "MSPudhu:Traffic_Signal_Locations" }, { "name": "MSPudhu:Under_water_cable-UT_Pondy" }, { "name": "MSPudhu:Underwater_Cable-Under_Construction" }, { "name": "MSPudhu:Bathymetry_10m" }, { "name": "MSPudhu:Sandy_Beach" }, { "name": "MSPudhu:Sandy_Spit" }, { "name": "MSPudhu:River" }, { "name": "MSPudhu:District_Boundary" }, { "name": "MSPudhu:Corals" }, { "name": "MSPudhu:Biodiversity_Hotspots" }, { "name": "MSPudhu:Turtle_Nesting_Ground" }, { "name": "MSPudhu:Tourism_Boating" }, { "name": "MSPudhu:Tourist_Beach_Puducherry" }, { "name": "MSPudhu:Beach_Resorts" }, { "name": "MSPudhu:Coastal_Amenities" }, { "name": "MSPudhu:Scuba_Diving_Locations" }, { "name": "MSPudhu:Sports_Activities" }, { "name": "MSPudhu:Sand_Dune" }, { "name": "MSPudhu:SandSpit" }];

function AddLayersToMap()
{   
    for(i=0;i<selectedItems.length;i++)
    {       
        const Id = selectedItems[i].number;            
        const result = findElementByNumber(layersJson, Id); 
        if (result != null) {
            var title=result.Name;
            var service=result.service;
            var layerId=result.Number;              
                
            if (!addedLayers[layerId]) {
                var layer =null;                      
                if(typeof service !== "undefined" && service != null)                            
                    layer = loadwmslayer(service);                            
                if(layer != null)
                {     
                    var layertransparancyset = layersnottransparent.some(function(layerObj) {
                        if (layerObj.name === service) {                           
                            layer.setOpacity(1); 
                            return true;  
                        }
                        return false;
                    });
                    if (!layertransparancyset) {
                        layer.setOpacity(0.6);                                     
                    }                                   
                    layer.addTo(map);
                    addedLayers[layerId] = layer; 
                    selectedlayer = layer;                   
                    if(layerswithCustomLegends.includes(layerId))
                        createCustomLegendItemWithHeader(service,title,legenduri);
                    else
                        createLegendItem(service,title,legenduri)
                } 
            }
                
        }       
    }
}

function removeLayersFromMap(layerId,service)
{   
    if (addedLayers[layerId]) {     
        map.removeLayer(addedLayers[layerId]);
        delete addedLayers[layerId]; 
        if(service != null)
            deletelegendItem(service);
        else
        {
            const result = findElementByNumber(layersJson, layerId);
            if (result != null) {                
                var svc=result.service;
                if(svc != null)
                    deletelegendItem(svc);
            }
        }       
    }
}

function setBaseMap(type) {
    closebasemaps();
    clearlayers();
    clearmap();
    sessionStorage.setItem("basemap", type);
    addbaseMap();
}