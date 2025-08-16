//"ejercicio 1 intereces banco"//

var capitalInvertido = 15000000;
var interecesCapital = 2;
var ganaciaIntereces = capitalInvertido * interecesCapital / 100;
var totalGanado = capitalInvertido + ganaciaIntereces;

if(totalGanado>=capitalInvertido){
    console.log(" Las ganacias genradas durante el mes son: " +ganaciaIntereces);
    console.log(" El capital invertido y las ganancias son: " +totalGanado);
}else{
    console.log("le diron en la torre");
}

//ejercicio 2

var par = 0

if(par % 2 ===0){

    console.log("El numero corresponde a par")

}else{

    console.log("el numero no es par")
}

//ejercicio 3 

var numero = 20;
var devolucion = numero*3;
if(numero){
    console.log("tu numero es mayo a diez");
    console.log(" devolucion exitosa " +devolucion);
}else{
    console.log("cantidad incorrecta sigue intentado");
}

//ejercico 4 

var valorCompra = 1500000;
var impuestos = 19;
var descuento = 10;
var valordescuento = valorCompra*descuento/100;
var valorImpuestos = valorCompra*impuestos/100;
var totalPagado = valorCompra+valorImpuestos-valordescuento;

if(valorCompra>1000000){

    console.log("el valor pagado es: " +totalPagado);
    console.log( " el descuento es de: " +valordescuento);
    console.log("el valor del iva es de: " +valorImpuestos);

}else{
    var pagoIva = valorCompra+valorImpuestos;
    console.log("no aplica para descuento");
    console.log("El presio a pagar es de: " +pagoIva);
}

//ejercicio 5 

var num1 = 8;
var num2 = 7;
var resultado = num1 + num2;

if(num1>num2){

    console.log("el valor de ka suma es: " +resultado);

}else{
    console.log("no aplica");
}

//ejercicio 6 
 
var compra = 200000;
var imp = 10; //"le meti impuesto por duro"
var desc = 20;
var totalCompra = compra-(compra*desc)/100;

if(compra<=100000){

    console.log("descuento exitoso total a pagar: " +totalCompra);

}else{
    var compIva = compra+(compra*imp)/100;
    console.log("no aplica descuento: " +compIva);
}

//ejercicio 7

var sueldo = 4000000;
var retencion = 10;
var totalRetenido = sueldo*retencion/100;
var sueldoTotal = sueldo-(sueldo*resultado)/100;

if(sueldo<=2000000){

    console.log("Pago exitos " +sueldo);
    console.log("Retencion mensual " +totalRetenido);
    console.log("Valor recivido: " +sueldoTotal);

}else{

    console.log("No aplica retencion");

}

//ejercicio 8
 
var multiploCinco = 10;

if(multiploCinco === 0){

    console.log( "Corresponde a multiplo de cinco" )

}else{

    console.log("no corresponde a los multiplos")

}

    //ejercicio 9 

var edad = 20

if(edad >=18){
    
    console.log("verificado eres mayor de edad")

}else{

    console.log("Eres menor de edad") 

}

//ejercicio 10

var precio = 60000
var clave01 = 10
var clave02 = 20
var precioClave01 = precio+(precio*clave01)/100 
var precioClave02 = precio+(precio*clave02)/100

if(precioClave01){

    console.log("El valor de sucompra con clave 01 " +precioClave01)

}else{

    console.log( " el valor de su compra con calve 02 es: " +precioClave02 )

}


  //ejercicio 11

  var camisas = 6
  var precioCamisa = 25000
  var prom = 20 
  var precioCamisaDescuento = precioCamisa+(precioCamisa*prom)/100

  if(camisas>=3){

    console.log("el valor de tu compra es " +precioCamisaDescuento)

  }else{

    console.log("no aplica descuento")

  }
   
    
       
 



 