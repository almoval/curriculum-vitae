// console.log("funciona")
// function calcular() {
//     var a =document.getElementById("CantPlacas");
//     var b =document.getElementById("med43x24");
//     var c =document.getElementById("med24x24");
//     var d =document.getElementById("med13x18");
//     var e =document.getElementById("Final del Dia");
    
//     // const resultadoSuma = sumar(b,c,d);
    
//     const resultadoResta =restar(a,b,c,d);
//     e.setAttribute("value",resultadoResta)
//     // console.log(resultadoSuma);
//     console.log(resultadoResta);    
// }

// // function sumar ( b , c , d) {
// //     return b + c + d;
// // }
// function restar(a,b,c,d) {
//     return e= a - b -c -d;
// }
// var a=parseInt(document.getElementById("CantPlacas").value);
// var b=parseInt(document.getElementById("med43x24").value);
// var c=parseInt(document.getElementById("med24x24").value);
// var d=parseInt(document.getElementById("med13x18").value);
// var restar document.getElementById("Final del Dia")=a-b-c-d;
// document.form.resultado.value=resta;

function restar(){
var a=parseInt(document.getElementById("CantPlacas").value);
var b=parseInt(document.getElementById("med43x24").value);
var c=parseInt(document.getElementById("med24x24").value);
var d=parseInt(document.getElementById("med13x18").value);
var restar =a-b-c-d;
document.getElementById("FinalDelDia").value = restar;
// document.form.resultado.value=restar;
}
//<button type="button" class="botonSubmit" onclick="restar()">restar</button>


 function restar() {
   if(document.getElementById("CantPlacas") != null && document.getElementById("med43x24") !=null  && document.getElementById("med24x24")!=null && document.getElementById("med13x18") !=null ){
        alert("los campos han sido completadoa correcamente se ejecutara el formulario");
   }else{
       alert("los campos no han sido completados correctamente")
  }
  }
// function (){
//     if(Calcular){
//         document.getElementById("botonSubmit").removeAttribute("disabled");
//         // buscamos en el dom el boton del formulario y lo habilitamos
//     }else{
//         document.getElementById("botonSubmit").setAttribute("disabled","disabled");
//         // buscamos en el dom el boton del formulario y lo habilitamos
//     }
// }