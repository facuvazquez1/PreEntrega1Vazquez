// Función para calcular la cotización del seguro de autos
function calcularSeguro(edad, cantidadAsegurada) {
    let precioBase = 1000; 
    let recargoEdad = 0;

    // Condicional para ajustar el precio según la edad
    if (edad < 25) {
        recargoEdad = precioBase * 0.20; 
    } else if (edad >= 25 && edad <= 50) {
        recargoEdad = precioBase * 0.10; 
    } else {
        recargoEdad = precioBase * 0.05; 
    }

    // Cálculo final del precio
    let precioFinal = precioBase + recargoEdad + (cantidadAsegurada * 0.01); 

    return precioFinal;
}

// Función principal del cotizador
function cotizarSeguro() {
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingresa tu nombre:");
        let apellido = prompt("Ingresa tu apellido:");
        let edad = parseInt(prompt("Ingresa tu edad:"));
        let cantidadAsegurada = parseFloat(prompt("Ingresa la cantidad asegurada:"));

        let precio = calcularSeguro(edad, cantidadAsegurada);

        alert(`Hola ${nombre} ${apellido}, el precio de tu seguro es: $${precio.toFixed(2)}`);

        continuar = confirm("¿Quieres realizar otra cotización?");
    }
}

// Llamada a la función para iniciar el proceso
cotizarSeguro();
