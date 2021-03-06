const cipher = {
    encode: (offset, string) => {
        const message = string.toUpperCase();
        const alphabet = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        // const num=['0','1','2','3','4','5','6','7','8','9']
        // const especiales=['.',',',':',';','?','¿','!','¡','@','-','_','*']
        let encriptado = "";
        for (let i = 0; i < message.length; i++) {
            if (message[i] === " ") {
                encriptado += " ";
            } else {
                for (let j = 0; j < alphabet.length; j++) {
                    if (alphabet[j] === message[i]) {
                        let posicion = j + offset;
                        if (posicion >= alphabet.length) {
                            posicion = posicion % alphabet.length;
                        }
                        encriptado += alphabet[posicion];
                        // console.log(encriptado,posicion)
                    }
                    //termina abecedario
                }
                //numero
                //   for(let h=0;h<num.length;h++){
                //   if(message[i]=== num[h]){
                //     let posiNum= h+offset
                //     if(posiNum >= num.length){
                //       posiNum= posiNum%num.length
                //     }
                //       encriptado += num[posiNum]
                //     }
                //   //termina numeros
                //   }
                //   // especiales
                //   for(let k=0;k<especiales.length;k++){
                //   if(message[i]===especiales[k]){
                //     let posiEsp=k+offset
                //     if(posiEsp >= especiales.length){
                //       posiEsp= posiEsp%especiales.length
                //     }
                //     encriptado += especiales[posiEsp]
                //   }
                //   // Termina especiales
                //}
            }
        }
        return encriptado;
    },
    decode: (offset, string) => {
        if (!offset || !string) {
            throw new TypeError();
        }
        // if (offset === "") {
        //   throw new TypeError();
        // } else if (offset === 0) {
        //   throw new TypeError();
        // } else if (offset === null && string === []) {
        //   throw new TypeError();
        //   // eslint-disable-next-line no-dupe-else-if
        // } else if (offset === 0 && string === 0) {
        //   throw new TypeError();
        // } else {
        // if (!string) return "";

        const letras = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        offset = ((offset % 26) - 26) % 26;
        return string.replace(
            /[A-Z]/gi,
            (c) => letras[(letras.indexOf(c) - offset) % 26]
        );
    }
};
export default cipher;