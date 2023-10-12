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
}

function conversacion(nombre, veces, callBack) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callBack);
    })
  } else {
    adios(nombre, callBack);
  }
}

// --

console.log('iniciando Proceso');
hola('carlos', function () {
  conversacion('carlos', 3, function() {
    console.log('terminando proceso');
  });
});

/* hola('Carlos', function () {

  hablar(function () {
    adios('Carlos', function() {
      console.log('terminando Proceso');
    });
  });
}); */
