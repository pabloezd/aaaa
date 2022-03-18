/*let saludarUsuario = prompt("Por favor ingrese su nombre");
let emailUsuario = prompt("Por favor ingrese su correo electrónico");
alert("Bienvenido/a a nuestra Ferretería, " + saludarUsuario);

function registroUsuario(nombre, email) {
    console.log("Ingresó: " + nombre + " " + ", y su email es: " + email);
}
registroUsuario(saludarUsuario, emailUsuario);
*/

function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}
//PRODUCTOS
const prod1 = new Producto (" Amoladora", 10, 500);
const prod2 = new Producto (" Sierra", 15, 600);
const prod3 = new Producto (" Taladro", 30, 450);

const listaProd = [prod1, prod2, prod3]
const allProducts = [listaProd[0].nombre, listaProd[1].nombre, listaProd[2].nombre]

//Accesorios
const accesorios = [
    {nombre: "Disco de corte", precio: 150},
    {nombre: "Hoja de corte", precio: 200},
    {nombre: "Mecha 13mm", precio: 300},
]

//Repuestos
const repuestos = [
    {id: 1, nombre: "Rotor", precio: 100},
    {id: 2, nombre: "Estator", precio: 100},
    {id: 3, nombre: "Carbones", precio: 20},
    {id: 4, nombre: "Switch", precio: 40},
]

// Funciones para ahorrar codigo
function stockSuficiente(cantidad, precio){
    alert("El total de su compra es de $" + cantidad * precio);
}
function stockQueda(producto, stock){
    console.log("Stock Restante " + producto + ": " + stock);
}
/*
let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo 
for (let i = 0; i < cantidadProductosDistintos; i++){
    
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");
    let cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
    
    
    if ((productoElegido === listaProd[0].nombre) && (cantidadCompra <= listaProd[0].stock)){
        stockSuficiente(cantidadCompra, listaProd[0].precio); 
        let stockRestante1 = listaProd[0].stock - cantidadCompra;
        stockQueda(listaProd[0].nombre, stockRestante1);
    }
    
    else if ((productoElegido === listaProd[1].nombre) && (cantidadCompra <= listaProd[1].stock)){
        stockSuficiente(cantidadCompra, listaProd[1].precio); 
        let stockRestante2 = listaProd[1].stock - cantidadCompra;
        stockQueda(listaProd[1].nombre, stockRestante2);
    }
    
    else if ((productoElegido === listaProd[2].nombre) && (cantidadCompra <= listaProd[2].stock)){
        stockSuficiente(cantidadCompra, listaProd[2].precio); 
        let stockRestante3 = listaProd[2].stock - cantidadCompra;
        stockQueda(listaProd[2].nombre, stockRestante3);
    }

    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Taladro, Sierra o Amoladora");
    }
}

//Metodo para verificar por alert si tenemos determinado producto en nuestro array
let chequearProducto = prompt("Verifique si tenemos el producto");
alert(allProducts.includes(chequearProducto));

//Encontrar si tenemos el accesorio con find
const busqueda = accesorios.find((el) => el.nombre === "Disco de corte");
console.log(busqueda);

//Encontrar si tenemos el accesorio con filter
const filtrar = accesorios.filter((el) => el.precio <= 200);
console.log(filtrar);


//DOM
let h1 = document.getElementById("nombreFerreteria");
console.log(h1.innerHTML);

let marca = document.getElementsByClassName("marca");
console.log(marca[0].innerHTML);
console.log(marca[1].innerHTML);
console.log(marca[2].innerHTML);

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo.innerText);
subtitulo.innerText = subtitulo.innerText + " - Que estabas buscando hoy, " + saludarUsuario + "?";

let spareparts = document.getElementById("spareparts");
spareparts.innerText = "REPUESTOS CON STOCK";

for (const repuesto of repuestos) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `<p> Nro ID: ${repuesto.id}</p>
                            <p> Nombre Repuesto: ${repuesto.nombre}</p>
                            <p> Costo: $ ${repuesto.precio}</p>
                            <br>`;
document.body.appendChild(contenedor);
}
*/

//EVENTOS
let boton = 
document.getElementById("15");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    console.log("Ha obtenido un 15% de descuento en su compra ");
}


let subs = document.getElementsByClassName("form-control")[0];
subs.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Se ha suscrito a nuestro Newsletter con éxito ")
    }
});

let nuevoIngreso = 
document.getElementById("d1");
nuevoIngreso.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d1").value)
        let saludo = document.getElementById("holis");
        console.log(saludo.innerText);
        saludo.innerText = saludo.innerText + " Bienvenido a nuestra Ferretería " + nuevoIngreso.value;
    }
});

let nuevoEmail = 
document.getElementById("d2");
nuevoEmail.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d2").value)
    }
});

let comproa = 
document.getElementById("d3");
comproa.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d3").value)
        let tota = document.getElementById("totala");
        console.log(tota.innerText);
        tota.innerText = tota.innerText + " El total de su compra es: $  " + (comproa.value * listaProd[0].precio);
    }
    else {tota = document.getElementById("totala");
    console.log(tota.innerText);
    tota.innerText = tota.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let compros = 
document.getElementById("d4");
compros.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d4").value)
        let tots = document.getElementById("totals");
        console.log(tots.innerText);
        tots.innerText = tots.innerText + " El total de su compra es: $  " + (compros.value * listaProd[1].precio);
    }
    else {tots = document.getElementById("totals");
    console.log(tots.innerText);
    tots.innerText = tots.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let comprot = 
document.getElementById("d5");
comprot.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d5").value)
        let tott = document.getElementById("totalt");
        console.log(tott.innerText);
        tott.innerText = tott.innerText + " El total de su compra es: $  " + (comprot.value * listaProd[2].precio);
    }
    else {tott = document.getElementById("totalt");
    console.log(tott.innerText);
    tott.innerText = tott.innerText + " Por favor ingrese un numero inferior a 999  " }
});

//Local Storage y JSON

localStorage.setItem ('bienvenida', 'Bienvenido a Ferretería PALO!');
let welcome = localStorage.getItem('bienvenida');
console.log(welcome);

localStorage.setItem ('sugeridos', 'Te sugerimos los siguientes productos para tu proyecto:  ' + allProducts);
let siempre = localStorage.getItem('sugeridos');


let proy = 
document.getElementById("d6");
proy.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d6").value)
        let sugs = document.getElementById("proyecto");
        console.log(sugs.innerText);
        sugs.innerText = sugs.innerText + siempre
    }
});

const enJSON  = JSON.stringify(accesorios);
console.log(enJSON);

