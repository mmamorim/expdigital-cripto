
console.log("Oi gente tudo bem?")

function cifrarAtbash(mensagem) {
    let txtCifrado = ""
    let letrasEntrada = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz"
    //console.log("tamanho: ", mensagem.length);
    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem.charAt(i);
        let letraCifrada = ""
        let pos = letrasEntrada.lastIndexOf(letra)
        if (pos != -1) {
            let posCifrada = letrasEntrada.length - pos - 1
            letraCifrada = letrasEntrada.charAt(posCifrada)
        } else {
            letraCifrada = letra
        }
        txtCifrado = txtCifrado + letraCifrada
    }
    return txtCifrado
}

function cifrar() {
    let txtOriginal = document.getElementById("txtEntrada").value
    let txtCifrado = cifrarAtbash(txtOriginal)
    document.getElementById("resp1").innerText = txtCifrado
}

function decifrar() {
    let txtOriginal = document.getElementById("txtSaida").value
    let txtCifrado = cifrarAtbash(txtOriginal)
    document.getElementById("resp2").innerText = txtCifrado
}