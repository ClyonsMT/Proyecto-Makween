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
    var correo = $(this).val();;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo)) {
        $("#parrafoId").text("Correo electrónico ingresado correctamente.");
        $("#parrafoId").css({
            "color":"green",
            "fontSize":"10px"
        });
      } else {
        $("#parrafoId").text("Correo electrónico erróneo.");
        $("#parrafoId").css({
            "color":"red",
            "fontSize":"10px"
        });
      }    
});
