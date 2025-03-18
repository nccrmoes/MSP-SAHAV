# Using WMS and WFS Layers in Leaflet

This document provides step-by-step instructions for adding WMS and WFS layers to a Leaflet map using JavaScript and HTML. We will use a free Google Satellite map as the basemap.

## Prerequisites
- Basic knowledge of JavaScript and HTML.
- A web server (or you can run it locally using a simple setup like `Live Server` in VS Code).
- A GeoServer instance serving WMS and WFS layers.

## 1. Setting Up Leaflet
Include Leaflet in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaflet WMS & WFS</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
    <div id="map" style="height: 600px;"></div>
    <script>
        // Initialize map
        var map = L.map('map').setView([0, 0], 2);

        // Add Google Satellite basemap
        var googleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy; Google'
        }).addTo(map);
    </script>
</body>
</html>
```

## 2. Adding a WMS Layer
Replace `YOUR_WMS_URL` and `LAYER_NAME` with your GeoServer WMS service details:

```html
<script>
    var wmsLayer = L.tileLayer.wms("YOUR_WMS_URL", {
        layers: "LAYER_NAME",
        format: "image/png",
        transparent: true,
        attribution: "GeoServer"
    }).addTo(map);
</script>
```

## 3. Adding a WFS Layer
For WFS layers, we will use `fetch()` to get GeoJSON data.

```html
<script>
    var layerUrl = "YOUR_WFS_URL?service=WFS&version=1.0.0&request=GetFeature&typeName=LAYER_NAME&outputFormat=application/json";

    fetch(layerUrl)
        .then(response => response.json())
        .then(data => {
            var wfsLayer = L.geoJSON(data, {
                style: function (feature) {
                    return { color: "red", weight: 2 };
                }
            }).addTo(map);
        })
        .catch(error => console.error("Error loading WFS layer:", error));
</script>
```

## 4. Combining Layers in a Layer Control
To allow users to toggle layers, add a layer control:

```html
<script>
    var baseMaps = {
        "Google Satellite": googleSat
    };
    
    var overlayMaps = {
        "WMS Layer": wmsLayer
    };
    
    L.control.layers(baseMaps, overlayMaps).addTo(map);
</script>
```

## Conclusion
You have now successfully added WMS and WFS layers to a Leaflet map using JavaScript and HTML, with Google Satellite as the basemap. This setup allows interactive visualization of spatial data from a GeoServer instance.

