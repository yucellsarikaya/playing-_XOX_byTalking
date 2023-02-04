import React, { useState, useEffect } from 'react'
import Box from './Box';
import { Location } from '../Store/Location';

function Board(props) {
    const [box, setBox] = useState([
        { deger: "1", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "2", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "3", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "4", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "5", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "6", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "7", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "8", degistiMi: false, backgroundColor:"lightgray" },
        { deger: "9", degistiMi: false, backgroundColor:"lightgray" }])
    useEffect(() => {
        const a = Location(props.transcript)
        if (a && box[a.konum - 1].degistiMi === false) {
            box[a.konum - 1].deger = a.deger
            box[a.konum - 1].degistiMi = true
            box[a.konum - 1].backgroundColor = a.deger === "x" ? "red": "yellowgreen"
        }
    }, [props])

    return (
        <div>
            <div className="square-box-grid">
                <Box text={box[0].deger} color={box[0].backgroundColor}/>
                <Box text={box[1].deger} color={box[1].backgroundColor}/>
                <Box text={box[2].deger} color={box[2].backgroundColor}/>
                <Box text={box[3].deger} color={box[3].backgroundColor}/>
                <Box text={box[4].deger} color={box[4].backgroundColor}/>
                <Box text={box[5].deger} color={box[5].backgroundColor}/>
                <Box text={box[6].deger} color={box[6].backgroundColor}/>
                <Box text={box[7].deger} color={box[7].backgroundColor}/>
                <Box text={box[8].deger} color={box[8].backgroundColor}/>
            </div>
        </div>
    );
};
export default Board;