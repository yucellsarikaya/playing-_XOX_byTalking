import React from 'react'
const Title = (props) => {
    return (
        <div className="header">
            <div className={props.header.bool ? 'title selected' : 'title'}>
                {props.winner.bool
                    ?
                    (<h3 className='TiltleH3'>{props.header.text}</h3>)
                    :
                    (<h3 className='TiltleH3'>{props.winner.text}</h3>)
                }
            </div>
        </div>
    );
}
export default Title;