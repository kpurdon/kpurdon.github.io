var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.transform([-105.227213, 39.866478], 'EPSG:4326', 'EPSG:3857')
        )
      })
    ]}),
  style: new ol.style.Style({
    image: new ol.style.Icon(({
      opacity: 0.75,
      src: 'assets/home.png'
    }))
  })
});

var map = new ol.Map({
  target: 'locMap',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'] })]
      })
    }),
    vectorLayer
  ],
  view: new ol.View({
    center: ol.proj.transform([-105.227213, 39.866478], 'EPSG:4326', 'EPSG:3857'),
    zoom: 9
  })
});
