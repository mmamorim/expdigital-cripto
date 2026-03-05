
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

function cifrarCesar(mensagem, chave) {
    let txtCifrado = ""
    let letrasEntrada = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz"
    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem.charAt(i);
        let pos = letrasEntrada.lastIndexOf(letra)
        let posCifrada = 0
        if (pos != -1) {
            if (pos + chave < 0) {
                posCifrada = letrasEntrada.length + pos + chave
            } else {
                posCifrada = (pos + chave) % letrasEntrada.length                
            }
            letraCifrada = letrasEntrada.charAt(posCifrada)
        } else {
            letraCifrada = letra
        }
        txtCifrado = txtCifrado + letraCifrada
    }
    return txtCifrado
}

function acaoCifrarCesar() {
    let txtOriginal = document.getElementById("txtEntrada").value
    let txtCifrado = cifrarCesar(txtOriginal, 3)
    document.getElementById("resp1").innerText = txtCifrado
}

function acaoDecifrarCesar() {
    let txtOriginal = document.getElementById("txtSaida").value
    let txtCifrado = cifrarCesar(txtOriginal, -3)
    document.getElementById("resp2").innerText = txtCifrado
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