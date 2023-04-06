var map = L.map('map').setView([51.165691, 10.451526], 6);

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);





var marker = L.marker([53.14118, 8.21467]).addTo(map);

var marker = L.marker([53.55073, 9.99302]).addTo(map); //Hamburg
var marker = L.marker([53.07582, 8.80717]).addTo(map); //Bremen
var marker = L.marker([52.37052, 9.73322]).addTo(map); //Hannover
var marker = L.marker([12.9292200, 50.8357000]).addTo(map); //Chemnitz
var marker = L.marker([49.3841872, 6.9537369]).addTo(map); //Saarland
var marker = L.marker([50.87481, 8.02431]).addTo(map); //Siegen
var marker = L.marker([51.05089, 13.73832]).addTo(map); //Siegen



L.marker([latitud, longitud]).addTo(map);

