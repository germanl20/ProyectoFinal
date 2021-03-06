$(document).ready(function(){ /* Para esperar a que el DOM cargue */
});
/* OTRA FORMA */
$(function(){
    'use strict';
    // // EJEMPLO SELECTORES
    // $('header'); // SELECCIONO UNA ETIQUEDA
    // $('.contenedor'); // SELECCIONO UNA CLASE
    // $('#navegacion'); // SELECCIONO UN ID
    // $('.contenedor .logo'); // SELECCIONO COMO EN CSS TAMBIEN DE LA CLASE CONTENEDOR, LA CLASE LOGO
    // $('main article:first'); // SELECCIONO EL PRIMER ARTICLE DEL ARRAY
    // $('main article:last'); // SELECCIONO EL ULTIMO ARTICLE DEL ARRAY
    // $('main article:last')/*.hide();*/ // OCULTO COMO SI FUERA DISPLAY = "NONE"
    // $('main article:first').remove(); // BORRO EL ELEMENTO DEL DOM

    // var copia = $('main article:last').clone(); // CLONO O DUPLICO UN ELEMENTO
    // $('main').append(copia); // ES COMO EL APPENDCHILD DE JAVASCRIPT, AGREGO AL FINAL DEL MAIN EL ELEMENTO ARTICLE
    // $('main').prepend(copia); // AGREGO AL INICIO DEL MAIN EL ELEMENTO

    // // EVENTOS

    // $('.logo img').on('click', function(){ 
    //     console.log('haz hecho click en el logo');
    //     $(this).remove();
    // });

    // $('.logo img').on('mouseenter', function(){ 
    //     console.log('Entro en el logo');
    // });

    // $('.logo img').on('mouseleave', function(){ 
    //     console.log('Salgo del logo');
    // });

    // $('#menu').on('click', function(){
    //     $('#navegacion').show(); // MUESTRA EL OBJETO, ES IGUAL A DISPLAY: BLOCK
    // });

    // // OTRA FORMA DE EVENTOS CON OBJETOS

    // $('main').on({
    //     click: function(){
    //         $('main').addClass('activo fondorojo');
    //     },
    //     mouseenter: function(){
    //         $('main').addClass('activo');
    //     },
    //     mouseleave: function(){
    //         $('main').addClass('fondorojo');
    //     }
    // });

    // // AGREGAR CLASES

    // // $('#navegacion nav ul li:first').addClass('activo');

    // $('#navegacion nav ul li a').on('click', function(e){
    //     $('#navegacion nav ul li a').removeClass('activo');
    //     //e.preventDefault(); previene la accion por defecto
    //     $(this).addClass('activo');
    // });

    // // CHILDREN

    // $('#navegacion').children(); // DEVUELVE EL PRIMER HIJO, PUEDO COLOCAR VARIOS SEGUIDOS EJ:
    // $('#navegacion').children().children();

    // // PARENT

    // $('article:first').parent(); // DEVUELVE EL PADRE DEL ELEMENTO

    // // SIGUIENTE ELEMENTO

    // $('article:first').next(); // ME DEVUELVE EL SIGUIENTE ELEMENTO

    // // MODIFICAR CONTENIDO

    // $('main article:first h2').text(); // DEVUELVE EL TEXTO
    // $('main article:first h2').text('hola'); // MODIFICO EL TEXTO
    // $('main article h2').html('<h1>LONDRES</H1>'); // MODIFICO EL TEXTO Y PUEDO DARLE FORMATO HTML

    // // CAMBIAR ATRIBUTOS

    // $('.navegacion ul li:first a').attr('href'); // DEVUELVE EL VALOR DEL ATRIBUTO
    // $('.navegacion ul li:first a').attr('href', 'http://www.eltilin.ga'); // MODIFICO EL VALOR DEL ATRIBUTO
    // $('.navegacion ul li:first a').attr('target', '_blank');
    // $('article:first img').attr('src', 'img/imagen_1.jpg');

    // $('article:first img').on('click', function(){
    //     $(this).attr('src', 'img/imagen_2.jpg');
    // });

    // // MANIPULAR CSS (AUNQUE SIEMPRE ES MEJOR HACERLO CON CSS)

    // $('.logo img').css({'width':'400px'});
    // $('main article h2').css({'color':'#db008d'})
    // $('aside').css({
    //     'background-color':'#e1e1e1',
    //     'text-transform':'uppercase',
    //     'padding':'20px'
    // });

    // $('aside').on('mouseenter', cambiarFondo);

    // function cambiarFondo(){
    //     $('.navegacion').css('background-color', 'red'); // ACA NO USE LLAVE ENTONCES SE SEPARA POR COMA
    // }

    // // ANIMACIONES

    // $('.logo img').on('click', function(){
    //     $(this).animate({'width':'200px'}, 500); // PRIMER PARAMETRO LO QUE VA A HACER LA ANIMACION, EL SEGUNDO ES LA DURACION EN MILISEGUNDOS
    // });

    // $('aside ul li:first a').click(function(){ // OTRA FORMA DE REALIZAR EL EVENTO CLICK
    //     $('main article:first').slideUp(1000);
    // });

    // $('footer').click(function(){ // OTRA FORMA DE REALIZAR EL EVENTO CLICK
    //     $('main article:first').slideDown(1000);
    // });

    // // FOR EACH Y ARRAYS

    // var proximosViajes = ['Londres', 'Paris', 'Punta Indio', 'Nueva York'];
    // $.each(proximosViajes, function(indice, valor){ // RECORRE EL ARREGLO, ES EL FOR EACH
    //     if(indice == 0) $('aside').append('<h2> Proximos viajes </h2>');
    //     $('aside').append('<li>' + valor + '</li>');
    // });

    // var viajesPorFechas = {
    //     primero: 'Londres',
    //     segundo: 'Barcelona',
    //     tercero: 'Punta Indio',
    //     cuarto: 'Paris'
    // };
    // $.each(viajesPorFechas, function(indice, valor){ // EL INDICE ES LA VARIABLE EJ PRIMERO
    //     $('aside').append('<li>' + indice + ' - ' + valor + '</li>');
    // });

    /* EJEMPLO TAB */
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut(); // PARA OCULTAR CON UNA ANIMACION
        $(enlace).fadeIn(); // PARA MOSTRAR CON UNA ANIMACION

        return false; // PARA QUE NO SALTE A LA POSICION DEL ELEMENTO EN PANTALLA
    }

});