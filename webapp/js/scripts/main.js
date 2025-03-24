//replace yourgeoserver.com with your hosted geoserver and MSPudhu can be your Service
var geoserverUrl = "https://yourdomain.in/geoserver/MSPudhu/wms"; //MSPudhu is name of the workspace. it can be anything
var geoserverWfsUrl = "https://yourdomain.in/geoserver/MSPudhu/ows";
var legenduri = geoserverUrl + "?";
legenduri += "REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=";

let map;
let layersJson, basemap;
let layersTree = [];
let addedLayers = {}, subMenuConfig = {}, menuConfig = {}, allLayerInfo = {};

var layersListDiv = document.getElementById("divlayersList");
var legendDiv = document.getElementById("divLegend");
const navbarCollapse = document.querySelector('.navbar-collapse');

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
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
    }
    let config = subMenuConfig[layerName];
    let selectedKey = config.key;
    if (!config) return console.warn(`No layer configuration found for: ${layerName}`);
    let selected_tree = allLayerInfo[selectedKey];
    config.jsonpath.includes("Multi_DataTree.json")
        ? loadlayers(config, layerName, selected_tree)
        : readTextFile("./js/config/" + config.jsonpath, text => {
            layersTree = JSON.parse(text);
            loadlayers(config, selectedKey, layersTree);
        });
    function loadlayers(config, selectedKey, jsonTree) {
        $("#legendtitle, #layerstitle,.chapter-header").text(config.title);
        if (config.chapterheader)
            $(".chapter-header").text(config.chapterheader);
        if (config.subpara)
            $("#contentsubh").html(config.subpara);
        $("#contentpara").html(config.about);
        $("#legendtitle, #layerstitle").text(config.title);

        if (config.otherfunctions && config.otherfunctions.name) {
            let func = window[config.otherfunctions.name];

            if (typeof func === "function") {
                let params = config.otherfunctions.params.map(param => {
                    return param === "data" ? config.data : param === "tree" ? jsonTree : param === "title" ? config.title : param;
                });
                if (jsonTree !== undefined) {
                    BuildMenuAndLoad(config.data, jsonTree);
                    func(...params);
                }
                else {
                    clearlayers();
                    func(...params);
                }
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
    var val = sessionStorage.getItem("basemap");
    if (val == "" || val == undefined || val == null)
        sessionStorage.setItem("basemap", "imagery");

    readTextFile("./js/config/Multi_DataTree.json", function (text) {
        allLayerInfo = JSON.parse(text);
    });

    readTextFile("./js/config/menuitems.json", function (text) {
        subMenuConfig = JSON.parse(text);
    });

    readTextFile("./js/config/datarepo.json", function (text) {
        menuConfig = JSON.parse(text);

        document.querySelectorAll(".nav-item[data-menu]").forEach(menu => {
            const key = menu.getAttribute("data-menu");
            if (menuConfig[key]) {
                const subMenu = buildSubMenu(menuConfig[key]);
                if (subMenu) {
                    menu.classList.add("dropdown");
                    const dropdownToggle = menu.querySelector(".nav-link");
                    dropdownToggle.classList.add("dropdown-toggle");
                    dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
                    menu.appendChild(subMenu);
                }
            }
        });
        // handle collapsing the navbar on mobile view
        const navbarCollapse = document.querySelector('.navbar-expand-lg .navbar-collapse');
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    $(".map-tool").each(function () {
        $(this).click(function () {
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

//Builds Sub menu for each link in navigation bar using data from json  
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
        a.href = "javascript:void(0);";
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
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

function resetMap() {
    clearlayers();
    clearmap();
    addbaseMap();
    layersJson = [];
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
    $(".chapter-header, #spnmangstatus, #hmstat", "#contentpara").text('');
    $('.description, .chapter-header').show();
    // Reset tracking variables
    existinglayerids = [];
    addedLayers = {};
}



//Builds Layers List that can toggle map layers
function BuildMenuAndLoad(arr_ids, JsonInfo) {
    clearlayers();
    clearmap();
    addbaseMap();
    layersJson = [];
    layersJson = JsonInfo;
    buildMenu(layersJson, () => {
        $.each(arr_ids, function (index, value) {
            var chkbox = document.getElementById(value);
            chkbox.checked = true;
            chkbox.dispatchEvent(new Event('change'));
        });
    });
    $('.toggle-button').first().addClass('open');
    openLegend();
}

const selectedItems = []; const unselectedItems = [];
//handles layer toggling
function handleCheckboxChange(checkbox, name, service, number) {
    const isChecked = checkbox.checked;
    const item = { number, name, service };
    if (isChecked) {
        selectedItems.push(item);
    } else {
        const index = selectedItems.findIndex(i => i.number === number);
        if (index !== -1) {
            selectedItems.splice(index, 1);
            removeLayersFromMap(number, service);
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
                removeLayersFromMap(childItem.number, childItem.service);
            }
        }
    });
    AddLayersToMap();
}



//refer to layers' number in multi_dataTree.json for layers_with_CustomLegends
var layers_with_CustomLegends = ["lulc", "geomorph", "biohotspots", "cps", "vuln", "coastameni", "TvsS", "TvsF", "cps", "mof"];

//ist of geoserver services that are not transparent. other layers have defult transparancy.
var layers_not_transparent = [{ "name": "MSPudhu:Marine_Outfall" }, { "name": "MSPudhu:VillageNames" }, { "name": "MSPudhu:Tourism_Activity" }, { "name": "MSPudhu:Crab_locations" }, { "name": "MSPudhu:Archeological_Site" }, { "name": "MSPudhu:Coastal_Protection_Structures" }, { "name": "MSPudhu:CRZ" }, { "name": "MSPudhu:Rock_Revetment_points" }, { "name": "MSPudhu:Groynes" }, { "name": "MSPudhu:Lighthouse" }, { "name": "MSPudhu:Jetty or Breakwater" }, { "name": "MSPudhu:Placenames" }, { "name": "MSPudhu:Port" }, { "name": "MSPudhu:Port Area" }, { "name": "MSPudhu:Railway Line" }, { "name": "MSPudhu:Lines" }, { "name": "MSPudhu:Points" }, { "name": "MSPudhu:VillageNames" }, { "name": "MSPudhu:SurveyPlotNumbers" }, { "name": "MSPudhu:Road" }, { "name": "MSPudhu:Hazard_Line" }, { "name": "MSPudhu:Multi_Hazard_Line" }, { "name": "MSPudhu:Government_Quarter" }, { "name": "MSPudhu:Govt_Office" }, { "name": "MSPudhu:Grave" }, { "name": "MSPudhu:Dams" }, { "name": "MSPudhu:Park_Area" }, { "name": "MSPudhu:Bus_Stations" }, { "name": "MSPudhu:Banks" }, { "name": "MSPudhu:Major_Road_Network" }, { "name": "MSPudhu:Major_Landmarks" }, { "name": "MSPudhu:Power_Mainline" }, { "name": "MSPudhu:Open_Drain" }, { "name": "MSPudhu:Religious_Place" }, { "name": "MSPudhu:Pump_House_Area" }, { "name": "MSPudhu:Playground_Area" }, { "name": "MSPudhu:Rail_Culvert" }, { "name": "MSPudhu:Railway_Station" }, { "name": "MSPudhu:Police_Stations" }, { "name": "MSPudhu:Road_Bridges" }, { "name": "MSPudhu:Veterinary_Hospitals" }, { "name": "MSPudhu:Stadium_Locations" }, { "name": "MSPudhu:Substation_Locations" }, { "name": "MSPudhu:Traffic_Signal_Locations" }, { "name": "MSPudhu:Under_water_cable-UT_Pondy" }, { "name": "MSPudhu:Underwater_Cable-Under_Construction" }, { "name": "MSPudhu:Bathymetry_10m" }, { "name": "MSPudhu:Sandy_Beach" }, { "name": "MSPudhu:Sandy_Spit" }, { "name": "MSPudhu:River" }, { "name": "MSPudhu:District_Boundary" }, { "name": "MSPudhu:Corals" }, { "name": "MSPudhu:Biodiversity_Hotspots" }, { "name": "MSPudhu:Turtle_Nesting_Ground" }, { "name": "MSPudhu:Tourism_Boating" }, { "name": "MSPudhu:Tourist_Beach_Puducherry" }, { "name": "MSPudhu:Beach_Resorts" }, { "name": "MSPudhu:Coastal_Amenities" }, { "name": "MSPudhu:Scuba_Diving_Locations" }, { "name": "MSPudhu:Sports_Activities" }, { "name": "MSPudhu:Sand_Dune" }, { "name": "MSPudhu:SandSpit" }];


//Loads WMS Layer and returns a layer object to be added to map
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

//add WMS layers to Map
function AddLayersToMap() {
    for (i = 0; i < selectedItems.length; i++) {
        const Id = selectedItems[i].number;
        const result = findElementByNumber(layersJson, Id);
        if (result != null) {
            var title = result.Name;
            var service = result.service;
            var layerId = result.Number;

            if (!addedLayers[layerId]) {
                var layer = null;
                if (typeof service !== "undefined" && service != null)
                    layer = loadwmslayer(service);
                if (layer != null) {
                    var layertransparancyset = layers_not_transparent.some(function (layerObj) {
                        if (layerObj.name === service) {
                            layer.setOpacity(1);
                            return true;
                        }
                        return false;
                    });
                    if (!layertransparancyset) {
                        layer.setOpacity(0.7);
                    }
                    layer.addTo(map);
                    addedLayers[layerId] = layer;
                    if (layers_with_CustomLegends.includes(layerId))
                        createCustomLegendItemWithHeader(service, title, legenduri);
                    else
                        createLegendItem(service, title, legenduri)
                }
            }

        }
    }
}

//Removes added layers from map when toggled in Layers List Widget
function removeLayersFromMap(layerId, service) {
    if (addedLayers[layerId]) {
        map.removeLayer(addedLayers[layerId]);
        delete addedLayers[layerId];
        if (service != null)
            deletelegendItem(service);
        else {
            const result = findElementByNumber(layersJson, layerId);
            if (result != null) {
                var svc = result.service;
                if (svc != null)
                    deletelegendItem(svc);
            }
        }
    }
}

