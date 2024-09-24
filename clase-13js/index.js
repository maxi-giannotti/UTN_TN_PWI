//OPERADORES ARITMETICOS
/* 

+ se subdivide en 
CONCATENAR (+) solo ocurre cuando hay un string en la operacion, por ej:
    'pepe' + null
que hace?
    transforma el dato distinto de string a STRING y devuelve la union de los dos strings. DEVUELVE STRING
        'pepe' + null
        'pepe' + String(null)
        'pepe' + 'null'
        'pepenull'


Y
//LOS CINCO OPERADORES DE ABAJO DEVUELVEN NUMEROS SIEMPRE, TRANSFORMA EL DATO QUE NO ES NUMERO EN NUMERO.
//SI ALGUN DATO ES NAN, LA OPERACION FINAL DEVUELVE NAN


+ SUMA
    ocurre cuando no hay string 

//LOS STRINGS QUE SOLO TIENEN NUMEROS PUEDEN TRANSFORMARSE A NUMEROS, cuando es en suma, pasa a ser concatenacion

- RESTAR
    9 -'1'
    9 - Number('1')
    9 - 1
    8

/ DIVIDIR,  devuelve numeros reales con coma, ej:
140 / 23 = 6.08..

% MODULO/RESTO, se usa poco, casi nunca; hace una division pero te devuelve el resto de la division; por ejemplo
11 / 2 = 5 y queda uno vacio
11 % 2 = 1 

* MULTIPLICAR

*/


//COMPARADORES
//SIEMPRE DEVUELVEN BOOLEAN
//NAN ES UN VALOR QUE NO SE PUEDE COMPARAR CON NINGUN DATO, NI SIQUIERA CONSIGO MISMO, SIEMPRE SERA DISTINTO (DA FALSE)
//NULL NO PUEDE SER IGUAL A NADIE EXCEPTO A UNDEFINED U OTRO NULL

/* 
==  IGUAL A

=== ESTRICTAMENTE IGUAL, no solo compara igualdad de valores, tambien compara igualdad de tipos de datos. por ej: Boolean(1) === true

!=  DISTINTO DE, da verdadero cuando los datos son distintos

!== ESTRICTAMENTE DISTINTO DE, hace lo mismo que distinto de pero comparando el tipado

>   MAYOR A 

<   MENOR A 

>=  MAYOR O IGUAL A 

<=  MENOR O IGUAL A 

*/

//Truthy y Falsy
//TODOS LOS DATOS SE PUEDEN TRANSFORMAR A BOOLEAN
//LOS VALORES Truthy SON LOS QUE AL TRANSFORMASE A BOOLEAN DEVUELVEN TRUE, SON TODOS LOS QUE NO SEAN FALSY
//LOS VALORES Falsy SON LOS QUE AL TRANSFORMARSE A BOOLEAN DEVUELVEN FALSE

//LISTA DE VALORES Falsy
/* 
0
''
NaN
undefinded
null
false
-0
*/

//OPERADORES LOGICOS

// !   NOT
//   DEVUELVE EL VALOR BOOLEANO OPUESTO AL DATO NEGADO, si el dato es truthy, devuelve un falsy

// &&  AND
//   SELECCIONA ENTRE DOS VALORES, SI EL PRIMER VALOR ES TRUTHY DEVUELVE EL SEGUNDO
// SI EL PRIMER VALOR ES FALSY, DEVUELVE EL PRIMERO
/* 
por ejemplo: 
7 && 'pepe'
'pepe'


'' && 0
''
*/


// ||  OR
//   SELECCIONA ENTRE DOS VALORES, SI EL PRIMER VALOR ES TRUTHY DEVUELVE EL PRIMERO
// SI EL PRIMER VALOR ES FALSY, DEVUELVE EL SEGUNDO
/* 
por ejemplo:
5 || false 
5
 */


/* 
PRIORIDAD:
NOT
AND
OR
 */

/* 
TABLAS DE LA VERDAD:

AND:
    TRUE && TRUE = TRUE
    TRUE && FALSE = FALSE
    FALSE && TRUE = FALSE
    FALSE && FALSE = FALSE


OR:
    TRUE || TRUE = TRUE
    TRUE || FALSE = TRUE
    FALSE || TRUE = TRUE
    FALSE || FALSE = FALSE
    */

/* POR EJ: DEJAR PASAR SI EL USUARIO TIENE MAS DE 400 NIVELES Y MENOS DE 900
NIVEL = 1000
CONDICION = NIVEL > 400 && NIVEL < 900
            true && NIVEL < 900
            NIVEL < 900
            false
*/

//VARIABLES : son datos que podemos guardar en nuestro programa y utilizarlos despues.

//VAR
//LET
//CONST

/* Sintaxis:
tipo_de_variable identificador = dato

Los nombres de las VARIABLES en minuscula y sin espacio, se puede usar:
camelCase
snake_case (SOLO FUNCIONA CON GUION BAJO)
UpperCamelCase
*/

var nivel = 1000
nivel = 500

var condicion = nivel > 400 && nivel < 900

console.log(condicion)