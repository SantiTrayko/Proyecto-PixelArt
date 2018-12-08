// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png

//funcion auto ejecutable encargada de guardar nuestra obra de arte al pulsar el boton 'guardar'.
(function (){
var botonGuardar = document.getElementById('guardar');
botonGuardar.addEventListener('click', guardar)
function guardar() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}
})();





// Funcion auto-ejecutable encargada de borrar todo cuando se hace click en el boton 'borrar todo'.
(function (){
  // Varible contiene los div que representan a los pixeles de la grilla.
  var divPixeles = document.getElementsByClassName('pixel');
  // Se agrega un evento al boton 'borrar todo' con una funcion asociada al mismo, que recorre cada pixel y le da un background blanco.
  var botonBorrar = document.getElementById('borrar');
  botonBorrar.addEventListener('click', function() {
    for(var i=0; i < divPixeles.length; i++) {
      var pixel = divPixeles[i];
      $(pixel).animate({backgroundColor: 'white'}, 'slow');
    }
  });
}());


// Carga a un superheroe predefinido

function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}

function superheroes (){
document.getElementById('batman').addEventListener('click', 
function (){cargarSuperheroe(window.batman)});

document.getElementById('wonder').addEventListener('click', 
function(){cargarSuperheroe(window.wonder)});

document.getElementById('flash').addEventListener('click', 
function(){cargarSuperheroe(flash)}),

document.getElementById('invisible').addEventListener('click', 
function(){cargarSuperheroe(invisible)});
}

superheroes();
