var layerstoexcludeinfilter = [];
function createLayerItem(name, service, number, layerJson) {
    const layerItem = document.createElement('div');
    layerItem.classList.add('layer-item');
    const checkboxholder = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = number;
    checkbox.value = service;
    checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, name, service, number));
    const label = document.createElement('label');
    label.htmlFor = number;
    label.textContent = name;
    const icondivholder = document.createElement('div');
    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-search-plus');
    icon2.setAttribute('data-type', 'fa-search-plus');
    icon2.addEventListener('click', () => zoomtolayer(layerJson, number));

    //icon2.addEventListener('click', () => handleIconClick(icon2));
    checkboxholder.appendChild(checkbox);
    checkboxholder.appendChild(label);
    if (name.length > 30) {
        layerItem.appendChild(checkbox);
        layerItem.appendChild(label);
    }
    else
        layerItem.appendChild(checkboxholder);

    icondivholder.appendChild(icon2)
    layerItem.appendChild(icondivholder);

    return layerItem;
}

function zoomtolayer(layersJson, layerId) {
    const result = findElementByNumber(layersJson, layerId);
    if (result != null) {
        servicename = result.service;
        fetchLayerBounds(servicename).then(bounds => {
            if (bounds) {
                map.fitBounds(bounds);
            }
        });
    }
}
async function fetchLayerBounds(layerName) {
    layerName = layerName.replace('MSPudhu:', '');
    layernamefor_matching = layerName;
    layerName = layerName.replace(/ /g, "%20");
    const url = geoserverUrl + "?service=WMS&version=1.1.1&request=GetCapabilities";
    try {
        const response = await fetch(url);
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'application/xml');
        const layers = xmlDoc.getElementsByTagName('Layer');

        for (let layer of layers) {
            const name = layer.getElementsByTagName('Name')[0]?.textContent;
            //console.log('fetchLayerBounds:  name:  '+ name + '  layerName: ' + layernamefor_matching);
            if (name === layernamefor_matching) {
                // console.log(layer);
                const bbox = layer.getElementsByTagName('LatLonBoundingBox')[0];
                const minX = parseFloat(bbox.getAttribute('minx'));
                const minY = parseFloat(bbox.getAttribute('miny'));
                const maxX = parseFloat(bbox.getAttribute('maxx'));
                const maxY = parseFloat(bbox.getAttribute('maxy'));
                return L.latLngBounds([minY, minX], [maxY, maxX]);
            }
        }
        // throw new Error('Layer not found');
    } catch (error) {
        console.error('Error fetching layer bounds:', error);
    }
}


function createToggleButton(name, number) {
    const checkboxholder = document.createElement('div');
    const button = document.createElement('div');
    button.classList.add('toggle-button');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = number;
    checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, name, null, number));
    const label = document.createElement('label');
    label.htmlFor = number;
    label.textContent = name;
    checkboxholder.appendChild(checkbox);
    checkboxholder.appendChild(label);
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-angle-down');
    button.appendChild(checkboxholder);
    button.appendChild(icon);
    icon.addEventListener('click', () => {
        button.classList.toggle('open');
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
    return button;
}

function createToggleContent() {
    const content = document.createElement('div');
    content.classList.add('toggle-content');
    return content;
}
var all_type_layers;
function buildMenu(data, callback) {
    all_type_layers = data;
    data.forEach(item => {
        if (item.Children) {
            //console.log(item.Name, item.Number);
            const toggleButton = createToggleButton(item.Name, item.Number);
            layersListDiv.appendChild(toggleButton);
            const toggleContent = createToggleContent();
            buildMenuRecursive(item.Children, toggleContent);
            layersListDiv.appendChild(toggleContent);
        } else {
            const layerItem = createLayerItem(item.Name, item.service, item.Number, all_type_layers);
            layersListDiv.appendChild(layerItem);
        }
    });
    if (callback) callback();
}

function buildMenuRecursive(children, parentElement) {
    children.forEach(child => {
        if (child.Children) {
            const toggleButton = createToggleButton(child.Name, child.Number);
            parentElement.appendChild(toggleButton);
            const toggleContent = createToggleContent();
            buildMenuRecursive(child.Children, toggleContent);
            parentElement.appendChild(toggleContent);
        } else {
            const layerItem = createLayerItem(child.Name, child.service, child.Number, all_type_layers);
            parentElement.appendChild(layerItem);
        }
    });
}

function findElementByNumber(data, numberToFind) {
    if (typeof data === 'object' && data !== null) {
        // If data is an object, check if it has the Number property
        if (data.Number === numberToFind) {
            return data;
        }
        // Recursively check all values if data is an object
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let result = findElementByNumber(data[key], numberToFind);
                if (result !== null) {
                    return result;
                }
            }
        }
    } else if (Array.isArray(data)) {
        // Recursively check all items if data is an array
        for (let item of data) {
            let result = findElementByNumber(item, numberToFind);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}



function setParent(el, newParent) {
    newParent.appendChild(el);
}

function toDataURL(src, callback) {
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };
    image.src = src;
}


function createLegendItem(serviceLayer, text, legenduri) {
    var legendUrl = legenduri + serviceLayer;
    //console.log(serviceLayer);
    var elem = document.createElement('div');
    elem.setAttribute("id", serviceLayer);
    elem.style.backgroundColor = "white";
    legendUrl = legendUrl.replace(/ /g, "%20")
    toDataURL(legendUrl, function (dataURL) {
        // alert(dataURL);
        elem.innerHTML += '<img src=' + dataURL + ' width="30">' + text;
        setParent(elem, legendDiv);
    });

}


function createCustomLegendItemWithHeader(serviceLayer, text, legenduri) {
    var legendUrl = legenduri + serviceLayer;
    var elem = document.createElement('div');
    elem.setAttribute("id", serviceLayer);
    elem.style.backgroundColor = "white";
    legendUrl = legendUrl.replace(/ /g, "%20");
    toDataURL(legendUrl, function (dataURL) {
        elem.innerHTML += '<img class="mb2" src=' + dataURL + '>';
        var elemheader = document.createElement('div');
        elemheader.style.backgroundColor = "white";
        elemheader.setAttribute("id", "header_" + serviceLayer);
        elemheader.innerHTML += text;
        elemheader.append(elem);
        setParent(elemheader, legendDiv);
    });
    // elem.innerHTML += '<img class="mb2" src=' + legendUrl + '>';
}
function deletelegendItem(servicename) {
    try {
        var elem = document.getElementById(servicename);
        //console.log("legend service: ", servicename + " legend item" + elem);
        elem.remove();
        var elemheader = document.getElementById("header_" + servicename);
        if (elemheader != undefined)
            elemheader.remove();
    }
    catch (e) {

    }
}