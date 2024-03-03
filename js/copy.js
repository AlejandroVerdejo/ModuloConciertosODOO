function copiarTexto() {
    var textoACopiar = document.getElementById("texto_copiar"); // Obtener el elemento con el texto a copiar
    var seleccion = document.createRange(); // Crear un rango de selección
    seleccion.selectNode(textoACopiar); // Seleccionar el nodo con el texto
    window.getSelection().removeAllRanges(); // Limpiar cualquier selección previa
    window.getSelection().addRange(seleccion); // Agregar el nuevo rango de selección
    document.execCommand("copy"); // Copiar el texto seleccionado
    window.getSelection().removeAllRanges(); // Limpiar la selección después de copiar
}