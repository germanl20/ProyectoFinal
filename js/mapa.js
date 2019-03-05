document.addEventListener('DOMContentLoaded', function(){
//MAPA LEAFLET
var map = L.map('mapa').setView([-35.279970, -57.229264], 17); //se agregan las coordenadas en los corchetes / el otro numero es el zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-35.279970, -57.229264]).addTo(map)
    .bindPopup('LASOL UNDAV <br> Boletos disponibles <br> <a href="https://goo.gl/maps/Js699LZcGDE2" target="_blank">VER EN GOOGLE MAPS</a>')
    .openPopup();
    
    /* .bindTooltip('Otro tipo de mensaje al hacer hover')
    .openTooltip();
    */
});