# Cotizador de Seguros de Autos

Este proyecto consiste en un cotizador de seguros de autos desarrollado utilizando JavaScript puro, sin hacer uso de HTML o CSS. El objetivo principal del cotizador es permitir que los usuarios ingresen sus datos personales y obtengan una estimación del precio para su seguro de auto, en función de su edad y la cantidad asegurada.

## Características del Proyecto

### 1. Ingreso de Datos del Usuario

El cotizador solicita al usuario que ingrese los siguientes datos:
- **Nombre**: Primer nombre del usuario.
- **Apellido**: Apellido del usuario.
- **Edad**: Edad del usuario.
- **Cantidad Asegurada**: Monto que el usuario desea asegurar para su auto.

Estos datos se obtienen mediante ventanas emergentes (`prompt`) que solicitan al usuario la información requerida.

### 2. Cálculo del Precio del Seguro

El precio del seguro se calcula utilizando un algoritmo que aplica una fórmula ficticia basada en dos factores principales:

- **Edad del Usuario**: Se aplican diferentes recargos al precio base dependiendo del rango de edad del usuario. Los recargos son mayores para los usuarios más jóvenes y disminuyen para los usuarios de mayor edad.
- **Cantidad Asegurada**: Se añade un porcentaje adicional al precio base, calculado sobre el valor total que el usuario desea asegurar.

El resultado es un precio final que se muestra al usuario.

### 3. Ciclo para Múltiples Cotizaciones

Para mejorar la experiencia del usuario, el cotizador incluye un ciclo que permite realizar varias cotizaciones consecutivas sin necesidad de recargar la página o reiniciar el programa. Después de cada cotización, se pregunta al usuario si desea realizar otra. Si el usuario acepta, el ciclo se repite; de lo contrario, el programa finaliza.

### 4. Interacción con el Usuario

Toda la interacción con el usuario se realiza mediante ventanas emergentes:
- **`prompt`**: Para la recolección de datos como el nombre, apellido, edad y cantidad asegurada.
- **`alert`**: Para mostrar el resultado de la cotización, es decir, el precio final del seguro.
- **`confirm`**: Para preguntar si el usuario desea realizar una nueva cotización.

## Flujo del Programa

1. **Inicio**: El programa comienza solicitando al usuario que ingrese sus datos personales.
2. **Cálculo**: Una vez que el usuario ingresa todos los datos, se calcula el precio del seguro utilizando la fórmula ficticia.
3. **Resultado**: El precio final del seguro se muestra al usuario mediante una ventana emergente.
4. **Repetición (opcional)**: Si el usuario lo desea, puede realizar una nueva cotización. El ciclo se repite hasta que el usuario decida finalizar.

## Ejecución del Proyecto

El programa está diseñado para ejecutarse en un entorno que soporte JavaScript, como la consola de un navegador web. No requiere HTML ni CSS, y toda la interacción ocurre dentro del entorno de JavaScript puro.

## Personalización

El cotizador puede ser fácilmente personalizado:
- **Precio Base y Recargos**: Puedes ajustar el precio base del seguro y los recargos asociados a cada rango de edad.
- **Cálculo del Precio Final**: La fórmula utilizada para calcular el precio del seguro puede modificarse para adaptarse a diferentes reglas o requisitos de negocio.

Este proyecto es una herramienta básica que puede servir como punto de partida para desarrollos más complejos en la cotización de seguros u otros productos similares.
