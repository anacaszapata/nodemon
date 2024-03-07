function hola(nombre, callback) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        callback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("bla bla bla bla...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios, ", nombre);
        otroCallback();
    }, 1500);
}
function conversacion
console.log("Iniciando proceso...");
hola('Carlos',function(nombre){
    adios(nombre,function(){
        console.log('Terminamos');
    });
});
// hola("ana", function () {
//     hablar(function () {
//         hablar(function () { ;
//             adios("Ana", function () {
//                 console.log("terminando proceso...");
//             });
//         }); 
//     });
// });
