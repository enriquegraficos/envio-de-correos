
document.addEventListener('DOMContentLoaded', function(){
  
    // Creamos un objeto
    const email = {
        email:'',
        asunto: '',
        mensaje: '',
    }

    console.log(email);

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');


    
    // Asignar eventos
    // cuandoe el evento blur ocurra se ejecuta la funcción se le conoce como callback

    // inputAsunto.addEventListener('blur', function(e){
    //     console.log(e.target.value);
    // });

    // en lugar de blur usamos input para que suceda en tiempo real
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();
       
       console.log(formulario.reset())
    })

    function validar (e){
        // parentElemento es para acceder al padre del elemento
        console.log(e.target.parentElement)
        // si es igual a un string vacio
        // trim es para eliminar espacios en blanco

        email[e.target.id] =  '' ;
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] =  '' ;
            comprobarEmail();
            return; // detiene la ejecución del código
         }

         if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El correo no es válido', e.target.parentElement);
            comprobarEmail();
            return;
         }
         limpiarAlerta(e.target.parentElement);

       // Asignar los valores
       // si el código se asigna hasta acá signfica que pasamos las validaciones

       //llenamos el objeto
        email[e.target.id] = e.target.value.trim().toLowerCase();
        
        // Comprobar el objeto de email
         comprobarEmail();

        }
    
        function mostrarAlerta (mensaje, referencia){
            // Comprueba si ya existe una alerta
            // en lugar de document se coloca referencia
            // colocando referencia solo aparecerá una vez y se va remover su clase
            const alerta = referencia.querySelector('.error');
            
            if(alerta){
                alerta.remove();
            }

            const simbol =referencia.querySelector('.simbol');
            if(simbol){
                simbol.remove();
            }

            // Generar alerta en HTML
            const error = document.createElement('P');
            const simbolo = document.createElement('I');
            // text Content es mejor que innerHTML
            error.textContent = mensaje;
            // agregando clases
            error.classList.add('error', 'error-text');
            simbolo.classList.add( 'fa-sharp', 'fa-solid', 'fa-circle-exclamation', 'simbol');

           
            
            // inyectar el error al formulario
            // appendchild es para agregar hijos al contenedor
            referencia.appendChild(simbolo)
            referencia.appendChild(error)
        }

        // limpiando la alerta
        // va ir limpiando la que dispara el evento
        function limpiarAlerta(referencia){
            const alerta = referencia.querySelector('.error');
            if(alerta){
                alerta.remove();
            }

            const simbol = referencia.querySelector('.simbol');
            if(simbol){
                simbol.remove();
            }

        }

        function validarEmail(email){
            const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            const resultado = regex.test(email);
            return(resultado);
        }

        function comprobarEmail(){

            console.log(comprobarEmail);
            if(Object.values(email).includes('')){
                btnSubmit.classList.add('opacity');
                btnSubmit.disabled = true;
                return
            }
                btnSubmit.classList.remove('opacity');
                btnSubmit.disabled = false;

        }

    });
