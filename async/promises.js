function hola(nombre) {
  return new Promise(function(resolve, reject) {

    setTimeout(function () {
      console.log('hola,' + nombre);
      resolve(nombre);    
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout (function() {
      console.log('Bla bla bla bla...');
      resolve(nombre);
      reject('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('adios', nombre);
      resolve(nombre);
    }, 1000);
  });
}

// ---

console.log('Iniciando el proceso...');


hola('Raul')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('terminando el proceso');
  })
  .catch(error => {
    console.error('Ha habido un error');
    console.error(error);
  
  })
