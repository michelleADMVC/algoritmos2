
function ex1(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i]<0) {
            array[i]= "big";
        }
        
    }
    return array;
}

function ex2(array){
    var min = array[0];
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max<array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log("El minimo es ",min)
    return max;
}

function ex3(array){
    var pen = array[array.length-2];
    var firstImpar = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0 && firstImpar == null) {
            firstImpar = array[i];
            break;
        }
    }
    console.log("El penultimo valor es : ",pen);
    return firstImpar;
}

// Doble Visión - Dado un array(similar a decir ‘tomado un array’), crea una función que devuelva un nuevo array donde cada valor se duplique.Entonces, doble([1, 2, 3]) debiera devolver[2, 4, 6] sin cambiar el array original. 
function ex4(array){
    var array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2[i]= array[i]*2;
        
    }
    return array2;
}

function ex5(array){
    var cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            cont++;
        }
        
    }
    return cont;
}

function ex6(array) {
    var pairCount = 0, oddCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            pairCount = 0;
            oddCount++;
            if (oddCount == 3) {
                console.log("¡Qué imparcial!")
            }
        } else {
            oddCount = 0;
            pairCount++;
            if (pairCount == 3) {
                console.log("¡Es para bien!")
            }
        }
    }
}
function ex7(array) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 1)
            array[i] = array[i] + 1;
        console.log(array[i]);
    }
    return array;
}
function ex8(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].length;
    }
    return array;
}

function ex9(array1) {
    var array2 = [...array1];
    for (let i = 0; i < array2.length; i++) {
        array2[i] = array2[i] + 7;
    }
    return array2;
}
function ex10(array) {
    mitad = 0;
    if (array.length % 2 == 0)
        mitad = array.length / 2;
    else
        mitad = (array.length - 1) / 2;
    for (let i = 0; i < mitad; i++) {
        temp = array[i];
        array[i] = array[array.length - (1 + i)];
        array[array.length - (1 + i)] = temp;
    }
    return array;
}


function ex11(array1) {
    var array2 = [...array1];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > 0)
            array2[i] = array2[i] * (-1);
    }
    return array2;
}

function ex12(array) {
    var hambre = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'comida') {
            console.log('Yummy');
            hambre = false;
        }
    }
    if (hambre == true)
        console.log('Tengo hambre!');
}
function ex13(array) {
     mitad = 0;
    if (array.length % 2 == 0)
        mitad = array.length / 2;
    else
        mitad = (array.length - 1) / 2;
    for (let i = 0; i < mitad; i += 2) {
        temp = array[i];
        array[i] = array[array.length - (1 + i)];
        array[array.length - (1 + i)] = temp;
    }
    return array;
}
function ex14(array, y) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * (y);
    }
    return array;
}





// Pares e Impares - Crea una función que acepte un array.Cada vez que ese array tenga 3 valores impares seguidos, imprime(print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime(print) “¡Es para bien!”.