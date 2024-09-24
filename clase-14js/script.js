// VAR LET CONST

//VAR 
//ES5 (version vieja de javascript) para abajo - NO SE USA
//no hay diferencia entre reasignar y redeclarar
//Var tiene hoisting, solo puede si es que la variable fue creada en algun lugar del programa
//hoisting es poder llamar a algun valor antes de su declaracion
//VAR por defectio tiene el valor undefined



//LET 
//ES6(javascript moderno)
//no tiene Hoisting automatico
//por defecto inicia en indefinido
//no puede redeclararse en un mismo bloque

//hoisting manual, declaro 2 variables que empiezan por defecto en undefined. por ej: let nombre, apellido


/* let nombre 
console.log(nombre)
nombre = 'pepe'  NO SE PUEDEN REDECLARAR PERO SI SE PUEDE REASIGNAR
nombre = 'juan'
console.log(nombre) */


//BLOQUES
//este seria el bloque principal
//son acciones encerradas, que funcionan si el valor asignado es truthy

//si el valor es truthy la accion se ejecuta
//if (valor) {accion}
if(true){

    //variable local, porque esta encerrada dentro de un scope
    let nombre = 'juan'
    //esto seria un sub-bloque, tambien se pueden declarar variables, crear sub-sub-bloques
    console.log(nombre)
}


//CONST ES6(javascript moderno)
//No tiene hoisting
//No se puede redeclarar en el mismo bloque
//No se puede reasignar
//No se puede dar una inicializacion por defecto, debe inicializarse 

const username = 'pepe'

//SOLAMENTE USAMOS LET (por ahora)