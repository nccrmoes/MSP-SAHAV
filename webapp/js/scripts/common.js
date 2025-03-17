function hideAllSideDivs() {
    $('.basemapsidediv, .layersListSideDiv,.legendsidediv,#divprintoptions, #divbasemaps').hide();
    $('#divutils').show();  
}
function openSearch(){ hideAllSideDivs(); $('.search-container').show(); }

// Legend
function openLegend() { hideAllSideDivs(); $('.legendsidediv').show(); }
function closeLegend() { $('#divutils').hide(); $('.legendsidediv').hide(); }

// Layers List
function openLayersList() { hideAllSideDivs();  $('.layersListSideDiv').show(); }
function closeLayersList() { $('#divutils').hide(); $('.layersListSideDiv').hide(); }

// Basemaps
function openBasemaps() { hideAllSideDivs(); $('#divbasemaps').show(); }
function closeBasemaps() { $('#divbasemaps').hide(); }

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

function openModal(title,event) {
    event.stopPropagation(); 
    hideAllSideDivs();    
    document.getElementById("modalOverlay").style.display = "flex";
    document.getElementById("download_layer_h").innerText = title;
    loadCaptcha();
}

// Read JSON File
function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}


const sidebar = document.getElementById("narration");
const handle = document.querySelector(".sidebar-handle");

//For INFO button Toggling
document.addEventListener("DOMContentLoaded", function () {   
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
    handle.innerHTML = '<span class="vertical-text">I<br/>N<br/>F<br/>O</span>';
}

function showRightHideSideBar() {
    var mySlide = $("#narration");
    mySlide.removeClass('closed').animate({ 'right': 0 }, 500);
    handle.innerHTML = '<i class="fas fa-angle-right"></i>';
}

$(".bmicon").click(function () {
    const basemap = $(this).data("basemap");
    sessionStorage.setItem("basemap", basemap);
    resetMap();
});


function openPrint()
{     
        var d = new Date();
        openLegend();
        $(".progressloading ").show();
        leafletImage(map, function (err, canvas) {
            var imgData = canvas.toDataURL("image/svg+xml", 1.0);
            var dimensions = map.getSize();
            window.jsPDF = window.jspdf.jsPDF;          
            var doc = new jsPDF('l', 'pt', 'letter')    
            doc.addImage(imgData, 'PNG', 30, 150, dimensions.x * 0.42, dimensions.y * 0.42);

            html2canvas($("#divLegend"), {
                onrendered: function (canvas) {
                    var imgData = canvas.toDataURL('image/png');
                    const img = new Image();
                    //debugger
                    img.src = imgData;
                    img.onload = () => {
                        doc.addImage(imgData, 'PNG', 520, 150);                        
                        doc.save('map.pdf');
                    };
                }
            });
            doc.setFontSize(11);                   
            doc.text("Date And Time: " + d.toLocaleString(), 30, 500);           
            $(".progressloading ").hide();           
        });
}
