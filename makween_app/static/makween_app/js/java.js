//validaciones registro
//validacion nombre
$("#nombreId").keyup(function(){
    var cantidad = $("#nombreId").val().length;
    if(cantidad < 5 || cantidad > 50){
        if(cantidad < 5){
            $("#parrafoId").text("Debe ingresar al menos 5 caracteres.");
            $("#parrafoId").css({
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreId").removeClass("is-valid").addClass("is-invalid");
        }else{
            $("#parrafoId").text("Debe ingresar hasta 50 caracteres.");
            $("#parrafoId").css({  
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreId").removeClass("is-valid").addClass("is-invalid");
        }
    }else{
        $("#parrafoId").text("Nombre agregado correctamente.");
        $("#parrafoId").css({   
            "color":"green",
            "fontSize":"10px"});
        $("#nombreId").removeClass("is-invalid").addClass("is-valid");
    }
});

//validacion correo
$("#correoId").keyup(function(){
    var correo = $("#correoId").val();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo)) {
        $("#parrafoId1").text("Correo electrónico ingresado correctamente.");
        $("#parrafoId1").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#correoId").removeClass("is-invalid").addClass("is-valid");
      } else {
        $("#parrafoId1").text("Correo electrónico erróneo.");
        $("#parrafoId1").css({
            "color":"red",
            "fontSize":"10px"   
        });
        $("#correoId").removeClass("is-valid").addClass("is-invalid");
      }    
});

//validacion contraseña
$("#contraseñaId").keyup(function(){
    var pass = $("#contraseñaId").val();
    var hasUpperCase = /[A-Z]/.test(pass);
    var hasLowerCase = /[a-z]/.test(pass);
    var hasNumber = /\d/.test(pass);
    var hasSpecialChar = /[!@#$%^&*]/.test(pass);
    var isValid = pass.length >= 6 && pass.length <= 12 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    if (!isValid) {
        $("#parrafoId2").text("La contraseña debe tener entre 6 y 12 caracteres y debe incluir una mayúscula, una minúscula, al menos un número y un caracter especial (!@#$%^&*).");
        $("#parrafoId2").css({
            "color":"red",
            "fontSize":"10px"
        });
        $("#contraseñaId").removeClass("is-valid").addClass("is-invalid");
    } else {
        $("#parrafoId2").text("Contraseña agregada correctamente.");
        $("#parrafoId2").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#contraseñaId").removeClass("is-invalid").addClass("is-valid");
    }
});

//validacion de confirmar su contraseña
$("#confirmarContraseñaId").keyup(function(){
    var password = $("#contraseñaId").val();
    var confirmPassword = $("#confirmarContraseñaId").val();
    if (password !== confirmPassword) {
        $("#parrafoConfirmarId").text("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        $("#parrafoConfirmarId").css({
            "color": "red",
            "fontSize": "10px"
        });
        $("#confirmarContraseñaId").removeClass("is-valid").addClass("is-invalid");
    } else {
        $("#parrafoConfirmarId").text("Las contraseñas coinciden.");
        $("#parrafoConfirmarId").css({
            "color": "green",
            "fontSize": "10px"
        });
        $("#confirmarContraseñaId").removeClass("is-invalid").addClass("is-valid");
    }
});

//validaciones login
//validacion correo
$("#correoLoginId").keyup(function(){
    var correoLogin = $("#correoLoginId").val();
    var regexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexLogin.test(correoLogin)) {
        $("#parrafoLoginId").text("Correo electrónico válido.");
        $("#parrafoLoginId").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#correoLoginId").removeClass("is-invalid").addClass("is-valid");
      } else {
        $("#parrafoLoginId").text("Correo electrónico erróneo.");
        $("#parrafoLoginId").css({
            "color":"red",
            "fontSize":"10px"   
        });
        $("#correoLoginId").removeClass("is-valid").addClass("is-invalid");
      }    
});

//-----------------------------Validaciones del forlulario de contacto-------------------------------
//Correo electrónico
$("#correoIdEmailCont").keyup(function(){
    var correoLogin = $("#correoIdEmailCont").val();
    var regexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexLogin.test(correoLogin)) {
        $("#emailIdCon").text("Correo electrónico válido.");
        $("#emailIdCon").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#correoIdEmailCont").removeClass("is-invalid").addClass("is-valid");
      } else {
        $("#emailIdCon").text("Correo electrónico erróneo.");
        $("#emailIdCon").css({
            "color":"red",
            "fontSize":"10px"   
        });
        $("#correoIdEmailCont").removeClass("is-valid").addClass("is-invalid");
      }    
});

//Nombre y apellidos
$("#nombreIdCont").keyup(function(){
    var cantidad = $("#nombreIdCont").val().length;
    if(cantidad < 10 || cantidad > 50){
        if(cantidad < 10){
            $("#pNombreCont").text("Debe ingresar al menos 10 caracteres.");
            $("#pNombreCont").css({
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdCont").removeClass("is-valid").addClass("is-invalid");
        }else{
            $("#pNombreCont").text("Debe ingresar hasta 50 caracteres.");
            $("#pNombreCont").css({  
                "color":"red",
                "fontSize":"10px"
            });
            $("#nombreIdCont").removeClass("is-valid").addClass("is-invalid");
        }
    }else{
        $("#pNombreCont").text("Nombre y apellidos agregados correctamente.");
        $("#pNombreCont").css({   
            "color":"green",
            "fontSize":"10px"});
        $("#nombreIdCont").removeClass("is-invalid").addClass("is-valid");
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
        $("#rutId").val(rut);
        $("#parrafoRut").text("Rut ingresado correctamente.");
        $("#parrafoRut").css({
            "color":"green",
            "fontSize":"10px"
        });
        $("#rutId").removeClass("is-invalid").addClass("is-valid");
    } else {
        $("#parrafoRut").text("Rut no válido");
        $("#parrafoRut").css({
            "color":"red",
            "fontSize":"10px"   
        }); 
        $("#rutId").removeClass("is-valid").addClass("is-invalid");
    }
});

//Numero de telefono
$("#numeroIdCont").keyup(function(){
    var largo = $("#numeroIdCont").val().length;
    if (largo == 9) {
        $("#numeroIdCont").removeClass("is-invalid").addClass("is-valid");
    } else {
        $("#numeroIdCont").removeClass("is-valid").addClass("is-invalid");
    }
});

//Mensaje
$("#mensajeCont").keyup(function(){
    var largo = $("#mensajeCont").val().length;
    if (largo >= 30) {
        $("#mensajeCont").removeClass("is-invalid").addClass("is-valid");
    } else {
        $("#mensajeCont").removeClass("is-valid").addClass("is-invalid");
    }
});