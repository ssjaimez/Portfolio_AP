/**document.getElementById(boton).onclick = function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"

}

document.addEventListener(' click', function(){
    console.log ("Hola Mundo ")
});
*/



document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = "green";
});

/**document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});
*/

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});


const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Responsable, Eficiente y Transparente.";
  }

  function myFunctionA() {
    document.getElementById("demo").innerHTML = "Hice varios diseños para empresas y organizaciones gubernamentales.";
  }
