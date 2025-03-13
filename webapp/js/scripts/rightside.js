
const sidebar = document.getElementById("narration");
const handle = document.querySelector(".sidebar-handle");
document.addEventListener("DOMContentLoaded", function () { 
   // initialRightHideSideBar();
    handle.addEventListener("click", function () {
        if (sidebar.classList.contains("closed")) {
            showRightHideSideBar();
        } else {
            initialRightHideSideBar();
        }
    });
});

function initialRightHideSideBar() {
    var mySlide = $("#narration");
    var width = $(window).width();
    var sidebar_hide = -0.4 * width;
    mySlide.addClass('closed').animate({ 'right': sidebar_hide }, 500);
    handle.innerHTML = '<span class="vertical-text">INFO</span>';
}

function showRightHideSideBar() {
    var mySlide = $("#narration");
    mySlide.removeClass('closed').animate({ 'right': 0 }, 500);
    handle.innerHTML = '<i class="fas fa-angle-right"></i>';
}






var point1 = "West of Necklace region: Mangroves Avicennia (Avicennia marina and Avicennia officinalis), Rhizophora (Rhizophora apiculata and Rhizophora mucronata) are found. “Some people are dependent on mangroves hence they destroy for their livelihood” – statement from a local person";
var point2 = "Necklace region: Mangroves Avicennia (Avicennia marina and Avicennia officinalis), Rhizophora (Rhizophora apiculata and Rhizophora mucronata) are found. “Fiddler crab” exist in this region, it helps preserve the coastal wetland ecosystems. By burrowing deep into the mud of the marshes, the crabs create a maze of tunnels that aerate (add oxygen to) the marsh grasses and underwater seagrass meadows. Male Fiddler crab holds one claw, always much larger than the other, somewhat like a violin. Both claws in the female are relatively small."
var point3 = "Behind Pondicherry Fishing Harbour: Waste/effluents getting discharged in mangroves are threatening the biodiversity living in the ecosystem. One of the causes of Mangrove destruction.";
var point4 = "Adjacent to the Port of Pondicherry: Huge Dredging heap can be found to an average height of 7meters. Waste/effluents getting discharged in mangroves are threatening the biodiversity living in the ecosystem. One of the causes of Mangrove destruction.";
var point5 = "Adjacent to the Port of Pondicherry: Huge Dredging heap can be found to an average height of 7meters.";
var point6 = "Southern Necklace region: Mangroves Avicennia (Avicennia marina and Avicennia officinalis), Rhizophora (Rhizophora apiculata andRhizophora mucronata) as well as New Recruiter Mangroves are found. Boating activity is active in the mangrove forest when it is high tide. “Fiddler crab” exist in this region, it helps preserve the coastal wetland ecosystems. By burrowing deep into the mud of the marshes, the crabs create a maze of tunnels that aerate (add oxygen to) the marsh grasses and underwater seagrass meadows. Male Fiddler crab holds one claw, always much larger than the other, somewhat like a violin. Both claws in the female are relatively small.";
var point7 = "Veerampattinam Beach: NCCR Team surveyed the sand dunes profile during the field trip. Sand Dunes are controlled by winds which are one of the most powerful and mysterious of nature's wonders. Dunes are formed when the sand brought in by the wind is trapped by plants or other obstacles. Small mounds formed by sand, which is trapped, gradually expand to form dunes. Large mounds of sand found close to beaches are a natural wonder with beauty and majesty. Dune grasses anchor the dunes with their roots, holding them in place. While their leaves trap sand promoting dune expansion.";
var point8 = "East of Necklace region: Mangroves Avicennia (Avicennia marina and Avicennia officinalis), Rhizophora (Rhizophora apiculata and Rhizophora mucronata) as well as New Recruiter Mangroves are found. Boating activity is active in the mangrove forest when it is high tide. “Fiddler crab” exist in this region, it helps preserve the coastal wetland ecosystems. By burrowing deep into the mud of the marshes, the crabs create a maze of tunnels that aerate (add oxygen to) the marsh grasses and underwater seagrass meadows. Male Fiddler crab holds one claw, always much larger than the other, somewhat like a violin. Both claws in the female are relatively small";
var point9 = "Arikamedu: It is a coastal fishing village, 4 kilometres from Pondicherry, on the Pondicherry-Cuddalore Road. It is located on the bank of the Ariyankuppam, the northern outlet of the Gingee River as it joins the Bay of Bengal. The site has been subject to extensive archaeological excavations. The archaeological site is spread over an area of 34.57 acres (13.99 ha) and has been under the control of the Archaeological Survey of India since 1982.";
var point10 = "Veerampattinam Fishing Area: Passage being made for the sewage canal. The canal empties the sewage into the sea located a few metres away. Pipelines from these houses, directed into the canal.";
var point11 = "Panithittu Beach: NCCR Team surveyed the sand dunes profile as well during the field trip. Heap of dunes were found spread behind the bushy trees. Dunes are formed when the sand brought in by the wind is trapped by plants or other obstacles. Small mounds formed by sand, which is trapped, gradually expand to form dunes. Large mounds of sand found close to beaches are a natural wonder with beauty and majesty. Dune grasses anchor the dunes with their roots, holding them in place. While their leaves trap sand promoting dune expansion.";
var point12 = "Chunnambar River Mouth: This tourist destination offers many unique delightful adventures water sport activity.";
var point13 = "Upstream of Chunnambar River: Erosion has been found along the banks of the chunnambar river where the pondy ocean park is located. This tourist destination offers many unique delightful adventures water sport activity. ";
var point14 = "Well established coastal sand dunes are found in the banks of Chunnambar River. Sand Dunes are controlled by winds which are one of the most powerful and mysterious of nature's wonders. Dunes are formed when the sand brought in by the wind is trapped by plants or other obstacles. Small mounds formed by sand, which is trapped, gradually expand to form dunes. Large mounds of sand found close to beaches are a natural wonder with beauty and majesty";
var point15 = "Panithittu Beach: NCCR Team surveyed the sand dunes profile as well during the field trip. Dunes are formed when the sand brought in by the wind is trapped by plants or other obstacles. Small mounds formed by sand, which is trapped, gradually expand to form dunes. Large mounds of sand found close to beaches are a natural wonder with beauty and majesty. Dune grasses anchor ";
var point16 = "Panithittu Beach: NCCR Team surveyed the sand dunes profile as well during the field trip. Heap of dunes were found spread behind the bushy trees. Dunes are formed when the sand brought in by the wind is trapped by plants or other obstacles. Small mounds formed by sand, which is trapped, gradually expand to form dunes. Large mounds of sand found close to beaches are a natural wonder with beauty and majesty. Dune grasses anchor the dunes with their roots, holding them in place. While their leaves trap sand promoting dune expansion.";

var pics = [{ "lat": "11.91028", "lon": "79.813111", "description": point1 }, { "lat": "11.908651", "lon": "79.813190", "description": point2 },
 { "lat": "11.910017", "lon": "79.826379", "description": point3 }, { "lat": "11.910152", "lon": "79.826310", "description": point4 },
 { "lat": "11.916071", "lon": "79.827054", "description": point5 }, { "lat": "11.90533", "lon": "79.8161305", "description": point6 },
 { "lat": "11.901121", "lon": "79.829326", "description": point7 },
{ "lat": "11.907961", "lon": "79.814183", "description": point8 },
{ "lat": "11.90113333", "lon": "79.81998566", "description": point9 },
{ "lat": "11.89554", "lon": "79.82806", "description": point10 }, { "lat": "11.825085", "lon": "79.803735", "description": point11 },
{ "lat": "11.872142", "lon": "79.819628", "description": point12 }, { "lat": "11.874931", "lon": "79.797695", "description": point13 },
{ "lat": "11.8710076666", "lon": "79.815255", "description": point14 }, { "lat": "11.824720", "lon": "79.804448", "description": point15 },
{ "lat": "11.825083", "lon": "79.803973", "description": point16 }];

function addpoints() {
    //clearmap();
    // addbaseMap();
    $(pics).each(function (e, i) {
        L.marker([i.lat, i.lon])
       .addTo(map).on('click', function (e) {
           showpics(i.lat + "," + i.lon + '.jpg');
           $("#contentpara").html('');
           $("#contentpara").text(i.description);
       });
    });
}

function addBuoys(map) {
    //clearlayers();   
    var iconOptions = {
        iconUrl: 'img/buoy_2.png',
        iconSize: [45, 60]
    }
    // Creating a custom icon
    var customIcon = L.icon(iconOptions);
    var markerOptions = {
        title: "Pudhuchery",
        clickable: true,
        draggable: false,
        icon: customIcon
    }
    var marker = L.marker([11.919712, 79.846512], markerOptions);
    marker.bindPopup('Puducherryy').openPopup();
    marker.addTo(map);
}



var marineoutfallStyle = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var villageStyle = {
    //fillColor: "#82E3FC",
    fillColor: "#FAD2F2",
    color: "#000",
    weight: 0.5,
    opacity: 0.8,
    fillOpacity: 0.3,
    strokeColor: "#000"
};
var surveyplotStyle = {
    fillColor: "#964B00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};

var villageNamesStyle = {
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#000",
    strokeColor: "#000",
    fontSize: "14px"
};
function showhidealllabels(map) {
    show_hide_labels(village_labelsGrp, 12,map);
    show_hide_labels(survey_labelsGrp, 16,map);
    //show_hide_labels(survey_labelsGrp1, 16);
}

function show_hide_labels(lblgrp, show_label_zoom,map) {
    var cur_zoom = map.getZoom();
    if (lblgrp != null) {
        if (cur_zoom < show_label_zoom && map.hasLayer(lblgrp)) {
            map.removeLayer(lblgrp);
            //console.log(lblgrp);
            //showmsg();
        } else if (!map.hasLayer(lblgrp) && cur_zoom >= show_label_zoom) {
            map.addLayer(lblgrp);
        }
    }
}

function bindmarineoutfall(feature, layer) {
    //console.log(feature);
    var popupTxt = 'Name: ' + feature.properties.Station_Na
    //'SPCB_SPCC: ' + feature.properties.SPCB_SPCC;
    //+ 'DO_mg_L: ' + feature.properties.DO_mg_L + '<br/> ' + 'Colour: ' + feature.properties.Colour + '<br/>' + 'Fecal_Coli: ' + feature.properties.Fecal_Coli + '<br/>' + 'Turbidity_: ' + feature.properties.Turbidity_;
    layer.bindPopup(popupTxt);
    // layer.bindTooltip(feature.properties.Station_Na, { permanent: true, direction: 'center' });
}

var village_labelsGrp; var survey_labelsGrp; var survey_labelsGrp1;
var rock_labelsGrp; var markerlabels = []; var groyen_labelsGrp; var Groyenmarkerlabels = [];

function showrocklabels(feature, layer) {
    //console.log(layer._latlng["lng"]);  
    var latlng = new L.latLng(layer._latlng['lat'], layer._latlng['lng']);
    //console.log(latlng);
    var label = L.marker(latlng, {
        icon: L.divIcon({
            className: 'label',
            html: '<span class="clsvill2">' + capitalizeFirstLetter(feature.properties.Name) + '</div>',
            iconSize: [350, 20],
            iconAnchor: [300, 0],
        })
    }).addTo(rock_labelsGrp);
    markerlabels.push(label);
}

function showgroyenlabels(feature, layer) {
    // console.log(layer);     
    var latlong = layer.getBounds().getCenter();
    //console.log(latlong);
    //console.log(latlong.toBounds(500).getCenter());
    var label = L.marker(latlong, {
        icon: L.divIcon({
            className: 'label',
            html: '<span  class="clsgroyen">' + feature.properties.N + '</div>',
            iconAnchor: [0, 0],
            iconSize: [150, 20]
        })
    }).addTo(groyen_labelsGrp);
    Groyenmarkerlabels.push(label);
}


function capitalizeFirstLetter(string) {
    if (string != null)
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    else
        return string
}

var villages = [];
function bindvillage(feature, layer) {
    var popupTxt = 'Village: ' + feature.properties.NAME + '<br/> '

    //'Area(ha): ' + feature.properties.Area_ha
    //layer.bindPopup(popupTxt);
    //layer.bindTooltip(feature.properties.VILL_NAME, { permanent: false, direction: 'center' }); 

    var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
            className: 'label',
            html: '<span id="spnvill" class="clsvill">' + capitalizeFirstLetter(feature.properties.NAME) + '</div>',
            iconSize: [50, 20]
        })
    }).addTo(village_labelsGrp);

    //villages.push(capitalizeFirstLetter(feature.properties.NAME));
}

var surveylayer;
function bindSurveyplot(feature, layer) {
    surveylayer = layer;
    var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
            className: 'label',
            html: '<span style="font-size:18;font-weight:bold;color:yellow;">' + feature.properties.Survey_No + '</div>',
            iconSize: [50, 20]
        })
    }).addTo(survey_labelsGrp1);

    var popupTxt = '<span class="vrow">Village: ' + capitalizeFirstLetter(feature.properties.Name) + '</span><br/>' +
        '<span class="vrow">Plot: ' + feature.properties.Survey_No + '</span><br/>'
    //  '<span class="vrow">Area(m2): ' + Math.round((feature.properties.Area_m2 + Number.EPSILON) * 100) / 100 + '</span>';
    layer.bindPopup(popupTxt);
}

function addFeaturesToMap(data,map) {
    if (data.features && data.features.length > 0) {
        var table = displayFeaturesInTable(data.features);
        document.getElementById('att_tbl_holder').style.display = 'block';
        document.getElementById('attribute-table').innerHTML = table;
        selectedFilteredArea = L.geoJson(data, {
            style: function (feature) {
                var c = '#ff0000';
                return { color: c, opacity: 1, weight: 2 };
            }
        }).addTo(map);
        map.fitBounds(selectedFilteredArea.getBounds());
        //    onEachFeature: function (feature, layer) {                
        //        //layer.bindPopup('<p>' + feature.properties.name + '</p>'); 
        //        //console.log(feature);
        //    }

    }
    else {
        // selectedArea=null;
        // closeattr_table();
        alert("Features not found in selected area");
    }
}