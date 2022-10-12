// Funcion para obtener el id de un elemento
const getById = (element) => document.getElementById(element);

// Funcion para obtener todos los elementos que comparten una clase css
const querySelectorAll = (element) => document.querySelectorAll(element);

// Obtencion de todos los componentes con clase componente y con clase producto.
const componentes = querySelectorAll('.componente');
const productos = querySelectorAll('.producto');

// Ciclo para recorrer cada elemento y llamar la funcion arrastrarElemento para cada uno
componentes.forEach(componente => arrastrarElemento(getById(componente.id)));
productos.forEach(producto => arrastrarElemento(getById(producto.id)));

function arrastrarElemento(element) {
    //Declaramos 4 variables para manejar la posición de cada elemento en la pantalla.
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onpointerdown = arrastrarPuntero;

    function arrastrarPuntero(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = iniciarArrastreElemento;
        document.onpointerup = pararArrastreElemento;
    }

    function iniciarArrastreElemento(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        element.style.top = element.offsetTop - pos2 + 'px';
        element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function pararArrastreElemento() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}