require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, MapView, FeatureLayer) {

  var template = { // autocasts as new PopupTemplate()
    title: "What Happened?",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "CollisnTyp",
        label: "Collision Type",
        visible: true
      }]
    }]
  };

  var symbol = {
    type: "simple-marker", 
    color: "red"
  };
  var renderer = {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: symbol
  };

  const fl = new FeatureLayer({
    url: "https://services2.arcgis.com/zNjnZafDYCAJAbN0/arcgis/rest/services/Traffic_Collisions/FeatureServer",
    outFields: ["*"],
    popupTemplate: template,
    renderer: renderer
  });

  var map = new Map({
    basemap: "streets",
    layers: [fl]
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
      xmin: -118.264858634618,
      ymin: 33.5444932701483,
      xmax: -117.299011374275,
      ymax: 35.0054716855699,
      spatialReference: 4326
    }
  });

});
