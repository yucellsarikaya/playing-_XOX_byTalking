export function Location(transcript) {
    console.log(transcript.toLowerCase())
    if (transcript.toLowerCase() === "1x" || transcript.toLowerCase() === "bir x") {
        return { deger: "x", konum: 1 }
    } else if (transcript.toLowerCase() === "2x" || transcript.toLowerCase() === "iki x") {
        return { deger: "x", konum: 2 }
    } else if (transcript.toLowerCase() === "3x" || transcript.toLowerCase() === "iki x") {
        return { deger: "x", konum: 3 }
    } else if (transcript.toLowerCase() === "4x" || transcript.toLowerCase() === "dört x") {
        return { deger: "x", konum: 4 }
    } else if (transcript.toLowerCase() === "5x" || transcript.toLowerCase() === "beş x") {
        return { deger: "x", konum: 5 }
    } else if (transcript.toLowerCase() === "6x" || transcript.toLowerCase() === "altı x") {
        return { deger: "x", konum: 6 }
    } else if (transcript.toLowerCase() === "7x" || transcript.toLowerCase() === "yedi x") {
        return { deger: "x", konum: 7 }
    } else if (transcript.toLowerCase() === "8x" || transcript.toLowerCase() === "sekiz x") {
        return { deger: "x", konum: 8 }
    } else if (transcript.toLowerCase() === "9x" || transcript.toLowerCase() === "dokuz x") {
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