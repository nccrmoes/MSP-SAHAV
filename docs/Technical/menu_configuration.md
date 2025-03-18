**User Documentation for the Web Application**
## Understanding the  Menu Configuration

### Structure of the  Menu
The  menu is structured using three key configuration files:

1. **datarepo.json** - Defines the main menu categories and their items.
2. **menuitems.json** - Provides details about each clickable category or item.
3. **Multi_DataTree.json** - Maps each menu item to its respective web map service (WMS) layers.

### How It Works
1. When a user clicks on a **category** or **menu item** , the application looks up the corresponding entry in `menuitems.json`.
2. This entry contains:
   - A **key** to locate the relevant data in `Multi_DataTree.json`.
   - A **jsonpath** that links to `Multi_DataTree.json`.
   - Other metadata like title, map center, zoom level, and additional descriptions.
3. The application then retrieves the relevant layers from `Multi_DataTree.json` using the key.
4. The selected layers are displayed on the map using Leaflet and GeoServer WMS.

### Example
#### **datarepo.json**
```json
{
  "dataRepository": [
    {
      "category": "Boundaries",
      "items": []
    },
    {
      "category": "LULC",
      "items": []
    }
  ]
}
```

#### **menuitems.json**
```json
{
  "LULC": {
    "data": ["lulc"],
    "key": "Lulc",
    "jsonpath": "Multi_DataTree.json",
    "title": "Land Use Land Cover",
    "center": [11.95, 79.8],
    "zoom": 12,
    "about": "",
    "chapterheader": ""
  }
}
```

#### **Multi_DataTree.json**
```json
{
  "Lulc": [
    {
      "Number": "lulc",
      "service": "MSP:Pondy_lulc",
      "Name": "Land Use"
    }
  ]
}
```

### Creating a Custom  Menu
To add a new category and layers:
1. Add a new **category** in `datarepo.json`.
2. Define its details in `menuitems.json`, specifying:
   - `key`: Unique identifier for the menu item.
   - `jsonpath`: Path to `Multi_DataTree.json`.
   - `center` and `zoom`: Map location and zoom level.
3. Add corresponding layers in `Multi_DataTree.json` with:
   - `Number`: Unique layer identifier.
   - `service`: The WMS service name.
   - `Name`: Display name for the layer.

## Dynamic Submenu building using config files.

User Clicks Sidebar Category
       │
       ▼
Application Fetches Data from `datarepo.json`
       │
       ▼
Application Checks `menuitems.json` for Details
       │
       ├── Retrieves key, jsonpath, title, center, zoom
       │
       ▼
Application Retrieves Layer Information from `Multi_DataTree.json`
       │
       ├── Uses key from `menuitems.json` to find relevant WMS layers
       │
       ▼
Application Loads Selected Layers onto the Map (Leaflet + GeoServer)
       │
       ├── Adds WMS layers using Leaflet
       │
       ▼
UI Updates with Legend and Layer Panel Adjustments
       │
       ├── Updates legend based on active layers
       ├── Displays selected layers in the layers panel
       ▼
Layers are Visible on the Map