
console.log("Oi gente tudo bem?")

function cifrar() {
    let elem = document.getElementById("txtEntrada")
    console.log("elem: ",elem);
    console.log("valor: ",elem.value);
    document.getElementById("resp1").innerText = elem.value
}

function decifrar() {
    let elem = document.getElementById("txtSaida")
    console.log("elem: ",elem);
    console.log("valor: ",elem.value);    
    document.getElementById("resp2").innerText = elem.value
}