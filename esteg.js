

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
    let txtBinario = textoParaBinario(mensagem)
    console.log(txtBinario);
    for(let i=0; i < txtBinario.length; i++) {
        let bit = txtBinario.charAt(i)
        if(bit == '0') {
            textoVisivel = textoVisivel + '\u202d'
        } else {
            textoVisivel = textoVisivel + '\u202c'
        }
    }
    return textoVisivel + "*"
}

export { codifica_esteg }