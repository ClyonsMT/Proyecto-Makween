//-----------------------------Validaciones del forlulario de contacto-------------------------------
var correo = false
var nombreContacto = false
var rutContacto = false
var telefonoContacto = false
var mensaje = false

//Correo electrónico
$("#correoIdEmailCont").keyup(function(){
    var correoLogin = $("#correoIdEmailCont").val();
    var regexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexLogin.test(correoLogin)) {
        correo = true
        $("#emailIdCon").text("Correo electrónico válido.");
        $("#emailIdCon").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#correoIdEmailCont").removeClass("is-invalid").addClass("is-valid");
      } else {
        correo = false
        $("#emailIdCon").text("Correo electrónico erróneo.");
        $("#emailIdCon").css({
            "color":"red",
            "fontSize":"10px"   
        });
        $("#correoIdEmailCont").removeClass("is-valid").addClass("is-invalid");
    }  
    
    if(correo && nombreContacto && rutContacto && telefonoContacto && mensaje) {
        $("#btnContacto").attr("disabled", false)
    } else {
        $("#btnContacto").attr("disabled", true)
    }
});

//Nombre y apellidos
$("#nombreIdCont").keyup(function(){
    var cantidad = $("#nombreIdCont").val().length;
    if(cantidad < 10 || cantidad > 50){
        if(cantidad < 10){
            nombreContacto = false
            $("#pNombreCont").text("Debe ingresar al menos 10 caracteres.");
            $("#pNombreCont").css({
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdCont").removeClass("is-valid").addClass("is-invalid");
        }else{
            nombreContacto = false
            $("#pNombreCont").text("Debe ingresar hasta 50 caracteres.");
            $("#pNombreCont").css({  
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdCont").removeClass("is-valid").addClass("is-invalid");
        }
    }else{
        nombreContacto = true
        $("#pNombreCont").text("Nombre y apellidos agregados correctamente.");
        $("#pNombreCont").css({   
            "color":"green",
            "fontSize":"10px"});
        $("#nombreIdCont").removeClass("is-invalid").addClass("is-valid");
    }

    if(correo && nombreContacto && rutContacto && telefonoContacto && mensaje) {
        $("#btnContacto").attr("disabled", false)
    } else {
        $("#btnContacto").attr("disabled", true)
    }
});

//Validacion del rut
function formatearRut(rut) {
    rut = rut.replace(/[^\dKk]/g, '');
    rut = rut.replace(/\./g, '');
    const dv = rut.slice(-1);
    const cuerpo = rut.slice(0, -1);
    var rutFormateado = cuerpo.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    rutFormateado += '-' + dv.toUpperCase();
    return rutFormateado;
}

$("#rutId").blur(function(){
    var rut = $("#rutId").val();
    var largo = $("#rutId").val().length;
    const formatoRut = /(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])|(\d{8}[-][\dkK])/;
    rut = formatearRut(rut);
    if (formatoRut.test(rut) && largo == 9) {
        rutContacto = true
        $("#rutId").val(rut);
        $("#parrafoRut").text("Rut ingresado correctamente.");
        $("#parrafoRut").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#rutId").removeClass("is-invalid").addClass("is-valid");
    } else {
        rutContacto = false
        $("#parrafoRut").text("Rut no válido");
        $("#parrafoRut").css({
            "color":"red",
            "fontSize":"10px"   
        }); 
        $("#rutId").removeClass("is-valid").addClass("is-invalid");
    }

    if(correo && nombreContacto && rutContacto && telefonoContacto && mensaje) {
        $("#btnContacto").attr("disabled", false)
    } else {
        $("#btnContacto").attr("disabled", true)
    }
});

//Numero de telefono
$("#numeroIdCont").keyup(function(){
    var largo = $("#numeroIdCont").val().length;
    if (largo == 9) {
        telefonoContacto = true
        $("#numeroIdCont").removeClass("is-invalid").addClass("is-valid");
    } else {
        telefonoContacto = false
        $("#numeroIdCont").removeClass("is-valid").addClass("is-invalid");
    }

    if(correo && nombreContacto && rutContacto && telefonoContacto && mensaje) {
        $("#btnContacto").attr("disabled", false)
    } else {
        $("#btnContacto").attr("disabled", true)
    }
});

//Mensaje
$("#mensajeCont").keyup(function(){
    var largo = $("#mensajeCont").val().length;
    if (largo >= 30) {
        mensaje = true
        $("#mensajeCont").removeClass("is-invalid").addClass("is-valid");
    } else {
        mensaje = false
        $("#mensajeCont").removeClass("is-valid").addClass("is-invalid");
    }

    if(correo && nombreContacto && rutContacto && telefonoContacto && mensaje) {
        $("#btnContacto").attr("disabled", false)
    } else {
        $("#btnContacto").attr("disabled", true)
    }
});

//--------------------------Validaciones formulario de atención-----------------------------------
//variables para boton
var nombre = false
var v_rut = false
var telefono = false
var descripcion = false

//Nombre y apellidos
$("#nombreIdAte").keyup(function(){
    var cantidad = $("#nombreIdAte").val().length;
    if(cantidad < 10 || cantidad > 50){
        if(cantidad < 10){
            nombre = false
            $("#pNombreAte").text("Debe ingresar al menos 10 caracteres.");
            $("#pNombreAte").css({
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdAte").removeClass("is-valid").addClass("is-invalid");
        }else{
            nombre = false
            $("#pNombreAte").text("Debe ingresar hasta 50 caracteres.");
            $("#pNombreAte").css({  
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdAte").removeClass("is-valid").addClass("is-invalid");
        }
    }else{
        nombre = true
        $("#pNombreAte").text("Nombre y apellidos agregados correctamente.");
        $("#pNombreAte").css({   
            "color":"green",
            "fontSize":"10px"});
        $("#nombreIdAte").removeClass("is-invalid").addClass("is-valid");
    }

    if(nombre && v_rut && telefono && descripcion) {
        $("#btnAtencion").attr("disabled", false)
    } else {
        $("#btnAtencion").attr("disabled", true)
    }
});

//Rut
$("#rutIdAte").blur(function(){
    var rut = $("#rutIdAte").val();
    var largo = $("#rutIdAte").val().length;
    const formatoRut = /(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])|(\d{8}[-][\dkK])/;
    rut = formatearRut(rut);
    if (formatoRut.test(rut) && largo == 9) {
        v_rut = true
        $("#rutIdAte").val(rut);
        $("#parrafoRutAte").text("Rut ingresado correctamente.");
        $("#parrafoRutAte").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#rutIdAte").removeClass("is-invalid").addClass("is-valid");
    } else {
        v_rut = false
        $("#parrafoRutAte").text("Rut no válido");
        $("#parrafoRutAte").css({
            "color":"red",
            "fontSize":"10px"   
        }); 
        $("#rutIdAte").removeClass("is-valid").addClass("is-invalid");
    }

    if(nombre && v_rut && telefono && descripcion) {
        $("#btnAtencion").attr("disabled", false)
    } else {
        $("#btnAtencion").attr("disabled", true)
    }
});

//Teléfono
$("#numeroIdAte").keyup(function(){
    var largo = $("#numeroIdAte").val().length;
    if (largo == 9) {
        telefono = true
        $("#numeroIdAte").removeClass("is-invalid").addClass("is-valid");
    } else {
        telefono = false
        $("#numeroIdAte").removeClass("is-valid").addClass("is-invalid");
    }

    if(nombre && v_rut && telefono && descripcion) {
        $("#btnAtencion").attr("disabled", false)
    } else {
        $("#btnAtencion").attr("disabled", true)
    }
});

//Descripción
$("#mensajeAte").keyup(function(){
    var largo = $("#mensajeAte").val().length;
    if (largo >= 30) {
        descripcion = true
        $("#mensajeAte").removeClass("is-invalid").addClass("is-valid");
    } else {
        descripcion = false
        $("#mensajeAte").removeClass("is-valid").addClass("is-invalid");
    }

    if(nombre && v_rut && telefono && descripcion) {
        $("#btnAtencion").attr("disabled", false)
    } else {
        $("#btnAtencion").attr("disabled", true)
    }
});


let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 300,
    "nav" : false,
    navPosition : "bottom",
    autoplay: true,
    autoplayButtonOutput : false,
    controlsPosition: 'bottom',
    controlsContainer: '#custom-control',
    responsive: {
        1600: {
            items : 4,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter : 20
        },
        480: {
            items : 1, 
        }
    }
});