function asincrona(callback) {
  setTimeout(function() {
    try {
      let a = 3 + z;
      console.log(a);
      callback(null, a)
    } catch (e) {
      callback(e, null)
    }
  }, 1000)
}

asincrona(function (err, dato) {
  if (err) {
    console.log(err, 'Tenemos un error');
    return false
  } else {
    console.log(dato);
  }

})