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

let comproamoladora = 
document.getElementById("d3");
comproamoladora.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d3").value)
        let totamoladora = document.getElementById("totalamoladora");
        console.log(tota.innerText);
        tota.innerText = tota.innerText + " El total de su compra es: $  " + (comproamoladora.value * listaProd[0].precio);
    }
    else {totamoladora = document.getElementById("totalamoladora");
    console.log(totamoladora.innerText);
    totamoladora.innerText = totamoladora.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let comprosierra = 
document.getElementById("d4");
comprosierra.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d4").value)
        let totsierra = document.getElementById("totalsierra");
        console.log(totsierra.innerText);
        totsierra.innerText = totsierra.innerText + " El total de su compra es: $  " + (comprosierra.value * listaProd[1].precio);
    }
    else {totsierra = document.getElementById("totalssierra");
    console.log(totsierra.innerText);
    totsierra.innerText = totsierra.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let comprotaladro = 
document.getElementById("d5");
comprotaladro.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d5").value)
        let tottaladro = document.getElementById("totaltaladro");
        console.log(tottaladro.innerText);
        tottaladro.innerText = tottaladro.innerText + " El total de su compra es: $  " + (comprotaladro.value * listaProd[2].precio);
    }
    else {tottaladro = document.getElementById("totaltaladro");
    console.log(tottaladro.innerText);
    tottaladro.innerText = tottaladro.innerText + " Por favor ingrese un numero inferior a 999  " }
});



/*
function comproX (idx,totalx,prodx){
    let comproxx = 
    document.getElementById(idx);
    comproxx.addEventListener("keyup", function(event) {
        if (event.key <= 999) {
            console.log(document.getElementById(idx).value)
            let totxx = document.getElementById(totalx);
            console.log(totxx.innerText);
            totxx.innerText = totxx.innerText + " El total de su compra es: $  " + (comproxx.value * prodx.precio);
        }
        else {totxx = document.getElementById(totalx);
        console.log(totxx.innerText);
        totxx.innerText = totxx.innerText + " Por favor ingrese un numero inferior a 999  " }
    });

}

function comproX (d5, totalt, prod3);
*/




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

