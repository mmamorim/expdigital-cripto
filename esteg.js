
function textoParaBinario(mensagem) {
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        const codigo = mensagem.charCodeAt(i); // código ASCII/Unicode básico
        const binario = codigo.toString(2).padStart(8, "0"); // garante 8 bits
        resultado += binario;
    }

    return resultado;
}

function codifica_esteg(textoVisivel, mensagem) {
    let binario = textoParaBinario(mensagem)
    let saida = ""
    for (let i = 0; i < binario.length; i++) {
        let bit = binario.charAt(i)
        if (bit == "0") {
            saida = saida + "\u202c"
        } else {
            saida = saida + "\u202d"
        }
    }
    return textoVisivel + saida
}

function decodifica_esteg(textoCodificado) {
    let mensagem = ""
    let byte = "" 
    for (let i = 0; i < textoCodificado.length; i++) {
        let letra = textoCodificado.charAt(i)
        if (letra == "\u202c") {
            byte = byte + "0"
        }
        if (letra == "\u202d") {
            byte = byte + "1"
        }
        if(byte.length == 8) {
            let code = parseInt(byte,2)
            let letra = String.fromCharCode(code)
            mensagem = mensagem + letra
            byte = ""
        }
    }
    return mensagem
}

export { codifica_esteg, decodifica_esteg }
