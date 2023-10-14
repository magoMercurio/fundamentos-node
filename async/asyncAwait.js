async function hola(nombre) {
  return new Promise(function(resolve, reject) {

    setTimeout(function () {
      console.log('hola,' + nombre);
      resolve(nombre);    
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout (function() {
      console.log('Bla bla bla bla...');
      resolve(nombre);
      reject('Hay un error');
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('adios', nombre);
      resolve(nombre);
    }, 1000);
  });
}

// ---

async function main() {
  let nombre = await hola('Juan');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
console.log('Finalizando el proceso...');

}

console.log('Iniciando el proceso...');
main();
