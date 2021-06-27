import React from 'react';
import '../assets/css/BigButton.css';


const BigButton = (props) => {

    const divClicked = ()=>{
        console.log(props.content)
        props.fnc();
    }
    return (
        <div className="big-button" onClick={divClicked}>
           <h2>{props.content}</h2> 
        </div>
    )
}

export default BigButton
