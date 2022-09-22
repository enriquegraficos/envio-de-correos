// variables
const btnEnviar = document.querySelector('enviar');

//variables para campos
const email = document.querySelector('#para');
const asunto = document.querySelector('container-asunto');
const mensaje = document.querySelector('container-mensaje');
// funciones

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);

}


//
function iniciarApp(){
    btnEnviar.disabled = true;
    
}   

// valida el formulario
function validarFormulario(e){
    console.log(e.target.value);
}