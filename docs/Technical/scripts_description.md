## Understanding the JavaScript Functionality
### Main.js
 - This is the main javascript file from where all the document initialises and calls other script files.
 
### 1. Web App Initialization
- when document is loading for the first time, web UI builds and events listners are created.
- Configuration files are read to dynamically build the menu with corresponding click events.
- The tools widget on the right side of the menu includes Layers List, Legend, Basemaps, and Print. Click events for these tools are initialized here.

### 2. Submenu Item Click and Layer Loading
- When a submenu item is clicked, `submenuItemClicked(layerName)` is triggered.
- It retrieves the configuration for the selected layer from `sub_menu_config`.
- If the layer is found, it updates the legend, description, and visibility settings.
- The map's view is adjusted using `map.setView([latitude, longitude], zoomLevel)`.
- If the layer data is not preloaded, it fetches the required JSON file and loads the layers dynamically.

### 3. Adding Layers to the Map
- The function `AddLayersToMap()` loops through `selectedItems`.
- It fetches layer configuration and creates a Leaflet WMS layer using:
  ```js
  var layer = L.Geoserver.wms(geoserverUrl, {
      layers: servicename,
      format: 'image/png',
      transparent: true
  });
  ```
- The layer is then added to the Leaflet map and stored in `addedLayers`.
- If the layer has a custom legend, it updates the legend panel accordingly.

### 4. Removing Layers from the Map
- The function `removeLayersFromMap(layerId, service)` removes a layer if it exists in `addedLayers`.
- It uses `map.removeLayer(addedLayers[layerId])` to remove it from the map.
- If the layer has a corresponding legend, it deletes the legend entry.

### 5. Resetting the Map
- The function `resetMap()` clears all layers and reinitializes the base map.
- Calls `clearlayers()`, `clearmap()`, and `addbaseMap()`.

### 6. Base Map Selection Tool
- Clicking a basemap option updates the session storage value.
- The function `setBaseMap(type)` clears the existing map and layers, then loads the new basemap.

### 7. Layers List Selection Tool
- `customutils.js` contains the script for building the Layers List.
- The list is built dynamically using WMS layers defined in JSON files.
- Upon selecting a layer in the list, it is overlaid on the map.
- The function `handleCheckboxChange(checkbox, name, service, number)` manages user-selected layers.
- If checked, the layer is added to `selectedItems`, otherwise, it is removed from the map.
- The child checkboxes update accordingly to maintain hierarchy.

### 8. Legend Tool
- Describes the map layer contents.
- Color-coded labels or icons represent each element type shown on the map.
