function sumar(num1, num2){
    return num1 + num2;
}
//declarar una funcion como variable
let sumar2 = function(num1, num2){
    return num1 + num2;
}
sumar(3,6)
sumar2(3,6);
//funciones flecha
let sumar3 = (num1, num2) => {
    return num1 + num2;
}
let sumar4 = (num1, num2) => num1, num2;
let saludar = saludo=>console.log(saludo);
// las flechas significan que la variable esa es una funcion
