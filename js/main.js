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

        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('change', mostrarDias);
        pase_dos_dias.addEventListener('change', mostrarDias);
        pase_completo.addEventListener('change', mostrarDias);

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

    }); // DOM CONTENT LOADED
})();