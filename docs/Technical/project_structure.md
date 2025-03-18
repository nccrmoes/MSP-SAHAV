## Project Structure

```
📁 Project Root
├── 📄 map.html
├── 📁 css/
│   ├── 🎨 theme.css
│
├── 📁 img/
│   ├── (Contains image assets)
│
├── 📁 js/
│   ├── 📁 config/
│   │   ├── 📄 datarepo.json
│   │   ├── 📄 ecology.json
│   │   ├── 📄 humanconflicts.json
│   │   ├── 📄 infra.json
│   │   ├── 📄 menuitems.json
│   │   ├── 📄 Multi_DataTree.json
│   │   ├── 📄 socioeconomic.json
│   │   ├── 📄 tourism_shore.json
│   │
│   ├── 📁 leaflet/
│   │   ├── (Leaflet-related files)
│   │
│   ├── 📁 scripts/
│   │   ├── 📄 main.js
│   │   ├── 📄 common.js
│   │   ├── 📄 charts.js
│   │   ├── 📄 call_charts.js
│   │   ├── 📄 customutils.js
```

## Detailed File Descriptions

### 1. Scripts Folder
- **`main.js`** → Main JavaScript file from where all other required methods are called.
- **`common.js`** → Handles toggling of layers, legend, basemaps, and menus.
- **`charts.js`** → Uses Highcharts to build all types of charts displayed on the webpage. Highcharts can be used freely with attribution.
- **`call_charts.js`** → Loads charts based on the selected layer.
- **`customutils.js`** → Dynamically builds the layers list from JSON. Toggles layers and attaches zoom event handlers.

### 2. Config Folder
- **`datarepo.json`** → Contains the submenus for the main navigation menus in the web layout.
- **`menuitems.json`** → Maps each menu item to its corresponding web map paths and descriptions.
- **`multi_datatree.json`** → A key in `menuitems.json` points to an object in this file. This file defines the layers tree for that menu item.
- Other JSON files like infra,ecology,socioeconomic json files contain relevant layers trees defined with web map services which are used to build the Layers List.

### 3. `map.html`
- This is the primary map page that contains the main navigation and widgets.
- Required JavaScript and stylesheet links are added at the top of this page.
- Highcharts links are referenced, which can be used freely with attribution.
- Local Leaflet scripts and styles are used for faster rendering.
- Free Leaflet plugins for printing and measuring are included.

## Troubleshooting

### Common Issues
- **Map Not Loading**: Check internet connection and refresh the page.
- **Layers Not Displaying**: Ensure the layer is selected and check for errors in the browser console (F12 > Console).
- **Slow Performance**: Close unnecessary tabs and check browser performance settings.

## Contact Support
For further assistance, contact the support team at **support@gmail.com**.

## Conclusion
This document outlines the essential functionalities of the web application and explains the key JavaScript methods used for managing the interactive map.