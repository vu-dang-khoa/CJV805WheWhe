import React, {useState, useRef,} from 'react'
import Header from './Header.js';
import Button from './Button.js';
import BigButton from './BigButton.js';
import Total from './Total.js';
import SelectedNumbers from './SelectedNumbers.js';
import SelectedNumber from './SelectedNumber.js';
import MoneyButton from './MoneyButton.js';
import dice from '../assets/img/dice.png';
import button1 from '../assets/img/1.png';
import button5 from '../assets/img/5.png';
import button10 from '../assets/img/10.png';
import button20 from '../assets/img/20.png';
import '../assets/css/App.css';


const App = (props) => {
  
  const [selectedNumbers,setSelectedNumbers] = useState([]);
  const [displayString,setDisplayString] = useState("");
  const [total,setTotal] = useState(0);

  const totalHandler = (number)=>{
    if (selectedNumbers.length===5){
      let temp = +total + +number;
      setTotal(temp);
    }
    else{
      alert("exactly 5 numbers have to be selected for this to happen");
    }
  }

  const cashButtonClicked = () =>{
    alert("selected numbers:" + displayString +", amount of money assigned :" + total)
  }

  const clearButtonClicked = () =>{
    window.location.reload(false);
  }

  const randomButton = () =>{
    const oldArray = selectedNumbers;
    setSelectedNumbers([]);
    let tempArray=[];
    for (let i=0;i<5;i++){
      let temp = Math.floor(Math.random() * 20) + 1;
      if (tempArray.includes(temp)){
        i--;
      }else {
        tempArray.push(temp);
      }
    }
    alert(tempArray); 
    setSelectedNumbers(tempArray);
    alert (selectedNumbers);
    console.log(props.children)
  }

  const displayStringHandler = ()=>{
    let output = "";
    for (let i=0;i<selectedNumbers.length;i++){
      output = output  + selectedNumbers[i] + "," ;
    }
    setDisplayString(output);
  }
  

  const selectedNumberHandler = (number,boolean) => {
    let temp= selectedNumbers;
    if (boolean && temp.length>=5){
      alert("can only select 5 numbers");
      return false;
    }
    else {
      if (boolean && !temp.includes(number)){
        temp.push(number);
        displayStringHandler();
        setSelectedNumbers(temp);
        return true;
      }
      else {
        if (!boolean && temp.includes(number)){
          for (let i=0;i<temp.length;i++){
            if (temp[i]===number){
              temp.splice(i,1);
              displayStringHandler();
              setSelectedNumbers(temp);
              return true;
            }
          }
        }
        
      }
    }
    
    
    return false;
  }
  return (
    <div className="mainDiv">
      <Header/>
      <div>
        <div className="inline-block" id="money-button-div">
          <table>
            <tr>
              <td><img src={dice} alt="dices"></img></td>
            </tr>
            <tr>
            <td><MoneyButton imgsrc={button1} value='1' fnc={totalHandler}/></td>
            <td><MoneyButton imgsrc={button5} value='5' fnc={totalHandler}/></td>
            </tr>
            <tr>
            <td><MoneyButton imgsrc={button10} value='10' fnc={totalHandler}/></td>
            <td><MoneyButton imgsrc={button20} value='20' fnc={totalHandler}/></td>
            </tr>
            <tr>
              <td colspan="2"><BigButton content='Random' fnc={randomButton}/></td>
              </tr>
          </table>
        </div>
        <div className="inline-block" id="number-button-div">
          <table cellspacing="0" cellpadding="0">
            <tr>
              <td><Button key = '1' content='1' fnc={selectedNumberHandler}/></td>
              <td><Button key = '2' content='2' fnc={selectedNumberHandler}/></td>
              <td><Button key = '3' content='3' fnc={selectedNumberHandler}/></td>
              <td><Button key = '4' content='4' fnc={selectedNumberHandler}/></td>
              <td><Button key = '5' content='5' fnc={selectedNumberHandler}/></td>
              <td><Button key = '6' content='6' fnc={selectedNumberHandler}/></td>
            </tr>
            <tr>
              <td><Button key = '7' content='7' fnc={selectedNumberHandler}/></td>
              <td><Button key = '8' content='8' fnc={selectedNumberHandler}/></td>
              <td><Button key = '9' content='9' fnc={selectedNumberHandler}/></td>
              <td><Button key = '10' content='10' fnc={selectedNumberHandler}/></td>
              <td><Button key = '11' content='11' fnc={selectedNumberHandler}/></td>
              <td><Button key = '12' content='12' fnc={selectedNumberHandler}/></td>
            </tr>
            <tr>
              <td><Button key = '13' content='13' fnc={selectedNumberHandler}/></td>
              <td><Button key = '14' content='14' fnc={selectedNumberHandler}/></td>
              <td><Button key = '15' content='15' fnc={selectedNumberHandler}/></td>
              <td><Button key = '16' content='16' fnc={selectedNumberHandler}/></td>
              <td><Button key = '17' content='17' fnc={selectedNumberHandler}/></td>
              <td><Button key = '18' content='18' fnc={selectedNumberHandler}/></td>
            </tr>
            <tr>
              <td><Button key = '19' content='19' fnc={selectedNumberHandler}/></td>
              <td><Button key = '20' content='20' fnc={selectedNumberHandler}/></td>
              <td colspan="2"><BigButton content='Cash' fnc={cashButtonClicked}/></td>
              <td colspan="2"><BigButton content='Clear' fnc={clearButtonClicked}/></td>
            </tr>
            
          </table>
          
        </div>
        <div className="inline-block" id="selected-numbers-div" >
          <div className="selected-number-wrapper">
            <SelectedNumbers selectedNumbers={selectedNumbers} />
            
          </div>
          <Total total={total}/>
        </div>
      </div>
    </div>
  )
}

export default App
