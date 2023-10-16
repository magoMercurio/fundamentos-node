/* const p = require('process'); */


process.on('exit', () => {
    console.log('HEy!!! proceso va ACABO');
})

process.on('uncaughtException', (err, origen) => {
  console.error('se me ya olvidado  capturar el error');
  console.error(err);
})

funcionquenoexiste();

console.log('Esto si el error no se recoge, no sale');