import React from 'react'

const Box = (props) => {
    return (
        <div>
            <div className="square-box" style={{backgroundColor:`${props.color}`}}>
                {props.text}
            </div>
        </div>
    );
};
export default Box;