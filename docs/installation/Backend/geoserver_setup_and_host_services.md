# GeoServer Installation and Dataset Deployment

This document provides step-by-step instructions for installing GeoServer, deploying vector and raster datasets, and hosting API endpoints for WMS and WFS services. Please refer to technical documentation for more details

## 1. Installing GeoServer

### Prerequisites
- Java (JDK 11 or later recommended)
- Tomcat (Optional, if deploying as a servlet)
- PostgreSQL with PostGIS (Optional, for advanced spatial data management)

### Steps to Install GeoServer
1. **Download GeoServer**
   - Visit [GeoServer Downloads](https://geoserver.org/download/)
   - Choose the latest stable release.
2. **Install GeoServer**
   - Extract the downloaded ZIP file.
   - Run the startup script:
     - Windows: `start.bat`
     - Linux/macOS: `./bin/start.sh`
3. **Access GeoServer**
   - Open a browser and go to: `http://localhost:8080/geoserver`
   - Default credentials:
     - Username: `admin`
     - Password: `geoserver`

## 2. Deploying Vector and Raster Datasets

### Adding a Vector Layer (Shapefile / PostGIS)
1. **Login to GeoServer**
2. **Create a Workspace**
   - Navigate to `Workspaces` → `Add new workspace`
   - Provide a `Name` and `Namespace URI`
3. **Add a Data Store**
   - Navigate to `Stores` → `Add new Store`
   - Choose:
     - **Shapefile** (for local shapefiles)
     - **PostGIS** (for PostGIS database)
   - Configure the store settings and `Save`.
4. **Publish the Layer**
   - Select the newly created store → `Add new layer`
   - Configure the layer settings (bounding box, SRS, styles)
   - Click `Publish`

### Adding a Raster Layer (GeoTIFF / ImageMosaic)
1. **Login to GeoServer**
2. **Create a Workspace** (if not already created)
3. **Add a Raster Data Store**
   - Navigate to `Stores` → `Add new Store`
   - Choose:
     - **GeoTIFF** (for single raster files)
     - **ImageMosaic** (for tiled raster datasets)
   - Upload the raster file and configure the settings.
4. **Publish the Raster Layer**
   - Select the newly created store → `Add new layer`
   - Set coordinate reference system (CRS) and bounding box.
   - Apply styles and click `Publish`.

## 3. Publishing Vector and Raster Layers with Styles

### Adding Custom Styles using QGIS (Open Source)
QGIS is a powerful open-source GIS software that allows users to create and customize styles for both vector and raster layers before publishing them to GeoServer.

1. **Install QGIS**
   - Download and install QGIS from [QGIS Downloads](https://qgis.org/en/site/forusers/download.html)

### Styling Vector Layers in QGIS
1. **Load the vector layer into QGIS**
2. **Open Layer Properties** → `Symbology`
3. **Customize the style** using categories, graduated colors, or rule-based symbology.
4. **Export as SLD**:
   - Click `Style` → `Save Style...`
   - Select `SLD` format and save the file.
5. **Upload the SLD file to GeoServer**:
   - Navigate to `Styles` in GeoServer.
   - Click `Add a New Style` and upload the SLD file.

### Styling Raster Layers in QGIS
1. **Load the raster file into QGIS**
2. **Open Layer Properties** → `Symbology`
3. **Choose rendering type**:
   - **Singleband gray**: Renders a grayscale image.
   - **Singleband pseudocolor**: Assigns colors based on pixel values.
   - **Multiband color**: Uses multiple bands (e.g., RGB composite).
4. **Adjust classification and color ramp**
5. **Export as SLD** (same steps as vector layers)
6. **Upload the SLD file to GeoServer** (same steps as vector layers)

## 4. Hosting WMS and WFS API Endpoints

### Enabling WMS (Web Map Service)
- Navigate to `Services` → `WMS` and enable the service.
- Access the WMS endpoint:
  ```
  http://localhost:8080/geoserver/ows?service=WMS&version=1.1.1&request=GetCapabilities
  ```

### Enabling WFS (Web Feature Service)
- Navigate to `Services` → `WFS` and enable the service.
- Access the WFS endpoint:
  ```
  http://localhost:8080/geoserver/ows?service=WFS&version=1.1.0&request=GetCapabilities  ```
