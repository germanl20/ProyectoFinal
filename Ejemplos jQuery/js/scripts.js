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
    $('main article:first').remove(); // BORRO EL ELEMENTO DEL DOM

    var copia = $('main article:last').clone(); // CLONO O DUPLICO UN ELEMENTO
    $('main').append(copia); // ES COMO EL APPENDCHILD DE JAVASCRIPT, AGREGO AL FINAL DEL MAIN EL ELEMENTO ARTICLE
    $('main').prepend(copia); // AGREGO AL INICIO DEL MAIN EL ELEMENTO

    // EVENTOS

    $('.logo img').on('click', function(){ 
        console.log('haz hecho click en el logo');
        $(this).remove();
    });

    $('.logo img').on('mouseenter', function(){ 
        console.log('Entro en el logo');
    });

    $('.logo img').on('mouseleave', function(){ 
        console.log('Salgo del logo');
    });

    $('#menu').on('click', function(){
        $('#navegacion').show(); // MUESTRA EL OBJETO, ES IGUAL A DISPLAY: BLOCK
    });

    // OTRA FORMA DE EVENTOS CON OBJETOS

    $('main').on({
        click: function(){
            $('main').addClass('activo fondorojo');
        },
        mouseenter: function(){
            $('main').addClass('activo');
        },
        mouseleave: function(){
            $('main').addClass('fondorojo');
        }
    });

    // AGREGAR CLASES

    // $('#navegacion nav ul li:first').addClass('activo');

    $('#navegacion nav ul li a').on('click', function(e){
        $('#navegacion nav ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');
    });

    // CHILDREN

    $('#navegacion').children(); // DEVUELVE EL PRIMER HIJO, PUEDO COLOCAR VARIOS SEGUIDOS EJ:
    $('#navegacion').children().children();

    // PARENT

    $('article:first').parent(); // DEVUELVE EL PADRE DEL ELEMENTO

    // SIGUIENTE ELEMENTO

    $('article:first').next(); // ME DEVUELVE EL SIGUIENTE ELEMENTO

    // MODIFICAR CONTENIDO

    $('main article:first h2').text(); // DEVUELVE EL TEXTO
    $('main article:first h2').text('hola'); // MODIFICO EL TEXTO
    $('main article h2').html('<h1>LONDRES</H1>'); // MODIFICO EL TEXTO Y PUEDO DARLE FORMATO HTML
});