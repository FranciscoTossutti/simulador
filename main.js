



let producto1 = prompt("Ingresar un producto");
let precio1 = parseFloat(prompt("Ingrese el precio del producto"));

if (producto1 != ""){
    producto1 = prompt("Porfavor, ingrese un producto")
}

while (isNaN(precio1)) {
    precio1 = parseFloat(prompt("Porfavor, ingrese un precio"))
}

let producto2 = prompt("Ingresar otro producto");
let precio2 = parseFloat(prompt("Ingrese el precio del producto"));

while (isNaN(precio2)) {
    precio2 = parseFloat(prompt("Porfavor, ingrese un precio"))
}

let producto3 = prompt("Ingresar el ultimo producto");
let precio3 = parseFloat(prompt("Ingrese el precio del producto"));

while (isNaN(precio3)) {
    precio3 = parseFloat(prompt("Porfavor, ingrese un precio"))
}

alert(`Usted ingreso estos productos ${producto1}, ${producto2}, ${producto3} y el costo total es de $${calcularTotal()} finales.`);

function calcularTotal() {
    let total = precio1 + precio1 + precio2;
    return total;
}
