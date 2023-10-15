function otrafuncion() {
  return serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona() {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi funcion asincrona");
      console.error(err);
    }
}, 1000)
}

try {
  // otrafuncion();
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
} catch(err) {
  console.log(err);
}

console.log("Esto esta al final");