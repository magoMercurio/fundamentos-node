const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE
}

console.log(kb(os.freemem()));

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.networkInterfaces())
