// Obtener el form y el boton
let form = document.querySelector('.myForm');
let button = document.querySelector('.button-claim');

// Escuchar el clic en el boton
button.addEventListener('click', function (evento) { // event es un objeto que crea JS para almacenar lo que paso cuando se dio click
    
    let inputs = document.querySelectorAll('.input'); // Obtener todos los inputs del form
    let hayError = false; // Variable para saber si hay errores

    for (let i = 0; i < inputs.length; i++) {
        let campo = inputs[i]; // Input actual
        let mensajeError = campo.nextElementSibling; // Mensaje de error asociado al input
    
        if (campo.value.trim() === '') { // Si el campo esta vacio
            mensajeError.style.display = "block"; // Mostrar mensaje de error
            form.classList.add("error"); // Agregar borde rojo
            hayError = true;	
        } 
        // NUEVO: Validar si el campo es nombre o apellido y contiene caracteres invalidos
        else if ((campo.name === "first_name" || campo.name === "last_name") && !validarNombre(campo.value)) {
            mensajeError.textContent = "Names can only contain letters and spaces"; // Mensaje de error
            mensajeError.style.display = "block";
            form.classList.add("error");
            hayError = true;
        }
        // Validar si el input es un email y su formato es incorrecto
        else if (campo.type === "email" && !validarEmail(campo.value)) {
            mensajeError.textContent = "This email is not valid"; // Mostrar mensaje personalizado
            mensajeError.style.display = "block";
            form.classList.add("error");
            hayError = true;
        }
        // Validar si el input es una contrasena y no cumple los requisitos
        else if (campo.type === "password" && !validarPassword(campo.value)) {
            mensajeError.textContent = "The password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
            mensajeError.style.display = "block";
            mensajeError.style.textAlign = "center";
            form.classList.add("error");
            hayError = true;
        }
        else {
            mensajeError.style.display = "none"; // Ocultar mensaje de error si el campo tiene texto
            form.classList.remove("error"); // Quitar el borde rojo
        }
    }
    
    if (hayError) { // Si hay errores, evitar que el form se envie
        evento.preventDefault();
    }
});

// Detectar cuando el usuario escribe para quitar errores en tiempo real
let inputsform = document.querySelectorAll(".input");

for (let i = 0; i < inputsform.length; i++) {
    inputsform[i].addEventListener("input", function () {
        if (this.value.trim() !== '') {
            this.classList.remove("error"); // Quitar borde rojo
            this.nextElementSibling.style.display = "none"; // Ocultar mensaje de error
            this.style.background = "#fff"; // Restablecer el fondo del input
        } 
        else {
            this.classList.add("error"); // Agregar borde rojo nuevamente
            this.nextElementSibling.style.display = "block"; // Mostrar mensaje de error
            this.style.background = "url('images/icon-error.svg') no-repeat right 10px center"; // Volver a mostrar el icono de error
            this.style.backgroundSize = "24px"; // Ajustar tamano del icono
        }
    });
}

// Funcion para validar email con expresion regular
function validarEmail(email) {
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresion regular para emails
    return expresion.test(email); // Devuelve true si es valido, false si no lo es
}

// Funcion para validar contrasena con requisitos de seguridad
function validarPassword(password) {
    let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return expresion.test(password);
}

//  Funcion para validar que el nombre solo contenga letras y espacios
function validarNombre(nombre) {
    let expresion = /^[A-Za-z\s]+$/; // Solo permite letras (mayusculas, minusculas) y espacios
    return expresion.test(nombre);
}



