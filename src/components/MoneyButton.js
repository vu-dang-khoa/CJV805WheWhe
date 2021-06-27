import React from 'react'

const MoneyButton = (props) => {
    
    const increaseTotal = ()=>{
        props.fnc(props.value);
    }
    return (
        <div>
            <img src={props.imgsrc} alt={props.value} onClick={increaseTotal}></img>
        </div>
    )
}

export default MoneyButton
