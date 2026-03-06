
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

export default cifrarAtbash