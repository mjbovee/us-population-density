var mapboxAccessToken = 'pk.eyJ1IjoibWpib3ZlZSIsImEiOiJjanMyZmJ3MzEyNDZ0M3pvNHZjYjcxZ3YxIn0.jCFK9HSCTXSmh7Zis8bpug'
var map = L.map('map').setView([37.8, -96], 4)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(map)

L.geoJson(statesData).addTo(map);