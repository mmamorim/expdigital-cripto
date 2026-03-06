import cifrarAtbash from "./cifrarAtBash.js";
import cifrarCesar from "./cifrarCesar.js";

document.getElementById("btnCifrar").onclick = () => {
    let txtOriginal = document.getElementById("txtEntrada").value
    let txtCifrado = cifrarAtbash(txtOriginal)
    document.getElementById("resp1").innerText = txtCifrado
}

document.getElementById("btnCifrarCesar").onclick = () => {
    let txtOriginal = document.getElementById("txtEntrada").value
    let txtCifrado = cifrarCesar(txtOriginal, 3)
    document.getElementById("resp1").innerText = txtCifrado
}

document.getElementById("btnDecifrar").onclick = () => {
    let txtOriginal = document.getElementById("txtSaida").value
    let txtCifrado = cifrarAtbash(txtOriginal)
    document.getElementById("resp2").innerText = txtCifrado
}

document.getElementById("btnDecifrarCesar").onclick = () => {
    let txtOriginal = document.getElementById("txtSaida").value
    let txtCifrado = cifrarCesar(txtOriginal, -3)
    document.getElementById("resp2").innerText = txtCifrado
}




