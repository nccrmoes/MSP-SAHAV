function loadWeather(data, title, tree) {
    $("#divcharts").empty();
    if (title == "Precipitation") {
        loadPuduWeather("./js/chart_data/precipitation.json", "precipitation", "divcharts", "Total Rainfall (mm)", "Precipitation (mm)");
    }
    else if (title == "Humidity") {
        loadPuduWeather("./js/chart_data/humidity.json", "humidity", "divcharts", 'Humidity (%)', 'Humidity');
    }
    else if (title == "Airtemperature") {
        loadPuduWeather("./js/chart_data/min_temperature.json", "mintemperature", "divcharts", 'Degrees (celsius)', 'Mean Min Temperature');
        loadPuduWeather("./js/chart_data/max_temperature.json", "maxtemperature", "divcharts2", 'Degrees (celsius)', 'Mean Max Temperature');
        $("#divcharts2").show();
    }
    else if (title == "Wind Speed") {
        loadPuduWeather("./js/chart_data/windspeed.json", "windspeed", "divcharts", 'm/s', 'Wind Speed');
    }
    else if (title == "Pressure") {
        loadPuduWeather("./js/chart_data/pressure.json", "pressure", "divcharts", 'Pressure (hpa)', 'Pressure');
    }
    else if (title == "Cloud Cover") {
        loadPuduWeather("./js/chart_data/total_cloud_cover.json", "cloudcover", "divcharts", 'cloud cover', 'Total Cloud Cover');
    }
    $("#divcharts").show();
    showRightHideSideBar();
}

function loadWaterquality(data, tree) {
    addBuoys(map);
    // Define chart container mappings
    const chartContainerMap = {
        "DO": "divcharts",
        "DIN": "divcharts2",
        "DIP": "divcharts3",
        "Chlorophyll": "divcharts4"
    };
    const paramDetails = {
        "DO": { name: "Dissolved Oxygen", unit: "mg/l" },
        "DIN": { name: "Dissolved Inorganic Nitrogen", unit: "µmol/l" },
        "DIP": { name: "Dissolved Inorganic Phosphate", unit: "µmol/l" },
        "Chlorophyll": { name: "Chlorophyll", unit: "µg/l" }
    };
    // Call the function with both JSON files
    loadMultipleScatterData(["./js/chart_data/water_quality_status.json", "./js/chart_data/water_quality_chlorophyll.json"], chartContainerMap, paramDetails);
    $("#divcharts, #divcharts2, #divcharts3, #divcharts4").show();
    showRightHideSideBar();
}

function loadMarineOutfall() {
    loadMarineoutfallChart();
    showRightHideSideBar();
}

function loadMangrovesStatus() {
    $("#divcharts").show();
    loadmangrovesChart();
    showRightHideSideBar();
}

function loadfisheries() {
    loadfisheriesRevenuechart();
    loadfishLandingchart();
    loadfisherFolkchart();
    showRightHideSideBar();
}

function loadtourism() {
    loadtouristChartPudhu();
    loadtourismRevenuechart();
    loadtourismResortCount();
    showRightHideSideBar();
}

function addBuoys(map) {
    //clearlayers();   
    var iconOptions = {
        iconUrl: 'img/buoy.png',
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

function redirectToServiceLinks(data, title, tree) {

    if (title.includes("INCOIS"))
        window.open("https://incois.gov.in/portal/stormsurge/webgis.jsp", "_blank");

}