# MSP-SAHAV  
**Marine Spatial Planning for Puducherry, India** [About](docs/Manual.docx)
![Marine Spatial Planning](img_msp.jpg)  

## Meets Digital Public Good Eligibility Criteria  
The **Puducherry Geo MSP portal** aligns with multiple **United Nations Sustainable Development Goals (SDGs)**, primarily:  

### 🌊 SDG 14 - Life Below Water  
- **Target 14.2**: Sustainably manage and protect marine and coastal ecosystems.  
- **Target 14.5**: Conserve at least 10% of coastal and marine areas.

### 🌍 SDG 13 - Climate Action  
- MSP enhances climate resilience by planning for coastal adaptation and mitigating sea-level rise impacts.  

### 🌱 SDG 15 - Life on Land  
- MSP integrates coastal zone management, protecting mangroves, seagrass, and wetlands.  

### 🏙️ SDG 11 - Sustainable Cities and Communities  
- Supports coastal urban planning, reducing the environmental impacts of coastal development.  

### 🏗️ SDG 9 - Industry, Innovation, and Infrastructure  
- Facilitates sustainable maritime infrastructure, including ports, offshore wind farms, and aquaculture.  

---

## GIS Website Template  
This repository provides a **template** for hosting GIS layers using **Leaflet** and **GeoServer**. It allows users to easily add **Web Map Service (WMS) layers** and customize their own GIS applications.  

### **Features**  
✔️ Interactive map with **Google Maps** or **ESRI Maps** as the base layer.  
✔️ Supports **WMS and WFS layers** from GeoServer.  
✔️ Dynamic layer management using JavaScript.  
✔️ Customizable styles for vector and raster layers.  
✔️ Visualization of regional statistics.  
✔️ Dynamically built and customizable UI components.  
✔️ Open-source and easily extendable.  

---

## ✅ Prerequisites

To set up and work with this project, you’ll need the following:

- A web server (e.g., Python HTTP server, VS Code Live Server, or IIS for deployment).
- [GeoServer](https://geoserver.org/) installed and running.
- Basic understanding of **hosting vector and raster files in GeoServer**  
  ➤ Refer to [GeoServer Setup & Hosting Guide](docs/Installation/Backend/geoserver_setup_and_host_services.md)
- [QGIS](https://qgis.org/en/site/) for styling layers (optional).  
  ➤ For styling vector/raster layers, see the [QGIS Styling Guide](https://docs.qgis.org/3.40/en/docs/user_manual/working_with_vector/vector_properties.html#symbology-properties)
- Basic knowledge of **JavaScript, HTML, and CSS**
- Familiarity with the [Leaflet](https://leafletjs.com/reference.html) JavaScript API  
  ➤ See [Guide to Consuming GeoServer APIs](docs/Installation/Frontend/consume_geoserver_apis.md)

---

## 📚 Documentation

Our project includes well-organized documentation, divided into technical and user-facing content:

### 🔧 Technical Documentation
- [Project Structure](docs/Technical/project-structure.md)
- [Web Application Design](docs/Technical/menu_configuration.md)
- [Technical Scripts Description](docs/Technical/scripts_description.md)

### 👤 User Documentation
- [Webpage User Guide](docs/User/Webpage_User_Doc.md)

For complete insights into the system setup, usage, and internal workings, explore the documents above.


## Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/nccrmoes/MSP-SAHAV.git
cd MSP-SAHAV


## 2. Set up a web server (for local testing)

### Option 1
If you are using Python, run:
```sh
python -m http.server 8080
```
Then open `http://localhost:8080/map.html` in your browser.

### Option 2
If you are using Node.js
cd path\to\your\project

npm install -g http-server

http-server -p 8000

Then Open http://localhost:8000/map.html in your browser.

### Option 3
Copy the extracted folder in /inetpub/wwwroot/MAP-SAHAV
add a virtual application in IIS pointing to this folder.
Browse map.html from IIS which http://localhost:port/map.html in browser

### 3. Configure GIS Layers
Edit the `main.js` file to add your GeoServer WMS and WFS layer URLs:
```js
var WMS_LAYER_URL = "https://your-geoserver-url/geoserver/wms";
var WFS_LAYER_URL = "https://your-geoserver-url/geoserver/wfs";
```

## Contributing
Feel free to fork this repository and contribute with improvements, fixes, or additional features.

## License
This project is open-source under the Apache 2.0 License.

## Support
For issues or questions, open a GitHub issue or contact us at `nccrmoeschennai@gmail.com`.