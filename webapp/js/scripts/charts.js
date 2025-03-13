
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

function loadHighCharts2(data, categories, title, ytitle, xtitle, chartid) {
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
            "data": data
            //"name": data.name
        }],
        xAxis: {
            categories: categories,
            crosshair: true,
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

function loadfisherFolkchart1() {
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

function loadMarineoutfallChart2() {
    //"Fe", "Mn", "Cd", "Cu", "Zn", "Pb", "As", "Cr"
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

function loadmangrovesChart() {
    var mdata = {
        "name": "Mangroves Area per Year in Ha",
        "y": [[2013, 47.27], [2017, 48.66], [2022, 49.62]]
    };
   
    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
    $("#divcharts").show();
    loadHighCharts(mdata, "Mangroves Area in Ha", "Area", "Year", "divcharts", 'column');
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


//Ajax Call Fetch JSON 

function GetHDCharts(pointtable, syear) {
    $.ajax({
        "url": "BuoyData.aspx/GetHDCharts",
        "type": "POST",
        "data": "{'table':'" + pointtable + "','year':'" + syear + "'}",
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "success": function (data) {
            var mdata = JSON.parse(data.d);
            mdata = mdata[0].data;
            //console.log(mdata.data);
            var currentSpdArr = []; var currentDirArr = []; var surfaceElevation = []; var categories = []; var xaxis;
            for (var i = 0; i < mdata.length; i++) {
                const myArray = mdata[i].Dtime.split(" ");
                categories.push(myArray[1]);
                if (i == 0)
                    xaxis = myArray[0]
                currentSpdArr.push(parseFloat(mdata[i].cSpeed));
                currentDirArr.push(parseFloat(mdata[i].cdirection));
                surfaceElevation.push(parseFloat(mdata[i].SurfaceElevation));
                //  console.log(myArray + +parseFloat(mdata[i].cSpeed));
            }

            //$('.description').show();
            loadHighCharts2(currentSpdArr, categories, "Current Speed", "Current Speed (m/s)", xaxis, "divchart_currSpeed");
            loadHighCharts2(currentDirArr, categories, "Current Direction", "Current Direction", xaxis, "divchart_currDir");
            loadHighCharts2(surfaceElevation, categories, "Surface Elevation", "Surface Elevation", xaxis, "divchart_SE");
        },
        error: function (e) {
            console.log(e);
        }
    });
}

function loadBuoyCharts() {
    //console.log('buoycharts');
    $.ajax({
        "url": "BuoyData.aspx/GetBuoyData",
        "type": "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        "success": function (data) {
            var mdata = JSON.parse(data.d);
           // console.log(mdata);
            $('#divcharts').hide(); $('#divcharts2').hide();
            $('#divcharts3').hide(); $('#divcharts4').hide();
            $('#divmangroveLinks').hide();
            $('.buoyda').show();
            //$(".chapter-header").hide();
            var latestId = mdata.length - 1;
            $("#spnlog").text(mdata[latestId].LogDate);            
            $("#spnwindspd").text(mdata[latestId].WindSpeed + " m/s");
            $("#spnwindDir").text(mdata[latestId].WindDirection + " deg");
            $("#spntemp").text(mdata[latestId].AirTemperature + " C");
            $("#spnhum").text(mdata[latestId].Humidity + " %");
            $("#spnpressure").text(mdata[latestId].AirPressure + "");
            $("#spnwatertemp").text(mdata[latestId].WaterTemperature + " C");
            $("#spnsalinity").text(mdata[latestId].Salinity);
            $("#spnDO").text(mdata[latestId].DO);
            $("#spnPH").text(mdata[latestId].PH);
            $("#spnturbidity").text(mdata[latestId].Turbidity);
            $("#spnchloro").text(mdata[latestId].Chlorophyll);
            $("#spnphyto").text(mdata[latestId].Phycoerythrin);
            $("#spnwaterspd").text(mdata[latestId].WaterSpeed + " m/s");
            $("#spnwaterdir").text(mdata[latestId].WaterDirection + " deg");

            var windspdarr = []; var categories = []; var windDirarr = []; var windairtemp = [];
            var humdArr = []; var presArr = []; var waterTempArr = []; var salinityArr = [];
            var DOArr = []; var PHArr = []; var turbidityArr = []; var phytoArr = []; var chloroArr = [];
            var waterSpdArr = []; var waterDirArr = [];

            for (var i = 0; i < mdata.length; i++) {
                const myArray = mdata[i].LogDate.split(" ");
                categories.push(myArray[1]);
                windspdarr.push(parseFloat(mdata[i].WindSpeed));
                windDirarr.push(parseFloat(mdata[i].WindDirection));
                windairtemp.push(parseFloat(mdata[i].AirTemperature));
                humdArr.push(parseFloat(mdata[i].Humidity));
                presArr.push(parseFloat(mdata[i].AirPressure));
                waterTempArr.push(parseFloat(mdata[i].WaterTemperature));
                salinityArr.push(parseFloat(mdata[i].Salinity));
                DOArr.push(parseFloat(mdata[i].DO));
                PHArr.push(parseFloat(mdata[i].PH));
                turbidityArr.push(parseFloat(mdata[i].Turbidity));
                phytoArr.push(parseFloat(mdata[i].Phycoerythrin));
                chloroArr.push(parseFloat(mdata[i].Chlorophyll));
                waterSpdArr.push(parseFloat(mdata[i].WaterSpeed));
                waterDirArr.push(parseFloat(mdata[i].WaterDirection));
            }

            // console.log(windspdarr)               
            loadHighCharts2(windspdarr, categories, "Wind Speed", "DateTime", "Wind Speed (m/s)", "chartwindspd");
            loadHighCharts2(windDirarr, categories, "Wind Direction", "DateTime", "Wind Direction (Degrees)", "chartwindDir");
            loadHighCharts2(windairtemp, categories, "Air Temperature", "DateTime", "Air Temperature (C)", "chartairtemp");
            loadHighCharts2(humdArr, categories, "Humidity", "DateTime", "Humidity (%)", "chartHumidity");
            loadHighCharts2(presArr, categories, "Air Pressure", "DateTime", "Air Pressure", "chartPres");
            loadHighCharts2(waterTempArr, categories, "Water Temperature", "DateTime", "Water Temperature (C)", "chartwaterTemp");
            loadHighCharts2(salinityArr, categories, "Salinity", "DateTime", "Salinity", "chartsalinity");
            loadHighCharts2(DOArr, categories, "DO", "DateTime", "Dissolved Oxygen", "chartDO");
            loadHighCharts2(PHArr, categories, "PH", "DateTime", "PH", "chartPH");
            loadHighCharts2(turbidityArr, categories, "Turbidity", "DateTime", "Turbidity", "chartTurbidity");
            loadHighCharts2(chloroArr, categories, "Chlorophyll", "DateTime", "Chlorophyll", "chartChloro");
            loadHighCharts2(phytoArr, categories, "Phycoerythrin", "DateTime", "Phycoerythrin", "chartPhyto");
            loadHighCharts2(waterSpdArr, categories, "WaterSpeed", "DateTime", "WaterSpeed", "chartwaterSpd");
            loadHighCharts2(waterDirArr, categories, "WaterDirection", "DateTime", "WaterDirection", "chartwaterDir");
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function loadSWQMChartsDO_DIN(table) {
    $.ajax({
        "url": "BuoyData.aspx/GetSWQMChartsData",
        "type": "POST",
        "data": "{'table':'" + table + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        "success": function (data) {
            var mdata = JSON.parse(data.d);
            mdata = mdata[0].data;
            //console.log(mdata);
            $('.description').show();
            //$(".chapter-header").hide();   

            var arrDO_near = []; var arrDIN_near = []; var arrDIP_near = []; var arrCHL = []; var arrSource = [];
            var arrDO_off = []; var arrDIN_off = []; var arrDIP_off = [];
            for (var i = 0; i < mdata.length; i++) {
                //if(categories.indexOf(mdata[i].year) == -1)
                //categories.push(mdata[i].year);
                var source = mdata[i].zone;
                if (source.toLowerCase() == "nearshore") {
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = (parseFloat(mdata[i].DO));
                    arrDO_near.push(obj);
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = parseFloat(mdata[i].DIN);
                    arrDIN_near.push(obj);
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = parseFloat(mdata[i].DIP);
                    arrDIP_near.push(obj);
                }
                else {
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = parseFloat(mdata[i].DO);
                    arrDO_off.push(obj);
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = parseFloat(mdata[i].DIN);
                    arrDIN_off.push(obj);
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = parseFloat(mdata[i].DIP);
                    arrDIP_off.push(obj);
                }
            }
            var mdata_DO = [{
                "name": 'Nearshore',
                "data": arrDO_near,
                "color": "red"
            },
             {
                 "name": 'Offshore',
                 "data": arrDO_off,
                 "color": "blue"
             }
            ];

            var mdata_DIP = [{
                "name": 'Nearshore',
                "data": arrDIP_near,
                "color": "green"
            },
            {
                "name": 'Offshore',
                "data": arrDIP_off,
                "color": "orange"
            }
            ];

            var mdata_DIN = [{
                "name": 'Nearshore',
                "data": arrDIN_near,
                "color": "orange"
            },
            {
                "name": 'Offshore',
                "data": arrDIN_off,
                "color": "blue"
            }
            ];

            $("#divcharts").show(); $("#divcharts2").show(); $("#divcharts3").show();

            loadhighchartsScatter(mdata_DO, "Dissoved Oxygen", "Year", "mg/l", "divcharts");
            loadhighchartsScatter(mdata_DIN, "Dissoved Inorganic Nitrogen", "Year", "µmol/l", "divcharts2");
            loadhighchartsScatter(mdata_DIP, "Dissoved Inorganic Phosphate", "Year", "µmol/l", "divcharts3");

        },
        error: function (data) {
            console.log(data);
        }
    });
}

function loadSWQMCharts_CHL(table) {
    $.ajax({
        "url": "BuoyData.aspx/GetSWQMChartsData",
        "type": "POST",
        "data": "{'table':'" + table + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        "success": function (data) {
            var mdata = JSON.parse(data.d);
            mdata = mdata[0].data;
            //console.log(mdata);
            $('.description').show();
            //$(".chapter-header").hide();  
            var arrCHL_near = []; var arrCHL_off = [];
            for (var i = 0; i < mdata.length; i++) {
                var source = mdata[i].zone;
                if (source.toLowerCase() == "nearshore") {
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = (parseFloat(mdata[i].Chlorophyll));
                    arrCHL_near.push(obj);
                }
                else {
                    var obj = {};
                    obj["x"] = (mdata[i].year);
                    obj["y"] = (parseFloat(mdata[i].Chlorophyll));
                    arrCHL_off.push(obj);
                }
            }
            var mdata_CHL = [{
                "name": 'Nearshore',
                "data": arrCHL_near,
                "color": "red"
            },
             {
                 "name": 'Offshore',
                 "data": arrCHL_off,
                 "color": "blue"
             }
            ];
            $("#divcharts4").show();
            loadhighchartsScatter(mdata_CHL, "ChloroPhyll", "Year", "µmol/l", "divcharts4");
        },
        error: function (data) {
            console.log(data);
        }
    });
}

//Pudu Weather
function loadPuduWeather(table, chartId, ytitle,chartTitle) {
    $.ajax({
        "url": "BuoyData.aspx/GetPudhuWeatherData",
        "type": "POST",
        "data": "{'table':'" + table + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        "success": function (data) {          
            var mdata = JSON.parse(data.d);                  
            $('.description').show();            
            var categories = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
            highchartsBoxplot(categories, mdata, chartId, chartTitle, ytitle);
        },
        error: function (data) {
            console.log(data);
        }
    });
    //function parsedata(temparr) {
    //    var reArr=[];
    //    for(var i=0; i<temparr.length; i++)
    //    {
    //        var s=temparr[i];
    //        if (s != "") {
    //            reArr.push(parseInt(s));
    //        }
    //        else
    //            reArr.push(0);
    //    }
    //    return reArr;
    //}
}


function highchartsBoxplot(categories, data, containerId, title, ytitle) {
    //var d = JSON.stringify(data);
   //console.log(data);
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
            //plotLines: [{
            //    value: 932,
            //    color: 'red',
            //    width: 1,
            //    label: {
            //        text: 'Theoretical mean: 932',
            //        align: 'center',
            //        style: {
            //            color: 'gray'
            //        }
            //    }
            //}]
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

//Laksh Charts

function loadPiechartFishermen() {
    $("#divcharts").show();
    Highcharts.chart('divcharts', {
        chart: {
            // plotBackgroundColor: null,
            //plotBorderWidth: null,
            //plotShadow: false,
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'ISLAND WISE TUNA LANDING'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        // accessibility: {
        //point: {
        //    valueSuffix: '%'
        //}
        //},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}'
                }
            }
        },
        series: [{
            name: 'Tuna Landing',
            colorByPoint: true,
            data: [{
                name: 'Kavaratti',
                y: 3622
            }, {
                name: 'Agatti',
                y: 993
            }, {
                name: 'Kadmat',
                y: 1344
            }, {
                name: 'Kiltan',
                y: 855
            }, {
                name: 'Chetlat',
                y: 620
            }, {
                name: 'Bitra',
                y: 378
            }, {
                name: 'Andrott',
                y: 735
            }, {
                name: 'Kalpeni',
                y: 374
            }, {
                name: 'Minicoy',
                y: 2495
            }]
        }]
    });
}

function loadPieFairPriceChart() {
    Highcharts.chart('divcharts3', {
        chart: {
            // plotBackgroundColor: null,
            //plotBorderWidth: null,
            //plotShadow: false,
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'ISLAND-WISE FAIR PRICE SHOPS (PDS)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        // accessibility: {
        //point: {
        //    valueSuffix: '%'
        //}
        //},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}'
                }
            }
        },
        series: [{
            name: 'FAIR PRICE SHOPS (PDS)',
            colorByPoint: true,
            data: [{
                name: 'Kavaratti',
                y: 5
            },
             {
                 name: 'Agatti',
                 y: 4
             }, {
                 name: 'Kiltan',
                 y: 3
             }, {
                 name: 'Chetlat',
                 y: 3
             }, {
                 name: 'Bitra',
                 y: 1
             }, {
                 name: 'Andrott',
                 y: 6
             }, {
                 name: 'Kalpeni',
                 y: 3
             }, {
                 name: 'Minicoy',
                 y: 5
             },
            {
                name: 'Amini',
                y: 5
            }]
        }]
    });
}

function loadfisherFolkchart() {
    var mdata = [{
        "name": "Total Active Fisherfolk (Full-time)",
        "data": [["Kavaratti", 520], ["Agatti", 537], ["Amini", 170], ["Kadmat", 320], ["Kiltan", 270], ["Chetlat", 120], ["Bitra", 50], ["Andrott", 360], ["Kalpeni", 485], ["Minicoy", 455]],
        // "colorByPoint": "true"
    }, {
        "name": "Active Fisherfolk (Part-time and Occasional)",
        "data": [["Kavaratti", 535], ["Agatti", 965], ["Amini", 395], ["Kadmat", 525], ["Kiltan", 370], ["Chetlat", 280], ["Bitra", 25], ["Andrott", 1210], ["Kalpeni", 1105], ["Minicoy", 980]],
        //"colorByPoint": "true"
    }];
    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
    //loadhighchartsColumnDynamic(mdata, "Active Fisherfolk in Lakshadweep", "No. of fishermen", "Year", "divcharts3");

    categories = ["Kavaratti", "Agatti", "Amini", "Kadmat", "Kiltan", "Chetlat", "Bitra", "Andrott", "Kalpeni", "Minicoy"];
    loadhighchartsColumnDynamic2(mdata, categories, "Fisherfolk in Lakshadweep UT", "Island", "No. of fishermen", "divcharts2", "cylinder");
}

function loadAgricultureCoCo_chart() {
    var mdata = [{
        "name": '2014-15',
        "data": [395.9, 342.82, 246.1, 307.94, 150.9, 100.6, 7.8, 457.6, 259.5, 427.87],
        "color": 'red'
    }, {
        "name": '2015-16',
        "data": [394.9, 340.82, 245.1, 307.34, 150.3, 100.3, 7.8, 457.6, 259.5, 426.87],
        "color": 'green'
    },
         {
             "name": '2016-17',
             "data": [393.4, 339.12, 244.2, 306.5, 150.09, 100.1, 7.7, 454.34, 259.12, 426.57],
             "color": 'blue'
         },
         {
             "name": '2017-18',
             "data": [392.4, 338.12, 243.5, 306.1, 149.6, 100.1, 7.7, 452.75, 258.5, 426.1],
             "color": 'yellow'
         }
    ];
    categories = ["Kavaratti", "Agatti", "Amini", "Kadmat", "Kiltan", "Chetlat", "Bitra", "Andrott", "Kalpeni", "Minicoy"];
    loadhighchartsColumnDynamic2(mdata, categories, "AREA UNDER COCONUT CULTIVATION", "Island", "Area (Hectors)", "divcharts", "cylinder");
}

function loadAgricultureCoCo_Harvested_chart() {
    var mdata = [
        {
            "name": '2014-15',
            "data": [133.2, 116.83, 102.38, 84.2, 52.25, 40.84, 6.18, 139.98, 79.51, 127.93],
            "color": 'green'
        },
        {
            "name": '2015-16',
            "data": [139.47, 110.8, 100.82, 90.31, 51.74, 40.88, 8.9, 147.1, 80.6, 136.58],
            "color": 'red'
        },
      {
          "name": '2016-17',
          "data": [132.04, 108.39, 100.66, 104.35, 51.63, 40.88, 9.36, 139.96, 79.03, 144.1],
          "color": 'blue'
      },
         {
             "name": '2017-18',
             "data": [128.32, 108.39, 100.66, 104.38, 51.69, 40.89, 9.57, 136.15, 78.97, 117.07],
             "color": 'orange'
         }
    ];
    categories = ["Kavaratti", "Agatti", "Amini", "Kadmat", "Kiltan", "Chetlat", "Bitra", "Andrott", "Kalpeni", "Minicoy"];
    loadhighchartsColumnDynamic2(mdata, categories, " COCONUT HARVESTED IN ISLANDS", "Island", "Coconut Count in Lakhs", "divcharts2", "cylinder");
}

function loadtouristChart() {
    var mdata = [{
        "name": 'Domestic',
        "data": [['2014-2015', 13997], ["2015-2016", 6682], ["2016-2017", 7126], ["2017-2018", 8278]]
    },
          {
              "name": 'Foreign',
              "data": [['2014-2015', 1086], ["2015-2016", 649], ["2016-2017", 662], ["2017-2018", 1504]]
          }
    ];
    categories = ['2014-2015', "2015-2016", "2016-2017", "2017-2018"]
    loadhighchartsColumnDynamic2(mdata, categories, "Tourism Statistics Lakshadweep", "Years", "No. of Tourists", "divcharts", "cylinder");
}

//function loadmangrovesChart() {
//    var mdata = {
//        "name": "Mangroves Area per Year in Ha",
//        "y": [[2013, 47.27], [2017, 48.66], [2022, 49.62]]
//    };
//    //var mdata =[[2013,47.27], [2017,48.66], [2022,49.62]];
//    loadHighCharts(mdata, "Mangroves Area in Ha", "Area", "Year", "divcharts");
//}

function loadRainfallChart() {
    var mdata = [{
        "name": 'Minicoy',
        "data": [1422.4, 1891.8, 1531.0, 1424.5, 1620.7, 1244.8, 1801.4, 959.7, 2001.6],
        "color": 'green'
    },
     {
         "name": 'Amini',
         "data": [1800.2, 1957.1, 1335.1, 1463.4, 1292.5, 1257.0, 1541.1, 1220.7, 1561.7],
         "color": 'blue'
     }
    ];
    categories = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
    loadhighchartsColumnDynamic2(mdata, categories, "ACTUAL RAINFALLRECORDED VARIOUS CENTERS IN LAKSHADWEEP(IN MMS)", "Island", "Rainfall (mm)", "divcharts", "cylinder");
}

function loadCargoMovementChart() {
    var mdata = [{
        "name": '2017-18',
        "data": [8863.20, 2523.55, 4774.60, 5218.96, 1184.26, 2543.85, 1635.79, 3666.61, 3099.61, 207.13, 0.00, 900.53, 14272.28],
        "color": 'blue'
    }
    ];
    categories = ["Kavaratti", "Kalpeni", "Andrott", "Minicoy", "Chetlat", "Kadmat", "Kiltan", "Agatti", "Amini", "Bitra", "Bangaram", "Kochi", "Beypore"];
    loadhighchartsColumnDynamic2(mdata, categories, "CARGO MOVEMENT RECRDS IN MT FOR FINANCIAL YEAR 2017-18", "Island", "No.of ships", "divcharts", "column");
}

function loadpowerChart() {
    var mdata = [{
        "name": 'Installed Capacity   In KW',
        "data": [21760, 21760, 22698, 21886]
    },
          {
              "name": 'Generation (000KWH) ',
              "data": [46926, 49177, 49764, 50027]
          }
    ];
    categories = ['2014-2015', "2015-2016", "2016-2017", "2017-2018"]
    loadhighchartsColumnDynamic2(mdata, categories, "Installed Capacity and Generation", "Years", "", "divcharts", "cylinder");
}

function loadpowerConsumptionChart() {
    var mdata = [{
        "name": 'Electric Consumption',
        "data": [43979, 45892, 49895, 48502]
    }
    ];
    categories = ['2014-2015', "2015-2016", "2016-2017", "2017-2018"]
    loadhighchartsColumnDynamic2(mdata, categories, "Electric Consumption", "Years", "KW", "divcharts2", "line");
}


function createMangrovesChart() {
    var mdata = [{
        "name": 'Mangroves',
        "data": [47.27, 48.66, 49.62]
    }];
    var cate = ['2013', '2017', '2022'];
    mangrovesChart = loadhighchartsColumnMangroves(mdata, cate, "Mangroves", "year", "Area in Hectors", "mangchart", "column")
}

function loadhighchartsColumnMangroves(mdata, categ, title, xtitle, ytitle, chartid, type) {
    return Highcharts.chart(chartid, {
        chart: {
            type: type
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
            },
            type: 'logarithmic'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
                //colorByPoint:true
            }
            //series: {
            //    cursor: 'pointer',
            //    point: {
            //        events: {
            //            click: function () {
            //                hightlightMang(this.name);
            //            }
            //        }
            //    }
            //}
        },
        series: mdata
    });
}

function loadPieChart(datan, titletxt,subtl) {
    //console.log(data);
    //var mdata = JSON.stringify(data);
    //console.log(mdata);
    Highcharts.chart('divcharts', {
        chart: {
            // plotBackgroundColor: null,
            //plotBorderWidth: null,
            //plotShadow: false,           
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: titletxt
        },
        subtitle:{
            text: subtl
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} ha</b>'
        },
        // accessibility: {
        //point: {
        //    valueSuffix: '%'
        //}
        //},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true, 
                    format: '<b>{point.name}</b>: {point.y} ha'
                }
            }
        },       
        series: [{
            name:titletxt,
            //colorByPoint: true,
            data: datan
        }]
    });
};

