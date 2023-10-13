function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('hola,' + nombre);
    miCallback();    
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout (function() {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('adios', nombre);
    otroCallback();
  }, 1500);