let share_button = document.querySelector('.button-share-inactive'); // Contenedor del botón
let toggle_button = document.querySelector('.toggle-button'); // Contenedor con los iconos
let share_icon = share_button.querySelector('.svg-share'); // Ícono de compartir
let back = document.querySelector('.back');

share_button.addEventListener('click', function () {
    if (toggle_button.classList.contains('active')) { 
        // Si está activo, lo desactiva
        toggle_button.classList.add('exit'); 
        share_icon.classList.remove('prueba');
        back.classList.remove('prueba2');

        setTimeout(() => { 
            toggle_button.classList.remove('active'); 
            toggle_button.classList.remove('exit');   
        }, 300); 

        // Restaurar los estilos originales cuando se desactiva
        share_button.style.backgroundColor = '#ECF2F8'; // Fondo original
        share_icon.style.filter = 'invert(0)'; // Restaurar icono original
    } else { 
        // Si no está activo, lo activa
        toggle_button.classList.add('active'); 
        share_button.querySelector('.svg-share').style.zIndex = '10';//Z-Index a 10
        share_icon.classList.add('prueba');
        back.classList.add('prueba2');

        // Cambiar estilos al activarse
        share_button.style.backgroundColor = '#6E8098'; // Fondo oscuro
        share_button.style.zIndex = '10';
        share_icon.style.filter = 'brightness(1000%)'; // Hace el icono blanco
    }

});
