//FUNCIONES NATIVAS, vienen incorporadas con el lenguaje

//ALERT: Popup con un mensaje, basicamente un cartelito
//alert(hola)

//PROMPT: Popup cpn un input para mandar datos
//puede devolver string (si el usuario da al boton de aceptar) o null (si el usuario da al boton de cancelar)
//cuando el usuario le de aceptar, el valor retornara
/* let resultado = prompt('hola soy un prompt')

if(!resultado){
    alert('ERROR: no escribiste nada')
} */


//ELSE siempre debe ir despues de un IF, espera un falsy. NUNCA VA CON PARENTESIS
// else es una abreviacion de NOT IF osea if(!)
//IF espera un truthy

/* if(resultado === 'pepe'){
    alert("vos sabes js, no?")
}
//if(!(resultado === 'pepe'))
else{
    alert('queres aprender js?')
} */

/* let edad = prompt('dime tu edad') */
//no puede ser 0 la edad

// A esto de abajo le llamamos else if anidado
/* if(!edad){
    alert('ERROR dato no valido')
}
else{
    if(Number(edad) <= 0){
        alert('ERROR: edad no puede ser 0 o menor')
    }
    else{
        if(Number(edad) === 88){
            alert('ERROR edad no puede ser 88')
        }
        else{
        alert('EDAD INGRESADA CORRECTAMENTE')
        alert('Tu edad es ' + edad)
        //TEMPLATE STRING, con comillas invertidas, ej
        alert(`Tu edad es ${edad} buen trabajo`)
        }
    }
} */

//Para que todo el codigo no entre a un else if hell (infierno de else if) como el codigo de arriba, se utiliza ELSE IF (guard clauses)

/* if(!edad){
    alert('ERROR dato no valido')
}
else if(Number(edad) <= 0){
    alert('ERROR: edad no puede ser 0 o menor')
}
else if(Number(edad) === 88){
    alert('ERROR edad no puede ser 88')
}
else if(isNaN(edad)){
    alert('ERROR dato debe ser numerico')
}
else{
    alert('EDAD INGRESADA CORRECTAMENTE')
    alert('Tu edad es ' + edad)
    //TEMPLATE STRING, con comillas invertidas, ej
    alert(`Tu edad es ${edad} buen trabajo`)
} */


//isNaN : nos permite chequear si un valor es un Not a Number, por ejemplo arriba
//funcionamiento interno
    
    //string(Number('hola10')) === 'NaN'


    //WHILE, en el trabajo real no se suele usar. se ejecuta hasta que cumpla los requisitos dentro de los parentesis
let precio = prompt('Ingrese un precio')

while(!precio || isNaN(precio)) {
    if(precio === null){
        break
    }
    alert('Error dato invalido')
    precio = prompt('Ingrese nuevamente')
}
if(precio === null){
    alert('has cancelado el proceso')
}
else{
    alert('precio ingresado correctamente')
}
