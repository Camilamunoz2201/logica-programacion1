let numeroSecreto = 7; 
let numeroUsuario = prompt('Me indicas un numero por favor');
console.log(numeroUsuario)

if (numeroUsuario == numeroSecreto) {
    alert('Felicidades, has acertado el numero secreto');
} else if (numeroUsuario < numeroSecreto) {
    alert('El numero secreto es mayor que 4');
}