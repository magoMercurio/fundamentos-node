
//Las variables de entorno se pueden definir en el archivo .env
// asi mismo se nombran en mayusculas

let nombre = process.env.NOMBRE || 'Desconocido';
let web = process.env.WEB || 'No tengo web';

console.log('hola ' + nombre);
console.log('Mi web es ' + web);