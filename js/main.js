(function(){
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){
        
        //DATOS USUARIO
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        
        // CAMPOS PASES
        var pase_dia = document.getElementById('pase_dia');
        var pase_dos_dias = document.getElementById('pase_dos_dias');
        var pase_completo = document.getElementById('pase_completo');

        // BOTONES Y DIVS
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_Productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //EXTRAS
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

    if(document.getElementById('calcular')){
        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('change', mostrarDias);
        pase_dos_dias.addEventListener('change', mostrarDias);
        pase_completo.addEventListener('change', mostrarDias);

        nombre.addEventListener('blur', validarInput);
        apellido.addEventListener('blur', validarInput);
        email.addEventListener('blur', validarInput);
        email.addEventListener('blur', validarMail);

        function validarInput(){
            if(this.value == ''){
                this.style.boxShadow = '0px 0px 5px 0px rgba(255,18,18,1)';
                this.placeholder = 'Rellena este campo!';
            }else{
                this.style.boxShadow = '0px 0px 5px 0px rgba(88,255,76,1)';
            }
        }

        function validarMail(){
            if(this.value.indexOf('@') > -1){
                //INDEXOF nos devuelve si la cadena tiene ese caracter o palabra, en ese caso devuelve algo mayor a -1, si no esta devuelve -1
                this.style.boxShadow = '0px 0px 5px 0px rgba(88,255,76,1)';
            }else{
                this.style.boxShadow = '0px 0px 5px 0px rgba(255,18,18,1)';
                this.placeholder = 'Correo incorrecto';
            }
        }

        function calcularMontos(event){
            event.preventDefault(); //evitar tomar el primer valor
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }
            else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0; //con el parseInt me aseguro que sean numero
                
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + (cantCamisas * 10 * .93) + (cantEtiquetas * 2);
                
                var listadoProductos = [];

                if(boletosDia >= 1) listadoProductos.push(boletosDia + ' Pases por día');
                if(boletos2Dias >= 1) listadoProductos.push(boletos2Dias + ' Pases por dos días');
                if(boletoCompleto >= 1) listadoProductos.push(boletoCompleto + ' Pases completos');
                if(cantCamisas >= 1) listadoProductos.push(cantCamisas + ' Camisas');
                if(cantEtiquetas >= 1) listadoProductos.push(cantEtiquetas + ' Etiquetas');
                
                lista_Productos.style.display = "block";

                lista_Productos.innerHTML = '';
                for(var i = 0; i < listadoProductos.length; i++){
                    lista_Productos.innerHTML += '<p>' + listadoProductos[i] + '</p>' + '<br/>';
                }
        
                suma.innerHTML = "$" + totalPagar.toFixed(2); /* toFixed recorta el numero de decimales, en este caso a dos. ej: 19.20 */
                if(totalPagar == 0) lista_Productos.style.display = "none";
            }
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;
            
            var diasElegidos = [];

            if(boletosDia > 0) diasElegidos.push('viernes');
            else{
                ocultarPorID('viernes');
            }
            if(boletos2Dias > 0) diasElegidos.push('viernes', 'sabado');
            else{
                ocultarPorID('viernes');
                ocultarPorID('sabado');
            }
            if(boletoCompleto > 0) diasElegidos.push('viernes', 'sabado', 'domingo');
            else{
                ocultarPorID('viernes');
                ocultarPorID('sabado');
                ocultarPorID('domingo');
            }

            if(diasElegidos.length == 0) document.getElementById('textoAyuda').style.display = 'block';
            else ocultarPorID('textoAyuda');

            for(var i = 0; i < diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display = "block";
            }
        }

        function ocultarPorID(id){
            document.getElementById(id).style.display = "none";
        }

    }
    }); // DOM CONTENT LOADED
})();

$(function(){

    var windowHeight = $(window).height();  // DEVUELVE LA ALTURA DE LA VENTANA DEL NAVEGADOR
    var barraHeight = $('.barra').innerHeight();

    $(window).scroll(function(){ // EVENTO SCROLL 
        var cantScroll = $(window).scrollTop(); // DEVUELVE LA CANTIDAD DE PIXELES QUE BAJE CUANDO HICE SCROLL
        if(cantScroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraHeight + 'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    //LETTERING
    $('.nombre-sitio').lettering();

    //PROGRAMA DE CONFERENCIAS
    $('.menu-programa a').on('click',function(){
        $('.info-curso').hide();
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

    //ANIMACIONES PARA NUMEROS
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 9}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 3}, 1500);

    //ANIMACION CONTADOR
    $('.cuenta-regresiva').countdown('2019/03/23 13:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //MENU MOVIL
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

});