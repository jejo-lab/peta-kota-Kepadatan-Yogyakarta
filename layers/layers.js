var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPendudukKotaYogyakarta_1 = new ol.format.GeoJSON();
var features_KepadatanPendudukKotaYogyakarta_1 = format_KepadatanPendudukKotaYogyakarta_1.readFeatures(json_KepadatanPendudukKotaYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPendudukKotaYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKotaYogyakarta_1.addFeatures(features_KepadatanPendudukKotaYogyakarta_1);
var lyr_KepadatanPendudukKotaYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKotaYogyakarta_1, 
                style: style_KepadatanPendudukKotaYogyakarta_1,
                popuplayertitle: 'Kepadatan Penduduk Kota Yogyakarta',
                interactive: true,
    title: 'Kepadatan Penduduk Kota Yogyakarta<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_0.png" /> Rendah(8-12 per km2)<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_1.png" /> Sedang(12-14 per km2)<br />\
    <img src="styles/legend/KepadatanPendudukKotaYogyakarta_1_2.png" /> Tinggi(14-18 per km2)<br />' });
var format_Polygontoline_2 = new ol.format.GeoJSON();
var features_Polygontoline_2 = format_Polygontoline_2.readFeatures(json_Polygontoline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygontoline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygontoline_2.addFeatures(features_Polygontoline_2);
var lyr_Polygontoline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygontoline_2, 
                style: style_Polygontoline_2,
                popuplayertitle: 'Polygon to line',
                interactive: true,
                title: '<img src="styles/legend/Polygontoline_2.png" /> Polygon to line'
            });
var format_pointonsurface_3 = new ol.format.GeoJSON();
var features_pointonsurface_3 = format_pointonsurface_3.readFeatures(json_pointonsurface_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointonsurface_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointonsurface_3.addFeatures(features_pointonsurface_3);
var lyr_pointonsurface_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointonsurface_3, 
                style: style_pointonsurface_3,
                popuplayertitle: 'point on surface',
                interactive: true,
                title: '<img src="styles/legend/pointonsurface_3.png" /> point on surface'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KepadatanPendudukKotaYogyakarta_1.setVisible(true);lyr_Polygontoline_2.setVisible(true);lyr_pointonsurface_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KepadatanPendudukKotaYogyakarta_1,lyr_Polygontoline_2,lyr_pointonsurface_3];
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'join_Luas', 'join_Pendu': 'join_Pendu', 'join_Kepad': 'join_Kepad', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_Polygontoline_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'join_Luas', 'join_Pendu': 'join_Pendu', 'join_Kepad': 'join_Kepad', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_pointonsurface_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'join_Luas', 'join_Pendu': 'join_Pendu', 'join_Kepad': 'join_Kepad', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'join_No': 'Hidden', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'Hidden', 'join_Cuaca': 'Hidden', 'join_Erups': 'Hidden', 'join_Gelom': 'Hidden', 'join_Gel_1': 'Hidden', 'join_Gempa': 'Hidden', 'join_Kebak': 'Hidden', 'join_Keker': 'Hidden', 'join_Tanah': 'Hidden', });
lyr_Polygontoline_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join_No': 'TextEdit', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'TextEdit', 'join_Cuaca': 'TextEdit', 'join_Erups': 'TextEdit', 'join_Gelom': 'TextEdit', 'join_Gel_1': 'TextEdit', 'join_Gempa': 'TextEdit', 'join_Kebak': 'TextEdit', 'join_Keker': 'TextEdit', 'join_Tanah': 'TextEdit', });
lyr_pointonsurface_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join_No': 'TextEdit', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'TextEdit', 'join_Cuaca': 'TextEdit', 'join_Erups': 'TextEdit', 'join_Gelom': 'TextEdit', 'join_Gel_1': 'TextEdit', 'join_Gempa': 'TextEdit', 'join_Kebak': 'TextEdit', 'join_Keker': 'TextEdit', 'join_Tanah': 'TextEdit', });
lyr_KepadatanPendudukKotaYogyakarta_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'join_Luas': 'inline label - always visible', 'join_Pendu': 'inline label - always visible', 'join_Kepad': 'inline label - always visible', });
lyr_Polygontoline_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join_No': 'no label', 'join_Luas': 'no label', 'join_Pendu': 'no label', 'join_Kepad': 'no label', 'join_Banji': 'no label', 'join_Cuaca': 'no label', 'join_Erups': 'no label', 'join_Gelom': 'no label', 'join_Gel_1': 'no label', 'join_Gempa': 'no label', 'join_Kebak': 'no label', 'join_Keker': 'no label', 'join_Tanah': 'no label', });
lyr_pointonsurface_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join_No': 'no label', 'join_Luas': 'no label', 'join_Pendu': 'no label', 'join_Kepad': 'no label', 'join_Banji': 'no label', 'join_Cuaca': 'no label', 'join_Erups': 'no label', 'join_Gelom': 'no label', 'join_Gel_1': 'no label', 'join_Gempa': 'no label', 'join_Kebak': 'no label', 'join_Keker': 'no label', 'join_Tanah': 'no label', });
lyr_pointonsurface_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});