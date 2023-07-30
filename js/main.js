console.log('\n/* ---Ejecicio 06 -Punto a) Cara gatitos--- */')
//---------------------------------------------------
//         Ejecicio 06 -Punto a) Cara gatitos
//---------------------------------------------------

var cGatos = ['😺', '😸', '😹','😺', '😸', '😹','😺', '😸', '😹','😺', '😸', '😹']
var cantidad = prompt ('Ingrese un número del 1 al 10')
    if (cantidad <=10 && cantidad >=1){
        alert('Usted verá '+cantidad + ' gato/s')
    }
    else { (cantidad=0)
        alert('Ingresó una cantidad de gato/s no disponible, presione F5 y vuelva a intentarlo por favor.')
}
     
var contador = 0
var mensaje ='Gato '
    
    for (var i = 0; i < cantidad ; i++)
    
    console.log(mensaje + '#' + ++contador + ':'+ cGatos[i]);
