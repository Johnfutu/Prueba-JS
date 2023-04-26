function mostrarSoludoDentroDeDosSegundos(){
    timeoutID = setTimeout(slowAlert, 2000);
}
function slowAlert(){
    alert("Ya estamos aqui")
}
mostrarSoludoDentroDeDosSegundos();


function funciondeMiboton(){
    alert("Acabas de hacer click en el boton.");
    console.log();
}