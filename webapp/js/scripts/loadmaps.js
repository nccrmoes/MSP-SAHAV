function loadWeather(data, title, tree) {
    // BuildMenuAndLoad(data,tree);    
    $("#divcharts").empty();
    if (title == "Precipitation") {
        loadPuduWeather("Rainfall", 'divcharts', 'Total Rainfall (mm)', 'Rainfall');
    }
    else if (title == "Humidity") {
        loadPuduWeather("Pudhu_RH", 'divcharts', 'Humidity (%)', 'Humidity');
    }
    else if (title == "Airtemperature") {
        loadPuduWeather("MeanMinTemp", 'divcharts', 'Degrees (celsius)', 'Min Temperature');
        loadPuduWeather("MeanMaxTemp", 'divcharts2', 'Degrees (celsius)', 'Max Temperature');
    }
    else if (title == "Wind Speed") {
        loadPuduWeather("WindSpeed", 'divcharts', 'm/s', 'Wind Speed');
    }
    else if (title == "Pressure") {
        loadPuduWeather("Pudhu_MSLP", 'divcharts', 'Pressure (hpa)', 'Pressure');
    }
    else if (title == "Cloud Cover") {
        loadPuduWeather("Pudhu_MTC", 'divcharts', 'cloud cover', 'Total Cloud Cover');
    }
    $("#divcharts").show();
    showRightHideSideBar();
}
function loadWaterquality(data, tree) {
    BuildMenuAndLoad(data, tree);
    //loadBuoyCharts();
    addBuoys(map);
    loadSWQMChartsDO_DIN("Pudhu_DO_DIN");
    loadSWQMCharts_CHL("Pudhu_Chlorophyll");
    showRightHideSideBar();
}
function loadMarineOutfall() {
    resetMap();
    getWfs("MSPudhu:Marine_Outfall", "Marine_Outfall", "SPCB_SPCC like '%%'", marineoutfallStyle);
    createLegendItem("MSPudhu:Marine_Outfall", "Marine Outfall", legenduri);
    showRightHideSideBar();
}

function loadMangrovesStatus()
{
    loadmangrovesChart();
    showRightHideSideBar();
}

function loadfisheries() {  
    loadfisheriesRevenuechart();
    loadfishLandingchart();
    loadfisherFolkchart1();
    showRightHideSideBar();
}

function loadtourism(){
     loadtouristChartPudhu();
    loadtourismRevenuechart();
    loadtourismResortCount();
    showRightHideSideBar();
}