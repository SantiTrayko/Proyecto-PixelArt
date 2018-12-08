// variables globales.
var colorActual = '';
var pintar = false;

//Elementos 
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var colorPersonalizado = document.getElementById('color-personalizado');
var conteinter = document.getElementById('container');

// Funciones reutilizables 
function cambiarColor (e){
  e.currentTarget.style.backgroundColor = colorActual;
}

// Funcion agregar evento para desactivar pincerl a conteiner.
function desactivar(){
  conteinter.addEventListener('mouseup', desactivarPincel);
}


var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.


colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    indicadorDeColor = colorActual;
  })
);

/* Esta función recorre el arreglo 'nombreColores' con un for. Usando DOM: crea un div por cada color, le asigna la clase 'color-paleta' y 
un background-color correspondiente al color actual; para luego adjuntarlo a la seccion del HTML con id 'paleta' que fue guardado anteriormente 
en la variable global paleta */

function crearPaletaColores(){
  for(var i=0; i < nombreColores.length; i++){
    var color = nombreColores[i];
    var nuevoDiv = document.createElement('DIV');
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.addEventListener('click', mostrarColorIndicador);
    paleta.appendChild(nuevoDiv);
  }
}

function mostrarColorIndicador (e){
  colorActual = e.currentTarget.style.backgroundColor;
  indicadorDeColor.style.backgroundColor = colorActual;
}

// Esta funcion crea un div por cada pixel y lo adjunta a el div con id 'grilla-pixeles' guardado en la variable grillaPixeles

function crearGrillaPixeles(){
  var pixeles = 1750;
  for(var i=0; i < pixeles; i++){
    var nuevoDiv = document.createElement('DIV');
    nuevoDiv.className = 'pixel';
    nuevoDiv.addEventListener('mousedown', activarPincel);
    nuevoDiv.addEventListener('mouseup', desactivarPincel);
    nuevoDiv.addEventListener('mousemove', pintarEnMovimiento);
    grillaPixeles.appendChild(nuevoDiv);
  }
}

function pintarEnMovimiento (e){
  if (pintar){
    cambiarColor(e);
  }
}

function activarPincel (e){
  pintar = true;
  cambiarColor(e);
}

function desactivarPincel (e){
  pintar = false;
}

crearGrillaPixeles();
crearPaletaColores();
desactivar();
