# MSP-SAHAV
Marine Spatial Planning for Puducherry, India

##GIS Website Template

This repository provides a template for hosting GIS layers using Leaflet and GeoServer. It allows users to easily add WMS and WFS layers and customize their own GIS applications.

## Features
- Interactive map with **Google Map** as the base layer.
- Supports **WMS and WFS layers** from GeoServer.
- Dynamic layer management with JavaScript.
- Customizable styles for vector and raster layers.
- Open-source and easily extendable.

## Prerequisites
- Web Server (e.g., Apache, Nginx, or a local server using Python or VS Code Live Server)
- [GeoServer](https://geoserver.org/) installed and running
- [QGIS](https://qgis.org/en/site/) for styling layers (optional)
- Basic knowledge of JavaScript and HTML

## Installation
### 1. Clone the repository
```sh
 git clone https://github.com/roopalav/MSP-SAHAV.git
 cd MAP-SAHAV
```

### 2. Set up a web server (for local testing)
If you are using Python, run:
```sh
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### 3. Configure GIS Layers
Edit the `config.js` file to add your GeoServer WMS and WFS layer URLs:
```js
var WMS_LAYER_URL = "https://your-geoserver-url/geoserver/wms";
var WFS_LAYER_URL = "https://your-geoserver-url/geoserver/wfs";
```

## Usage
### Adding a WMS Layer
Modify `map.js` to include your WMS layer:
```js
var wmsLayer = L.tileLayer.wms(WMS_LAYER_URL, {
    layers: "workspace:layername",
    format: "image/png",
    transparent: true,
    attribution: "GeoServer"
}).addTo(map);
```

### Adding a WFS Layer
Use `fetch()` to load vector data from WFS:
```js
fetch(WFS_LAYER_URL + "?service=WFS&version=1.0.0&request=GetFeature&typeName=workspace:layername&outputFormat=application/json")
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: { color: "red", weight: 2 }
        }).addTo(map);
    })
    .catch(error => console.error("Error loading WFS layer:", error));
```

### Customizing Layers with QGIS
1. Open your raster/vector layer in [QGIS](https://qgis.org/en/site/).
2. Style it using the **Layer Properties** panel.
3. Export the style as an **SLD file**.
4. Upload the SLD to GeoServer to apply the custom style.

## Contributing
Feel free to fork this repository and contribute with improvements, fixes, or additional features.

## License
This project is open-source under the MIT License.

## Support
For issues or questions, open a GitHub issue or contact us at `your-email@example.com`.
