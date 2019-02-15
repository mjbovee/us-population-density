var mapboxAccessToken = 'pk.eyJ1IjoibWpib3ZlZSIsImEiOiJjanMyZmJ3MzEyNDZ0M3pvNHZjYjcxZ3YxIn0.jCFK9HSCTXSmh7Zis8bpug'
var map = L.map('map').setView([37.8, -96], 4)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors'
}).addTo(map)

L.geoJson(statesData).addTo(map);

function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
        d > 200  ? '#E31A1C' :
        d > 100  ? '#FC4E2A' :
        d > 50   ? '#FD8D3C' :
        d > 20   ? '#FEB24C' :
        d > 10   ? '#FED976' : '#FFEDA0'
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    }
}

L.geoJson(statesData, {style: style}).addTo(map)