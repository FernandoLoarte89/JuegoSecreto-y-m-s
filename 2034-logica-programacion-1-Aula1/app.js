
// LOS LET SON LAS VARIABLES DE PROGRAMADOR Y DEL USUARIO

let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; // CON LA FUNCION MATH.RAMDOM VA A LANZAR UN NUMERO ALEATORIO ENTRE 1 Y 10
let numeroUsuario = 0; // SE DECLARA LA VARIABLE POR FUERA PARA QUE JS NO MANDE ERROR
let intentos = 1; 
//let palabraVeces = "vez";
let maximoInt = 3;

//console.log(numeroSecreto); // ESTO ES PARA MOSTRAR EN EL F12 EL NUMERO SECRETO

while (numeroUsuario != numeroSecreto) { // '!=' :DIFERENTE DE...
    numeroUsuario = parseInt(prompt(`Indicame un número entre el 1 al ${numeroMaximo}: `)); // PARSEINT CONVIERTE LA VARIABLE EN NRO ENTERO

    //NOTA: SIEMPRE SE EJECUTARA LA FUNCION QUE ESTE MAS ADENTRO DE LA FUNCION COMPLEJA
    //TENER EN CUANTA EL TIPO DE DATO (STRING=TEXTO; NUMBER=NUMERO ENTERO)

    console.log(numeroUsuario); // ESTE CODIGO REALIZA LA COMPARACION

    if (numeroUsuario == numeroSecreto) {
        // SI ACIERTA A LA PRIMERA O ADIVINA EL NRO                                   "SI INTENTOS ES IGUAL A 1, SI ES TRUE DAR... SINO DEVOLVER ESTO..."             
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`); // ESTO PASA SI SE CUMPLE LA CONDICION, CON ALT+96 PUEDES PONER LAS COMILLAS INVERTIDAS
    } else {
        if (numeroUsuario > numeroSecreto) {    // CONDICION DENTRO DE OTRA CONDICION SE LE LLAMAN "ANIDADOS"
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // intentos = intentos + 1; // SE COLOCA EL N° DE INTENTOS DENTRO DE LA CONDICION FALSA, CON ESTO SE INCREMENTA EL CONTADOR
        //intentos+= 1;
        intentos++; // FORMA MAS CORRIENTE PARA TRABAJAR CON INCREMENTADORES

        //palabraVeces = "veces";
        if (intentos > 3) {
            alert(`Llegaste al número máximo de ${maximoInt} intentos`);
            break;    // FUNCIONA PARA ROMPER EL BUCLE, LLEGANDO A UNA CONDICIONAL
        }
        //alert("Intentalo nuevamente"); // Y ESTO CUANDO NO SE CUMPLE LA CONDICION
    }
} // WHILE = MIENTRAS QUE... NO SALE HASTA QUE NO SE HACIERTE, ESTO ES UN BUCLE O LOOP


/*
let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') { // CONDICIONAL === IGUALDAD ESTRICTA (VERIFICA SI SON NUMEROS O LETRAS).
    OR( || ) LOS DOS PALOS SIGNIFICA 'O'
    
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}*/


/*let numeroIngresado = prompt("Ingresar un número positivo o negativo:");
console.log(numeroIngresado);

if (numeroIngresado < 0) {
    alert("el número es negativo");
} else if (numeroIngresado > 0) { // CONDICIONAL QUE SE PUEDE USAR COMO " Y SINO"
    alert("Numero ingresado es positivo");
} else {
    alert("el número ingresado es 0");
}*/


/*let puntuacion = 90;
if (puntuacion >= 100) {
    alert('¡Enhorabuena, has ganado!');
} else {
    alert('Inténtalo de nuevo para ganar.');
}*/


/*let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);*/


/*let info = prompt("Ingrese su nombre: ");
console.log(info);
alert(`Bienvenido ${info}`);*/

/*let contador = 1;

while (contador <= 10) {
    console.log(contador);
    alert (`Número: ${contador}`);
    contador = contador + 1;
}*/

/*let contador = 10;

while (contador >= 0) {
    console.log(contador);
    alert(`Número: ${contador}`);
    contador = contador - 1;
}*/

/*let numeroPartida = 0;
let numeroUsuario = prompt("El número a alcanzar es: ");

while(numeroPartida != numeroUsuario) {
    console.log(numeroUsuario);
    alert(`${numeroPartida}`);
    numeroPartida = numeroPartida + 1;
    
}
alert(`${numeroUsuario}`);*/

/*let regresiva = prompt("Colocar en cuantos segundos explotará la bomba: ")
while(regresiva >= 0) {
    alert(`${regresiva}`);
    regresiva = regresiva - 1;
    console.log(regresiva);
}*/

/*
//console.log("BIENVENIDOS!!");
let nombre = "Fernando";
//console.log(`¡Hola, ${nombre}!`);
alert(`¡Hola, ${nombre}!`);
*/

/*let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log (`${respuesta}`);*/

/*let valor1 = 3;
let valor2 = 6;
let resultado = valor1 - valor2;
console.log (`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);*/

/*let edad = prompt("Ingrese su edad: ");
console.log(edad);

if(edad >= 18) {
    alert("Usted es mayor de edad.");
} else {
    alert("Usted es menor de edad.");
}*/

/*let numero = prompt("Ingrese un número: ");
console.log(numero);
if(numero < 0) {
    alert("NEGATIVO");
} else if(numero > 0) {
    alert("POSITIVO");
} else {
    alert("CERO");
}*/

/*let numero = 0;
while (numero < 10) {
    numero = numero + 1;
    console.log(numero);
}*/

/*let nota = 18;
console.log(nota);
if (nota >= 13) {
    alert("APROBADO");
} else {
    alert("DESAPROBADO");
}*/

/*let numero = Math.floor(Math.random()*1000) + 1;
console.log(numero);*/
