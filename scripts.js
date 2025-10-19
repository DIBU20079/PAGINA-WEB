document.addEventListener('DOMContentLoaded', function () {

    // --- FORMULARIO CONTACTO ---
    const contactoForm = document.querySelector('main section form'); // Ajusta si tienes más de un form en la página

    if (contactoForm && document.getElementById('nombre')) { // Verifica que sea el formulario de contacto
        contactoForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                asunto: document.getElementById('Asunto').value,
                mensaje: document.getElementById('mensaje').value
            };

            // Generar ID único
            const formId = `contacto_${new Date().getTime()}`;
            localStorage.setItem(formId, JSON.stringify(formData));

            alert('Formulario de contacto guardado correctamente.');
            contactoForm.reset();
        });
    }

    // --- FORMULARIO SERVICIOS ---
    const serviciosForm = document.querySelector('main section form'); // Ajusta si hay más forms
    if (serviciosForm && document.getElementById('email') && !document.getElementById('nombre')) { // Diferencia por campos
        serviciosForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                email: document.getElementById('email').value,
                mensaje: document.getElementById('mensaje').value,
                terminos: document.getElementById('terminos').checked
            };

            const formId = `servicios_${new Date().getTime()}`;
            localStorage.setItem(formId, JSON.stringify(formData));

            alert('Formulario de servicios guardado correctamente.');
            serviciosForm.reset();
        });
    }

    // --- OPCIONAL: Función para mostrar todos los formularios guardados ---
    function mostrarFormularios() {
        const container = document.getElementById('storedFormsContainer'); // Crear un div con este ID en tu HTML si quieres mostrar
        if (!container) return;

        container.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const data = JSON.parse(localStorage.getItem(key));

            const li = document.createElement('li');
            li.textContent = `${key}: ${JSON.stringify(data)}`;
            container.appendChild(li);
        }
    }

    mostrarFormularios(); // Llamada para mostrar al cargar
});
