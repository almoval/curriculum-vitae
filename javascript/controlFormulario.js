// console.log ("controlFormulario.js funciona");
const valores =window.location.search;

// Mostramos los valores en consola:
console.log (valores)

var campoNombre=false;
// var campoTelefono=false;
// var campoCorreo=false;
// var campoCampo=false;

// // Resultado
// nombre=algo&telefono=algo&correo=algo%40algo&campo=algo

// Creamos la Instancia
const urlParams = new URLSearchParams (valores);

// Accedemos a los valores
var Nombre= urlParams.get("Nombre");
var Telefono= urlParams.get("Telefono");
var Correo= urlParams.get("Correo");
var Campo= urlParams.get("Campo");
console.log(Nombre);
console.log(Telefono);
console.log(Correo);
console.log(Campo);

if(Nombre != null && Telefono !=null && Correo!=null && Campo !=null){
    alert("los campos han sido completados correcamente se ejecutara el codigo");
}else{
    alert("los campos no han sido completados correctamente")
}

function validateFormContacto() {
    let Nombre=document.getElementById("Nombre");
    console.log(Nombre);
    console.log(Nombre.value);
    if(Nombre.value.lengt >2){
      campoNombre=true;
      document.getElementById("Nombre").classList.remove("error");
      validarFormulari();
    }else{
        campoNombre=false;
        document.getElementById("Nombre").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario(){
    if(campoNombre){
        document.getElementById("botonSubmit").removeAttribute("disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }
}

function validarCampos(){
    if(campoTelefono){

    }
}
function validateFormContacto() {
    let Telefono=document.getElementById("Telefono");
    console.log(Telefono);
    console.log(Telefono.value);
    if(Telefono.value.lengt >2){
      campoTelefono=true;
      document.getElementById("Telefono").classList.remove("error");
      validarFormulari();
    }else{
        campoTelefono=false;
        document.getElementById("Telefono").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario(){
    if(campoTelefono){
        document.getElementById("botonSubmit").removeAttribute("disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }
}

function validarCampos(){
    if(campoTelefono){

    }
}

function validateFormContacto() {
    let Mail=document.getElementById("Mail");
    console.log(Mail);
    console.log(Mail.value);
    if(Mail.value.lengt >2){
      campoMail=true;
      document.getElementById("Mail").classList.remove("error");
      validarFormulari();
    }else{
        campoMail=false;
        document.getElementById("Mail").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario(){
    if(campoMail){
        document.getElementById("botonSubmit").removeAttribute("disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }
}

function validateFormContacto() {
    let Campo=document.getElementById("Campo");
    console.log(Campo);
    console.log(Campo.value);
    if(Campo.value.lengt >2){
      campoCampo=true;
      document.getElementById("Campo").classList.remove("error");
      validarFormulari();
    }else{
        campoCampo=false;
        document.getElementById("Campo").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario(){
    if(campoCampo){
        document.getElementById("botonSubmit").removeAttribute("disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }
}
