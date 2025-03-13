function hideAllSideDivs() {
    $('.attribute-query,#submenu_holder, .modalnew,.search-container, .basemapsidediv, .layersListSideDiv, .infosidediv, .legendsidediv, #villagesearchDiv, #divprintoptions, #divbasemaps, #spatialdiv').hide();
    //$('#divutils').removeClass('sidediv-hidden').addClass('sidediv-show');
   $('#divutils').show();
    //CloseDrawingTool();
}
function openSearch(){ hideAllSideDivs(); $('.search-container').show(); }

// Legend
function openLegend() { hideAllSideDivs(); $('.legendsidediv').show(); }
function closeLegend() { $('#divutils').hide(); $('.legendsidediv').hide(); }

// Layers List
function openLayersList() { hideAllSideDivs();  $('.layersListSideDiv').show(); }
function closeLayersList() { $('#divutils').hide(); $('.layersListSideDiv').hide(); }

// Basemaps
function openBasemaps() { hideAllSideDivs();  $('#divbasemaps').show(); }
function closeBasemaps() { $('#divbasemaps').hide(); }

// Print
function openPrint() { hideAllSideDivs();  $('#divprintoptions').show(); }
function closePrint() { $('#divprintoptions').hide(); }

// Info
function openInfo() { hideAllSideDivs();  $('.infosidediv').show(); }
function closeInfo() { $('.infosidediv').hide(); }

// Village Search
function openVillageSearch() { hideAllSideDivs();  $('#villagesearchDiv').show(); }
function closeVillageSearch() { $('#villagesearchDiv').hide(); }

// Spatial Box
function openSpatialbox() { hideAllSideDivs(); $('#spatialdiv').show(); }
function closeSpatialbox() { $('#spatialdiv').hide(); }

// Spatial Box
function openfeedbackmodel() { $('#modalOcean').show(); }
function closemodalfeedback() { $('#modalOcean').hide(); }

function closeattr_table() {$(".attribute-query").hide();}
function openAttributeQuery() {hideAllSideDivs(); $(".attribute-query").show();  }

function closeModal() {
    document.querySelector(".modal-overlay").style.display = "none";
}
function openModal(title,event) {
    event.stopPropagation(); 
    hideAllSideDivs();
    document.getElementById("modalOverlay").style.display = "flex";
    document.getElementById("download_layer_h").innerText=title;
}

// Layers List Toggle
$(".lnkinfo3, .lnkinfo4, .lnkinfo_cp, .lnkinfo_shorelinerate").click(function () {
    let target = `.${this.className.split(' ')[0].replace('lnkinfo', 'list')}`;
    $(target).toggle();
});

// Draggable Elements
function makeElementDraggable(element, handle) {
    let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);
    });

    function dragElement(e) {
        let deltaX = e.clientX - mouseX, deltaY = e.clientY - mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        element.style.top = (element.offsetTop + deltaY) + "px";
        element.style.left = (element.offsetLeft + deltaX) + "px";
    }

    function stopDragging() {
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);
    }
}

// Draggable Forms
function initDraggable(id, closeBtnId) {
    const element = document.getElementById(id);
    if (!element) return;
    
    makeElementDraggable(element, element.querySelector('.drag-handle'));
    const { top, left } = element.style;

    $(`#${closeBtnId}`).on('click', () => closeForm(element, top, left));
}

["attribute-query-form", "spatialdivcontents"].forEach(id => {
    initDraggable(id, `close_${id.split('-')[0]}`);
});

function closeForm(element, top, left) {
    element.style.display = 'none';
    element.style.top = top;
    element.style.left = left;
}


// Accordion Toggle
document.querySelectorAll(".accordion").forEach(acc => {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});

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

// Attribute Table Toggle
function showOrHideAttrTable() {
    const table = $('#att_tbl_holder'), btn = $('#maximize i');
    let isMaximized = true;

    $('#maximize').click(() => {
        table.css('max-height', isMaximized ? '32px' : '300px');
        btn.toggleClass('fa-chevron-down fa-chevron-up');
        isMaximized = !isMaximized;
    });
}

//function toggleFabMenu() {
//    document.getElementById('fab-menu').classList.toggle('active');
//}
//function toggleSubmenu() {
//    document.getElementById('submenu').classList.toggle('active');
//}
function positionSubmenu() {
    let sidebar = document.querySelector(".sidebar");
    let submenu = document.getElementById("submenu_holder");
    if (sidebar.classList.contains("collapsed")) {
        submenu.style.left = "80px";
    } else {
        submenu.style.left = "250px";
    }
}
function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
    positionSubmenu();
}
       

function toggleSubmenu(event) {
    event.stopPropagation(); 
    const sidebarItem = event.currentTarget;
    const menuKey = sidebarItem.getAttribute("data-menu");
    const submenu = document.getElementById("submenu");
    const submenu_holder = document.getElementById("submenu_holder");
    console.log(menuKey);
    // Populate the submenu with JSON data
    if (menu_config[menuKey]) {
        generateSubmenuFromJson(menu_config[menuKey]);
    } else {
        submenu.innerHTML = "";
    }

    // Position submenu
    const rect = sidebarItem.getBoundingClientRect();
    const sidebar = document.querySelector(".sidebar");
    const isCollapsed = sidebar.classList.contains("collapsed");

    //submenu.style.left = isCollapsed ? rect.right + 20 + "px" : rect.right + 20 + "px";
    //submenu.style.top = rect.top + "px";

    submenu_holder.style.left = isCollapsed ? rect.right + 20 + "px" : rect.right + 20 + "px";
    submenu_holder.style.top = rect.top + "px";
    
   // console.log("submenu_holder:   " + submenu_holder.style);
    // Add animation and show submenu
    //submenu_holder.classList.toggle("active");
    //console.log("submenu_holder:   " + submenu_holder.style.display);
    submenu_holder.style.display = (submenu_holder.style.display === "block") ? "none" : "block";
}



function toggleDropdown(element) {
    let icon = element.querySelector("i");
    let nextElement = element.nextElementSibling;

    // Close all submenus first
    document.querySelectorAll(".sub-items").forEach(sub => {
        if (sub !== nextElement) {
            sub.style.display = "none";
            let parentIcon = sub.previousElementSibling.querySelector("i");
            if (parentIcon) {
                parentIcon.classList.remove("fa-chevron-up");
                parentIcon.classList.add("fa-chevron-down");
            }
        }
    });

    // Toggle the clicked submenu
    if (nextElement && nextElement.classList.contains("sub-items")) {
        let isCurrentlyOpen = nextElement.style.display === "block";
        nextElement.style.display = isCurrentlyOpen ? "none" : "block";

        icon.classList.toggle("fa-chevron-down", isCurrentlyOpen);
        icon.classList.toggle("fa-chevron-up", !isCurrentlyOpen);
    }
}


function toggleDropdown(element) {
    element.classList.toggle("active");
    let icon = element.querySelector("i");
    let nextElement = element.nextElementSibling;
    if (nextElement && nextElement.classList.contains("sub-items")) {
        nextElement.style.display = nextElement.style.display === "block" ? "none" : "block";
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    }
}


document.addEventListener("click", function (event) {
    const submenu_holder = document.getElementById("submenu_holder");
    const sidebar = document.querySelector(".sidebar");
    if (!submenu_holder.contains(event.target) && !sidebar.contains(event.target)) {
        submenu_holder.classList.remove("active");
    }
});


// Generate submenu from JSON data
function generateSubmenuFromJson(jsonData) { 
    let html = "";
    jsonData.forEach((categoryObj) => {
        // Check if the category has items
        let hasItems = categoryObj.items && categoryObj.items.length > 0;  
        console.log(hasItems);
        if (hasItems) {
            // If the category has child items, show the dropdown and sub-items  
            html += `<div class="dropdown">${categoryObj.category} <i class="fas fa-chevron-down"></i></div>`;
            html += `<div class="sub-items">`;
            categoryObj.items.forEach((item) => {
                html += `<div class="submenu-item" onclick="submenuItemClicked('${item.name}')">${item.name}<i onclick="openModal('${item.name}',event);" class="fas fa-download fltr"></i></div>`;
            });
            html += `</div>`;
        } else {
            // If no child items, make the category itself clickable
            html += `<div class="dropdown" onclick="submenuItemClicked('${categoryObj.category}')">${categoryObj.category}</div>`;
        }
    });
    document.getElementById("submenu").innerHTML = html;
}


function toggleBubbleMenu() {
    document.getElementById('bubbleMenu').classList.toggle('active');
}



