export function Location(transcript) {
    if (transcript.toLowerCase() === "1x" || transcript.toLowerCase() === "bir x" || transcript.toLowerCase() === "1 x") {
        return { deger: "x", konum: 1 }
    } else if (transcript.toLowerCase() === "2x" || transcript.toLowerCase() === "iki x" || transcript.toLowerCase() === "2 x") {
        return { deger: "x", konum: 2 }
    } else if (transcript.toLowerCase() === "3x" || transcript.toLowerCase() === "iki x" || transcript.toLowerCase() === "3 x") {
        return { deger: "x", konum: 3 }
    } else if (transcript.toLowerCase() === "4x" || transcript.toLowerCase() === "dört x" || transcript.toLowerCase() === "4 x") {
        return { deger: "x", konum: 4 }
    } else if (transcript.toLowerCase() === "5x" || transcript.toLowerCase() === "beş x" || transcript.toLowerCase() === "5 x") {
        return { deger: "x", konum: 5 }
    } else if (transcript.toLowerCase() === "6x" || transcript.toLowerCase() === "altı x" || transcript.toLowerCase() === "6 x") {
        return { deger: "x", konum: 6 }
    } else if (transcript.toLowerCase() === "7x" || transcript.toLowerCase() === "yedi x" || transcript.toLowerCase() === "7 x") {
        return { deger: "x", konum: 7 }
    } else if (transcript.toLowerCase() === "8x" || transcript.toLowerCase() === "sekiz x" || transcript.toLowerCase() === "8 x") {
        return { deger: "x", konum: 8 }
    } else if (transcript.toLowerCase() === "9x" || transcript.toLowerCase() === "dokuz x" || transcript.toLowerCase() === "9 x") {
        return { deger: "x", konum: 9 }
    } else if (transcript.toLowerCase() === "1o" || transcript.toLowerCase() === "1 o" || transcript.toLowerCase() === "bir o") {
        return { deger: "o", konum: 1 }
    } else if (transcript.toLowerCase() === "2o" || transcript.toLowerCase() === "2 o" || transcript.toLowerCase() === "iki o") {
        return { deger: "o", konum: 2 }
    } else if (transcript.toLowerCase() === "3o" || transcript.toLowerCase() === "3 o" || transcript.toLowerCase() === "üç o") {
        return { deger: "o", konum: 3 }
    } else if (transcript.toLowerCase() === "4o" || transcript.toLowerCase() === "4 o" || transcript.toLowerCase() === "dört o") {
        return { deger: "o", konum: 4 }
    } else if (transcript.toLowerCase() === "5o" || transcript.toLowerCase() === "5 o" || transcript.toLowerCase() === "beş o") {
        return { deger: "o", konum: 5 }
    } else if (transcript.toLowerCase() === "6o" || transcript.toLowerCase() === "6 o" || transcript.toLowerCase() === "altı o") {
        return { deger: "o", konum: 6 }
    } else if (transcript.toLowerCase() === "7o" || transcript.toLowerCase() === "7 o" || transcript.toLowerCase() === "yedi o") {
        return { deger: "o", konum: 7 }
    } else if (transcript.toLowerCase() === "8o" || transcript.toLowerCase() === "8 o" || transcript.toLowerCase() === "sekiz o") {
        return { deger: "o", konum: 8 }
    } else if (transcript.toLowerCase() === "9o" || transcript.toLowerCase() === "9 o" || transcript.toLowerCase() === "dokuz o") {
        return { deger: "o", konum: 9 }
    }
    else {
        return
    }
}

export function GameWinnerControl(Array, deger) {
    if (Array[0].deger === deger && Array[1].deger === deger && Array[2].deger === deger) {
        return deger 
    } else if (Array[3].deger === deger && Array[4].deger === deger && Array[5].deger === deger) {
        return deger 
    } else if (Array[6].deger === deger && Array[7].deger === deger && Array[8].deger === deger) {
        return deger 
    } else if (Array[0].deger === deger && Array[3].deger === deger && Array[6].deger === deger) {
        return deger 
    } else if (Array[1].deger === deger && Array[4].deger === deger && Array[7].deger === deger) {
        return deger 
    } else if (Array[2].deger === deger && Array[5].deger === deger && Array[8].deger === deger) {
        return deger 
    } else if (Array[0].deger === deger && Array[4].deger === deger && Array[8].deger === deger) {
        return deger 
    } else if (Array[2].deger === deger && Array[4].deger === deger && Array[6].deger === deger) {
        return deger 
    }else {
        const beraberMi = Array.filter(i => i.degistiMi === true)
        if(beraberMi.length === 9){
            return "Beraber"
        }
    }
}