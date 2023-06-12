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

//validacion del rut
//HACER YA QUE GIT ME LO BORRO :(