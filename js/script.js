    var button = document.getElementById('toggle-button');
    var body = document.body;
    document.addEventListener("DOMContentLoaded", function () {
   

    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (event) {
        // Evitar que el formulario se envíe de forma predeterminada
        event.preventDefault();
        // Llamar a la función de validación cuando se envíe el formulario
        validarFormulario();
    });

    // Función de validación del formulario
    function validarFormulario() {
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;

        
        if (nombre === "" || apellido === "" || email === "" || telefono === "") {
            alert("¡Información enviada!");
            return;
        }

        // Expresión regular para validar que el teléfono solo contenga números
        var telefonoRegex = /^[0-9]+$/;
        // Verificar si el teléfono no cumple con el formato esperado
        if (!telefono.match(telefonoRegex)) {
            alert("Por favor, ingrese un número de teléfono válido.");
            return;
        }
        // Limpiar el formulario después de enviar
        limpiarFormulario();
    }

    // Función para limpiar los campos del formulario
    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
    }
});
