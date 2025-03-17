
function loadHighCharts(data, title, ytitle, xtitle, chartid) {
    //debugger  
    var chartt = Highcharts.chart(chartid, {
        chart: {
            type: 'line',
            zoomType: 'x'
            //marginTop: 50,
            //marginBottom: 100
        },
        title: {
            text: title,
            marginTop: 100
            // text:''
        },
        subtitle: {
            text: null
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ytitle
            }
        },
        series: [{
            "data": data.y,
            "name": data.name
        }],
        xAxis: {
            title: {
                text: xtitle
            }

        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                }
            }]
        }
    });
}

function loadhighchartsColumnDynamic(data, title, xtitle, ytitle, chartid) {
    Highcharts.chart(chartid, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            crosshair: true,
            title: {
                text: xtitle
            }
        },
        yAxis: {
            //categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021'],
            title: {
                text: ytitle
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: data
    });
}

function loadhighchartsColumnDynamic2(mdata, categ, title, xtitle, ytitle, chartid, type) {
    Highcharts.chart(chartid, {
        chart: {
            type: type,
            options3d: {
                enabled: true,
                alpha: 15,
                //beta: 15,
                depth: 40,
                viewDistance: 15
            }
        },
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            crosshair: true,
            title: {
                text: xtitle
            },
            categories: categ
        },
        yAxis: {
            //categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021'],
            title: {
                text: ytitle
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: mdata
    });
}

function loadhighchartsScatter(mdata, title, xtitle, ytitle, chartid) {
    Highcharts.chart(chartid, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {           
            type: 'datetime',
            tickInterval: 1000 * 3600 * 24 * 365,
            labels: {
                format: '{value: %Y}'
            },
           // units: [['year']],
            crosshair: true,
            title: {
                text: xtitle
            }
        },
        tooltip: {
            formatter: function () {
                return Highcharts.dateFormat('%Y', this.x) + '<br/>' + 
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        yAxis: {           
            title: {
                text: ytitle
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: mdata
    });
}

function highchartsBoxplot(categories, data, containerId, title, ytitle) {
    Highcharts.chart(containerId, {

        chart: {
            type: 'boxplot'
        },

        title: {
            text: title
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: categories,
            title: {
                text: 'Year'
            }
        },

        yAxis: {
            title: {
                text: ytitle
            },
        },
        series: [{
            name: 'Observations',
            data: data,
            tooltip: {
                headerFormat: '<em>Year {point.key}</em><br/>'
            }
        }
        ]

    });
}

function loadfisheriesRevenuechart() {
    var mdata = {
        "name": "Fisheries revenue in Crore",
        "y": [[2013, 100], [2014, 110], [2015, 190], [2016, 605], [2017, 432], [2018, 733], [2019, 832], [2020, 527], [2021, 594]]
    };
    $("#divcharts").show();
    loadHighCharts(mdata, "Fisheries revenue in Crore", "Revenue in Crores", "Year", "divcharts");
}

function loadfishLandingchart() {
    var mdata = {
        "name": "Fish Landing in Tons",
        "y": [[2013, 68704], [2014, 65393], [2015, 79151], [2016, 45189], [2017, 27042], [2018, 45408]]
    };
    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
    $("#divcharts2").show();
    loadHighCharts(mdata, "Fish Landing in Tons", "Fish Landing in Tons", "Year", "divcharts2");
}

function loadfisherFolkchart() {
    var mdata = [{
        "name": "Total Active Fisherfolk (Full-time)",
        "data": [[2005, 5208], [2010, 5247]]
    }, {
        "name": "Active Fisherfolk (Part-time and Occasional)",
        "data": [[2005, 680], [2010, 233]]
    }];
    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
   // loadhighchartsColumnDynamic(mdata, "Active Fisherfolk in Puducherry", "No. of fishermen", "Year", "divcharts3");

    var mdata2 = [{
        "name": "Total Active Fisherfolk (Full-time)",
        "data": [[2005, 9503], [2010, 11510], [2016, 11501], [2020, 36449]]
    }, {
        "name": "Active Fisherfolk (Part-time and Occasional)",
        "data": [[2005, 838], [2010, 668], [2016, 974], [2020, 12344]]
    }];
    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
    $("#divcharts3").show();
    loadhighchartsColumnDynamic(mdata2, "Active Fisherfolk in Puducherry UT", "No. of fishermen", "Year", "divcharts3");
}

function loadtouristChartPudhu() {
    var mdata = [{
        "name": 'Domestic',
        "data": [[2013, 1000277], [2014, 1188093], [2015, 1297192], [2016, 1398289], [2017, 1531972], [2018, 1616660], [2019, 1713248], [2020, 1114942], [2021, 1253213]]
    },
    {
        "name": 'Foreign',
        "data": [[2013, 42624], [2014, 83291], [2015, 106153], [2016, 117437], [2017, 131401], [2018, 141133], [2019, 149919], [2020, 92080], [2021, 321]]
    }
    ];
    $("#divcharts").show();
    loadhighchartsColumnDynamic(mdata, "Tourism Statistics Puducherry", "No. of Tourists", "Year", "divcharts");
}

function loadtourismRevenuechart() {
    var mdata = [{
        "name": 'Expenditure',
        "data": [[2012, 234.6], [2013, 264.2], [2014, 371.1], [2015, 369.5], [2016, 335.8], [2017, 247.7], [2018, 148.8], [2019, -356.656], [2020, 103.299], [2021, 162.496], [2022, 197.235]]
    }];
    $("#divcharts2").show();
    loadhighchartsColumnDynamic(mdata, "Tourism Revenue Expenditure (INR mn)", "Year", "Expenditure(INR Mn)", "divcharts2");
}

function loadtourismResortCount() {
    var mdata = [{
        "name": 'Resorts',
        "data": [[2010, 8], [2011, 9], [2012, 9], [2013, 9], [2014, 9], [2015, 10], [2016, 11], [2017, 12], [2018, 15], [2019, 15], [2020, 16], [2021, 16], [2022, 16]]
    }];
    $("#divcharts3").show();
    loadhighchartsColumnDynamic(mdata, "Puducherry Resorts Count", "Year", "No. of resorts", "divcharts3");
}

function loadMarineoutfallChart() {      
    var mdata = [{
        "name": 'Kalapet',
        "data": [0.18, 1.48, 1.45, 0.04, 1.76, 3.07]
    },
        {
            "name": 'Thengaithittu',
            "data": [0.28, 0.81, 0, 5.58, 1.73, 3.44]
        }
    ];
    var mdata2 = [{
        "name": 'Kalapet',
        "data": [130.66, 21.88, 0.18, 1.48, 1.45, 0.04, 1.76, 3.07]
    },
     {
         "name": 'Thengaithittu',
         "data": [156.31, 25.47, 0.28, 0.81, 0, 5.58, 1.73, 3.44]
     }
    ];
    categ2 = ['Fe', 'Mn', 'Cd', 'Cu', 'Zn', 'Pb', 'As', 'Cr'];
    categ = ['Cd', 'Cu', 'Zn', 'Pb', 'As', 'Cr'];

    $("#divcharts").show(); $("#divcharts2").show();

    loadhighchartsColumnDynamic2(mdata2, categ2, "Primary Water Quality Criteria for Class SW-III Waters", "Elements", "Units (ug/l)", "divcharts", 'column');
    loadhighchartsColumnDynamic2(mdata, categ, "Primary Water Quality Criteria for Class SW-V Waters", "Elements", "Units (ug/l)", "divcharts2", 'column');
}

function loadhighchartsMarineOutfall() {
    $("#divcharts").show();
    Highcharts.chart('divcharts', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Primary water criteria for Class'
        },
        subtitle: {
            text: 'SW-III Waters'
        },
        xAxis: {
            crosshair: true,
            categories: ["Fe", "Mn", "Cd", "Cu", "Zn", "Pb", "As", "Cr"],
            title: {
                text: "Elements"
            }
        },
        yAxis: {
            title: {
                text: 'Units (ug/l)'
            },
            type: 'logarithmic'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            "name": 'Kalapet',
            "data": [130.66, 21.88, 0.18, 1.48, 1.45, 0.04, 1.76, 3.07]
        },
        {
            "name": 'Thengaithittu',
            "data": [156.31, 25.47, 0.28, 0.81, 0, 5.58, 1.73, 3.44]
        }
        ]
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
    var mdata = [{
        "name": 'Mangroves',
        "data": [47.27, 48.66, 49.62]
    }];
    var categories = ['2013', '2017', '2022'];
    loadhighchartsColumnDynamic2(mdata, categories, "Mangroves", "Year", "Area in Hectors", "divcharts", "column");
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