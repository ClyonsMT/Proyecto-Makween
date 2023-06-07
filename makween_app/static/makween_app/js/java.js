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
/*
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var email = "example@example.com";
if (emailRegex.test(email)) {
  console.log("El correo electrónico es válido.");
} else {
  console.log("El correo electrónico no es válido.");
}
*/