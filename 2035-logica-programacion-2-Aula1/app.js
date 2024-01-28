/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //ESTA ES LA LISTA
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {    
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 

    if (numeroDeUsuario === numeroSecreto) { // ACA SE IMPLEMENTA LA AYUDA AL USUARIO, CON MENSAJES EN PANTALLA
        asignarTextoElemento("P",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { // ESTAS LINEAS DE TEXTO SE ACTIVAN CUANDO EL USUARIO NO ACIERTA
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("P","El número secreto es menor");
        } else {
            asignarTextoElemento("P","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.getElementById('valorUsuario').value = ''; //ESTA FUNCION LIMPIA LA CAJA DONDE USUARIO DIGITA VALORES
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1); // ACA VAMOS A PERMITIR QUE EL NUMERO GENERADO NO SE REPITA
    // SI EL NRO GENERADO ESTA INCLUIDO EN LA LISTA HACER ESTO.. SINO... OTRA

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //SI YA SORTEAMOS TOSOS LOS NUMEROS??
    if(listaNumerosSorteados.length == numeroMaximo) {  // ESTA ES EL REVALIDADOR PARA NO CAER EN RECURSIBIDAD (SE REPITA INDEFINIDAMENTE)
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {     // EL INCLUDE BARRE EL ARREGLO Y VERIFICA SI EXISTE, DEVUELVE UN BOLEANO(TRUE O FALSE)
        return generarNumeroSecreto();
         } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("P",`Escoje un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // LIMPIAR LA CAJA
    limpiarCaja();
    // INDICAR MENSAJE DE INTERVALO DE NUMEROS
    // GENERAR EL NUMERO ALEATORIO
    // INICIALIZAR EL NUMERO DE INTENTOS
    condicionesIniciales();
    // DESHABILITAR EL BOTON DE 'NUEVO JUEGO' CUANDO SE EMPIEZA A JUGAR
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
console.log(numeroSecreto);
*/

/*function indiceDeMasa (altura, peso) {
    let imc = (peso / (altura * altura));
    return imc;
}
let altura = 1.70;
let peso = 72;
resultado = indiceDeMasa(altura, peso);
console.log(resultado);
*/

/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 3;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
*/

/*
let tipoDeCambio = 3.77;

function montoEnSoles (monto) {
    return monto * tipoDeCambio;
}
let monto = 30;
let cambio = montoEnSoles(monto);
console.log(`${monto} dólares en soles es S/. ${cambio}`);
*/

/*function area (largo, ancho) {
    return largo * ancho;
}
function perimetro (largo, ancho) {
    return (largo * 2)+(ancho * 2);
}
let largo = 4;
let ancho = 2;
let resultadoArea = area(largo,ancho);
let resultadoPerimetro = perimetro(largo,ancho);
console.log (`El perímetro del terreno es de ${resultadoPerimetro} metros y tiene un área de ${resultadoArea} metros cuadrados`);
*/

/*function calcularAreaYPerimetroRectangular (largo,ancho) {
    var perimetro = (largo + ancho) * 2;
    var area = largo * ancho;
    console.log ("Área es : " + area);
    console.log ("Perímetro es : " + perimetro);
}
let largo = 4;
let ancho = 2;
calcularAreaYPerimetroRectangular(largo, ancho);
*/

/*let pi = 3.14;
function areaDeSala (radio) {
    var area = pi * (radio * radio);
    var perimetro = 2 * pi * radio;
    console.log("El área es: " + area);
    console.log("El perímetro es: " + perimetro); 
}
let radio = 8;
areaDeSala(radio);
*/

/*
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) { // I++ INCREMENTA EL VALOR EN 1 
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 2;
  mostrarTablaDeMultiplicar(numero);*/

/*let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//console.log(lenguagesDeProgramacion);

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) { // I ES IGUAL A 0; I SERA MENOR A CANTIDAD DE ELEMENTOS QUE ES 8; IR INCREMENTANDO EN 1
      console.log(lenguagesDeProgramacion[i]);
    }
  }
mostrarLenguagesSeparadamente();

function mostrarLenguagesInversa () {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
      } 
}
mostrarLenguagesInversa();
*/

/*let listaDeNumeros = [2, 8, 10, 6];
console.log(listaDeNumeros);

function promedioDeLista () {
    let sumaDeElementos = (listaDeNumeros[0] + listaDeNumeros[1] + listaDeNumeros[2] + listaDeNumeros[3]);
    let promedio = sumaDeElementos / listaDeNumeros.length;
    console.log("promedio: ", promedio);
}
promedioDeLista();
*/

/*
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [2, 8, 10, 6];
  let media = calcularMedia(numeros);
  console.log('Média:', media);
*/

/*let numeros = [15, 8, 25, 5, 12];

function encontrarMayorMenor (lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let n = 1; n < lista.length; n++) {
        if (lista[n] > mayor) {
            mayor = lista[n];
        }
        if (lista[n] < menor) {
            menor = lista[n];
        }
    }
    console.log("Mayor: ", mayor);
    console.log("Menor: ", menor);
}
encontrarMayorMenor(numeros);
*/

/*
let numeros = [15, 8, 25, 5, 12];

function calcularSuma (lista) {
    let suma = 0;
    for (let n = 0; n < numeros.length; n++) {
        suma += lista[n];
    }
    return suma;
}
let suma = calcularSuma(numeros);
console.log("suma: ", suma);
*/

/*
let numeros = [15, 8, 25, 5, 12];

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
let indice = encontrarIndiceElemento(numeros,25);
console.log(indice);
*/

/*
function sumarElementos (numeros1, numeros2) {
    let n = Math.min(numeros1.length, numeros2.length);
    let resultado = [];
    
    for (let i = 0; i < n; i++) {
        resultado.push(numeros1[i] + numeros2[i]);
    }    
    return resultado;
}
let numeros1 = [1,2,3,4,5];
let numeros2 = [10,20,30,40,50];

let resultado = sumarElementos(numeros1, numeros2);
console.log(resultado);
*/

function cuandradoDeElementos (numeros1) {
    let resultado = [];
    
    for (let i = 0; i < numeros1.length; i++) {
        resultado.push(numeros1[i] * numeros1[i]);
    }    
    return resultado;
}
let numeros1 = [1,2,3,4,5];

let resultado = cuandradoDeElementos(numeros1);
console.log(resultado);