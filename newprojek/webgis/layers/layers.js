var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_kecamatan_1 = new ol.format.GeoJSON();
var features_kecamatan_1 = format_kecamatan_1.readFeatures(json_kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_1.addFeatures(features_kecamatan_1);var lyr_kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_1, 
                style: style_kecamatan_1,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_1_0.png" />  0.0000 - 1.0000 <br />\
    <img src="styles/legend/kecamatan_1_1.png" />  1.0000 - 2.0000 <br />\
    <img src="styles/legend/kecamatan_1_2.png" />  2.0000 - 3.0000 <br />\
    <img src="styles/legend/kecamatan_1_3.png" />  3.0000 - 4.0000 <br />\
    <img src="styles/legend/kecamatan_1_4.png" />  4.0000 - 5.0000 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kecamatan_1];
lyr_kecamatan_1.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', 'perbaikan': 'perbaikan', });
lyr_kecamatan_1.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', 'perbaikan': 'TextEdit', });
lyr_kecamatan_1.set('fieldLabels', {'id': 'no label', 'nama_kec': 'no label', 'perbaikan': 'no label', });
lyr_kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});