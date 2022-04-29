function clickbotton(){
    swal({
    title: "Datos registrados",
    text: "Gracias por preferirnos!",
    icon: "success",
  });
}

/*function validarcorreo (correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido=expReg.test(correo);
    if(esValido = true){
        swal({
            title:"Funciona",
            icon: "success",
          });    }
    else{
        swal({
            title:"No funciona",
            icon: "error",
          });
        return false;
    }
}*/

function validarform(){
        

    if (document.comentarioform.nombre.value == ""){
        swal({
            title:"Falta campo de nombre",
            icon: "error",
          });
        return false;
    }
    
    if (document.comentarioform.apellido.value == ""){
        swal({
            title:"Falta campo de apellido",
            icon: src="error",
          });        
          return false;
    }
    
    if (document.comentarioform.correo.value == ""){
        swal({
            title:"Falta campo de correo",
            icon: "error",
          });       
        return false;
    }

    if (document.comentarioform.telefono.value == ""){
        swal({
            title:"Falta campo de telefono",
            icon: "error",
          });
        return false;
    }

    if (document.comentarioform.restaurante.value == ""){
        swal({
            title:"Falta campo de restaurante",
            icon: "error",
          });
        return false;
    }

    if (document.comentarioform.asunto.value == ""){
        swal({
            title:"Falta campo de asunto",
            icon: "error",
          });
        return false;
    }

    if (document.comentarioform.mensaje.value == ""){
        swal({
            title:"Falta campo de mensaje",
            icon: "error",
          });
        return false;
    }


    document.getElementById("comentario").addEventListener("submit" , mandado());
        
    function mandado(){
        
    }


}



function validarform2(){
        

    if (document.reservaform.nombre.value == ""){
        swal({
            title:"Falta campo de nombre",
            icon: "error",
          });
        return false;
    }
    
    if (document.reservaform.apellido.value == ""){
        swal({
            title:"Falta campo de apellido",
            icon: src="error",
          });        
          return false;
    }

    if (document.reservaform.correo.value == ""){
        swal({
            title:"Falta campo de correo",
            icon: "error",
          });       
        return false;
    }

    if (document.reservaform.telefono.value == ""){
        swal({
            title:"Falta campo de telefono",
            icon: "error",
          });
        return false;
    }

    if (document.reservaform.tiempo.value == ""){
        swal({
            title:"Falta campo de hora",
            icon: "error",
          });
        return false;
    }

    if (document.reservaform.restaurante.value == ""){
        swal({
            title:"Falta campo de restaurante",
            icon: "error",
          });
        return false;
    }

    

    document.getElementById("reserva").addEventListener("submit" , mandado());
        
    function mandado(){
        
    }


}