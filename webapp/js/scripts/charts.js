function loadfisheriesRevenuechart() {     
    $.getJSON("./js/chart_data/fishermen_revenue.json", function(mdata) {
        $("#divcharts").show();
        loadHighCharts(mdata, "Fisheries revenue in Crore", "Revenue in Crores", "Year", "divcharts");
    });
}

function loadfishLandingchart() {
    $.getJSON("./js/chart_data/fish_landing.json", function(mdata) {
        $("#divcharts2").show();
        loadHighCharts(mdata, "Fish Landing in Tons", "Fish Landing in Tons", "Year", "divcharts2");
    });
}

function loadfisherFolkchart() {  
    $.getJSON("./js/chart_data/fishermen.json", function(mdata) {
        $("#divcharts3").show();
        loadhighchartsColumnDynamic(mdata, "Active Fisher folk in Puducherry UT", "No. of fishermen", "Year", "divcharts3");
    });
}

function loadtouristChartPudhu() {
    $.getJSON("./js/chart_data/tourism_statistics.json", function(mdata) {
        $("#divcharts").show();
        loadhighchartsColumnDynamic(mdata, "Tourism Statistics Puducherry", "No. of Tourists", "Year", "divcharts");
    });
}

function loadtourismRevenuechart() { 
    $.getJSON("./js/chart_data/tourism_revenue.json", function(mdata) {
        $("#divcharts2").show();
        loadhighchartsColumnDynamic(mdata, "Tourism Revenue (INR mn)", "Year", "Revenue(INR Mn)", "divcharts2");
    });
}

function loadtourismResortCount() {
    $.getJSON("./js/chart_data/tourism_resort_count.json", function(mdata) {
    $("#divcharts3").show();
    loadhighchartsColumnDynamic(mdata, "Puducherry Resorts Count", "Year", "No. of resorts", "divcharts3");
    });
}

function loadMarineoutfallChart() { 
    $("#divcharts").show(); $("#divcharts2").show();
    $.getJSON("./js/chart_data/water_quality_sw3.json", function(mdata) {        
        loadhighchartsColumnDynamic2(mdata, mdata[0].categories, "Primary Water Quality Criteria for Class SW-III Waters", "Elements", "Units (ug/l)", "divcharts", 'column');
    });
    $.getJSON("./js/chart_data/water_quality_sw5.json", function(mdata2) {        
        loadhighchartsColumnDynamic2(mdata2, mdata2[0].categories, "Primary Water Quality Criteria for Class SW-V Waters", "Elements", "Units (ug/l)", "divcharts2", 'column');
    });      
}

function loadPuduWeather(jsonFile, dataKey, containerId, title, ytitle) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Extract categories (years)
            const categories = data.map(entry => entry.category);

            // Extract box plot values as [min, q1, median, q3, max]
            const boxPlotData = data.map(entry =>[
                entry[dataKey].min,
                entry[dataKey].q1,
                entry[dataKey].median,
                entry[dataKey].q3,
               entry[dataKey].max
            ]);

            // Call the Highcharts function with loaded data
            highchartsBoxplot(categories, boxPlotData, containerId, title, ytitle);
        })
        .catch(error => console.error("Error loading JSON:", error));
}

function loadmangrovesChart() {    
    $.getJSON("./js/chart_data/mangroves_area_hectars.json", function(mdata) {
        loadhighchartsColumnDynamic2(mdata, mdata[0].categories, "Mangroves", "Year", "Area in Hectors", "divcharts", "column");
    });
}

function loadMultipleScatterData(jsonFiles, chartContainerMap, paramDetails) {
    const fetchPromises = jsonFiles.map(file => fetch(file).then(response => response.json()));

    Promise.all(fetchPromises)
        .then(dataArrays => {
            // Flatten merged datasets
            const combinedData = [].concat(...dataArrays);

            // Extract all parameters dynamically (except year, zone, source)
            const parameterKeys = [...new Set(combinedData.flatMap(Object.keys))]
                .filter(key => key !== "year" && key !== "zone" && key !== "source");

            // Prepare data for each parameter
            parameterKeys.forEach(param => {
                const paramData = combinedData
                    .filter(entry => entry[param] !== undefined)  // Ensure param exists
                    .map(entry => [entry.year, parseFloat(entry[param])]);

                // Get display name and units from the mapping
                const displayName = paramDetails[param]?.name || param;
                const unit = paramDetails[param]?.unit || "(units)";

                if (chartContainerMap[param]) {
                    loadhighchartsScatter(
                        [{ name: displayName, data: paramData }],
                        displayName,
                        "Year",
                        unit,
                        chartContainerMap[param]
                    );
                } else {
                    console.warn(`No chart container mapped for ${param}`);
                }
            });

        })
        .catch(error => console.error("Error loading JSON:", error));
}