import React, {useState} from 'react';
import '../assets/css/Button.css';


const Button = (props) => {

    const [selected,setSelected] = useState(false);
    const [color,setColor] = useState('yellow');

    const changeSelected = ()=>{
        if (selected){
            if (props.fnc(props.content,false)){
                setSelected(false);
                setColor('yellow');
            }
            
        }
        else {
            if (props.fnc(props.content,true)){
                setSelected(true);
                setColor('red');
            }

        }
    }


    return (
        <div className="button" style={{color: color}} onClick={changeSelected} onChange={changeSelected}>
           <h2>{props.content}</h2> 
        </div>
    )
}

export default Button
