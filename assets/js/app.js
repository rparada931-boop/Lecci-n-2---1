// Función para el scroll suave hacia arriba
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esto hace que el movimiento sea fluido y no un salto brusco
    });
}

// Opcional: Crear el botón dinámicamente si no lo tienes en el HTML
const btnSubir = document.createElement('button');
btnSubir.innerText = '↑ IR ARRIBA';
btnSubir.className = 'btn btn-warning position-fixed bottom-0 end-0 m-4';
btnSubir.style.zIndex = '1000';
btnSubir.onclick = irArriba;
document.body.appendChild(btnSubir);