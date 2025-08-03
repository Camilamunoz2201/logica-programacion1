let numeroSecreto = 7;
let numereIntentos = 1;
let numeroUsuario = 0;

/**
 * - [] estudiar el concepto de bucle
 * - [] para que serive parceInt y cualtos mas extisten del parce
 * - [] que otros tipos de bucles existen y como se usan
 * - [] que es un bucle infinito y como evitarlo
 */

while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));
    //TODO: Validar que el número ingresado sea un número entre 1 y 10

    console.log(numeroUsuario);
    if (numeroUsuario === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número secreto es ${numeroUsuario}. Total de intentos: ${numereIntentos}`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert("El número secreto es mayor. Inténtalo de nuevo.");
        } else {
            alert("El número secreto es menor. Inténtalo de nuevo.");
        }

        numereIntentos = numereIntentos + 1;
        // numereIntentos++;
        // numereIntentos += numeroSecreto; -> numereIntentos = numereIntentos + numeroSecreto;
    }
}