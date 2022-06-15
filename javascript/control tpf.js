console.log("funciona")
function calcular() {
    let a =document.getElementById("CantPlacas");
    let b =document.getElementById("med43x24");
    let c =document.getElementById("med24x24");
    let d =document.getElementById("med13x18");
    let e =document.getElementById("Final del Dia");
    
    // const resultadoSuma = sumar(b,c,d);
    
    const resultadoResta =restar(a,b,c,d);
    e.setAttribute("value",resultadoResta)
    // console.log(resultadoSuma);
    console.log(resultadoResta);    
}

// function sumar ( b , c , d) {
//     return b + c + d;
// }
function restar(a,b,c,d) {
    return a - b -c -d;
}


