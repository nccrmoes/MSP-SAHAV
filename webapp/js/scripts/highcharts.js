function loadHighCharts(data, title, ytitle, xtitle, chartid) {
    var chartt = Highcharts.chart(chartid, {
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: title,
            marginTop: 100
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
    var chartt = Highcharts.chart(chartid, {
        chart: {
            type: 'line',
            zoomType: 'x'
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
