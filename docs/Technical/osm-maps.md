This document provides instructions on how to replace Google Maps and ESRI map services with open alternatives like OpenStreetMap. The current implementation uses these services as basemap providers in the Leaflet-based mapping application.

## Current Basemap Implementation

The basemap selection is handled in the `addbaseMap()` function, which switches between three options based on session storage:

1. **Google Satellite** - Uses Google's tile service. 
2. **ESRI World Imagery** - Uses ESRI's satellite imagery service.
3. **ESRI Topographic** - Uses ESRI's topographic map service.

The basemap selection UI is defined in the HTML.

## Replacement to OSM

Replacing these with OpenStreetMap-based alternatives would be **relatively straightforward** and involve these steps:

### 1. Update Tile Layer URLs
Replace the proprietary tile URLs with open alternatives:

**For satellite imagery replacement:**
- **Esri World Imagery (free with attribution)**: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`
- **Mapbox Satellite** (requires API key): `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}`

**For topographic maps:**
- **OpenStreetMap Standard**: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
- **OpenTopoMap**: `https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png`
- **Thunderforest Landscape** (requires API key): `https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png`

### 2. Modify the addbaseMap() Function
Update the tile layer configurations in `main.js`:

```javascript
// Replace Google Satellite with OpenStreetMap
if (val == "satellite") {
    basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    });
    map.addLayer(basemap);
}
```

### 3. Update UI Labels
Modify the basemap selection interface [6](#1-5)  to reflect the new options:

```html
<span class="bmlbl">OpenStreetMap</span>
<span class="bmlbl">OpenTopoMap</span>
```

## Considarations

- **Simple URL replacement**: The Leaflet `L.tileLayer()` API remains the same
- **No architectural changes**: The basemap switching logic doesn't need modification
- **Existing attribution system**: The code already handles attribution properly 
- **Tile availability**: Some OSM-based services have usage limits or require API keys
- **Visual consistency**: Different tile styles may affect the application's appearance
- **Performance**: Some free tile servers may be slower than commercial alternatives
- **Zoom levels**: Different services support different maximum zoom levels (OSM typically maxZoom: 19 vs Google's 22)

## Other Alternatives

1. **OpenStreetMap Standard** - Completely free, no API key required
2. **OpenTopoMap** - Free topographic alternative
3. **CartoDB Positron/Voyager** - Clean, modern styles, free tier available
4. **Stamen Terrain/Toner** - Artistic map styles, free with attribution

## Notes

The replacement would require minimal code changes. The current GeoServer integration for data layers would remain unchanged, as only the basemap tiles need replacement.
