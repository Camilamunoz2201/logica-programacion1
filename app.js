// <<<<<<< HEAD
// let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un numero secreto entre 1 y 100
// let numeroUsuario = 0;
// let intentos = 1; // Contador de intentos
// let palabraVeces = 'vez';
// let maximoIntentos = 3;
// console.log(numeroSecreto);

// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y 100 por favor'));
//     console.log(numeroUsuario)
//      intentos = intentos + 1;
//      intentos++;
//     intentos += 1; // Incrementa el contador de intentos

//     if (numeroUsuario == numeroSecreto) {
//         alert(`Felicidades, has acertado el numero secreto es: ${numeroUsuario}. Lo intentaste ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
//     } else if (numeroUsuario > numeroSecreto) {
//         alert('El numero secreto es menor');
        
//     } else{
//         alert('El numero secreto es mayor');
//       palabraVeces = 'veces'; 
//        if (intentos > 3) {
//             alert('Has superado el numero de intentos, el numero secreto era: ' + numeroSecreto);
//             break;
//         }
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