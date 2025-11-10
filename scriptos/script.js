function mostrarMas() {
    var elementoAModificar = document.getElementById("hiddenPuntos");
    var button = document.getElementById("mostrarButton");
    
    if (elementoAModificar.style.display === "none") {
        elementoAModificar.style.display = "block";
        button.innerText = "Mostrar Menos";
    } else {
        elementoAModificar.style.display = "none";
        button.innerText = "Mostrar Más";
    }
}
