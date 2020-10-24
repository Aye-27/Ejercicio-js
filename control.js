document.addEventListener("DOMContentLoaded", function(){
    let formu=document.getElementById("formulario");
    document.getElementById("formulario").addEventListener('submit', validarForm);
    
});

let cont = 0;

function validarForm(evento){
    evento.preventDefault();

    var usuario = document.getElementById('usuario').value;
  
    if(usuario.length == 0){
        alert('El campo usuario no puede ir vacío. Por favor, ingrese su email');
        return;
    } else{
               
        for(let user of usuario){
            
            if(user == "@") {
                cont++;
                break;
            }
        }
        
        if (cont==0){
            alert("El campo Usuario debe contenter un @  ej: nombre@mail.com")
            return;
        }    
    }

var password = document.getElementById('password').value;
console.log("pass ingresado: " + password);

if (password.length<6){
    alert("La contraseña debe contenter al menos 6 caracteres");
    return;
    }
    this.submit(alert("Gracias, podés ingresar"));
}
