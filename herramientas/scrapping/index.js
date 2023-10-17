const pup = require('puppeteer');

(async ()=>{
    console.log('lanzamos navegador');
    //const browser = await pup.launch();
    const browser = await pup.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')
    // acciones
    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    })
    //imprimimos
    console.log(titulo1);
    console.log('cerramos navegador');
    browser.close();
    console.log('navegador cerrado');
})();