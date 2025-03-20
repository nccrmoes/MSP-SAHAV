function hideAllSideDivs() {
    $('.basemapsidediv, .layersListSideDiv,.legendsidediv, #divbasemaps').hide();
    $('#divutils').show();  
}

// Legend
function openLegend() { hideAllSideDivs(); $('.legendsidediv').show(); }
function closeLegend() { $('#divutils').hide(); $('.legendsidediv').hide(); }

// Layers List
function openLayersList() { hideAllSideDivs();  $('.layersListSideDiv').show(); }
function closeLayersList() { $('#divutils').hide(); $('.layersListSideDiv').hide(); }

// Basemaps
function openBasemaps() { hideAllSideDivs(); $('#divbasemaps').show(); }
function closeBasemaps() { $('#divbasemaps').hide(); }


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
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const isMediumScreen = window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches;
    // Calculate the hiding position
    const sidebarWidth = mySlide.outerWidth(true); // Include margin if present
    //const sidebar_hide = isSmallScreen ? -Math.min(sidebarWidth, width) : -0.4 * width;
    if (isSmallScreen) {
        // For small screens
        sidebar_hide = -Math.min(sidebarWidth, width);
    } else if (isMediumScreen) {
        // For medium screens like Surface Pro (912px width)
        sidebar_hide = -sidebarWidth; // Ensures the handle is visible
    } else {
        // For large screens
        sidebar_hide = -0.4 * width;
    }

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

