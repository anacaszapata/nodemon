function hola(nombre, callback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        callback();
    }, 1000)
}


function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios, ', nombre);
        otroCallback();
    }, 1500);
}
console.log('Iniciando proceso...');
hola('ana', function () {
    adios('Ana', function () {
        console.log('terminando proceso');
    });

});

// hola('Ana',function(){});
// adios('Ana',function(){});
