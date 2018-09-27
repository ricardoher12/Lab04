
const four = 4;
const amiguis = ["Marioco", "Luisin", "Abuelin", "Marre", "Josesin", "Carpio", "Umaña"];
var x = 5;

function Sumar(a)
{
    var total = a +four;
    return total;
}

function MostrarTexto(){
    return "Hola mis hijos.";
}

function MostrarAmigos()
{
    var amigos = "Mis amigos son: ";
    for (let index = 0; index < amiguis.length; index++) {
        amigos = amigos + " " + amiguis[index] +",";
        
    }

    return amigos;
}

console.log(Sumar(5));
console.log(MostrarTexto());
console.log(MostrarAmigos());