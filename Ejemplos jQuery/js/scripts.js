$(document).ready(function(){ /* Para esperar a que el DOM cargue */
});
/* OTRA FORMA */
$(function(){
    'use strict';
    // EJEMPLO SELECTORES
    $('header'); // SELECCIONO UNA ETIQUEDA
    $('.contenedor'); // SELECCIONO UNA CLASE
    $('#navegacion'); // SELECCIONO UN ID
    $('.contenedor .logo'); // SELECCIONO COMO EN CSS TAMBIEN DE LA CLASE CONTENEDOR, LA CLASE LOGO
    $('main article:first'); // SELECCIONO EL PRIMER ARTICLE DEL ARRAY
    $('main article:last'); // SELECCIONO EL ULTIMO ARTICLE DEL ARRAY
    $('main article:last').hide(); // OCULTO COMO SI FUERA DISPLAY = "NONE"
});