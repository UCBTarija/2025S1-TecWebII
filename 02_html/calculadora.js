function sumar(nombre) {
    // lee los números y calcula
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) + parseInt(num2);

    let objResultado = document.getElementById("resultado");
    objResultado.value = resultado;

    if(resultado < 0){
        objResultado.style.color = "red";
    } else {
        objResultado.style.color = "black";
    }
}