// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar los scripts necesarios para cada página.
    // Por ejemplo, para la búsqueda de servicios:
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', (event) => {
            const searchString = event.target.value.toLowerCase();
            const services = document.querySelectorAll('.service-item');
            services.forEach(service => {
                if (service.innerText.toLowerCase().includes(searchString)) {
                    service.style.display = 'block';
                } else {
                    service.style.display = 'none';
                }
            });
        });
    }

    // Función para eliminar cuenta
    window.deleteAccount = function() {
        if (confirm("¿Estás seguro de que deseas eliminar tu cuenta?")) {
            // Lógica para eliminar la cuenta
            alert("Cuenta eliminada con éxito.");
            window.location.href = 'home.html';
        }
    };
});
