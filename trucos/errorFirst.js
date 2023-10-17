function asincrona() {
  setTimeout(function() {
    try {
      let a = 3 + z;
      console.log(a);
      cancelIdleCallback(null, a)
    } catch (e) {
      callback(e, null)
    }
})
}