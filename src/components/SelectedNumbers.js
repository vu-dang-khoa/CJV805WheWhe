import React,{useState} from 'react';
import SelectedNumber from './SelectedNumber';

const SelectedNumbers = (props) => {
    const [selectedNumbers,setSelectedNumbers] = useState([]);

    return (
        <div>
            <h4>Numbers Selected :</h4>
            {props.selectedNumbers.map((number) =>(
                            <p>Mark:{number}</p>
                            ))}
            
        
        
        </div>
    )


   
}

export default SelectedNumbers
