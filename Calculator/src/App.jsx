import { use } from 'react';
import styles from './App.module.css';
import Display from './components/Display.jsx';
import ButtonContainer from './components/buttoncontainer.jsx';
import {useState} from 'react';

function App() {
  let [calval , setcalval] = useState(" ");
  const onButtonClick = (buttonText)=>{
    if(buttonText === 'C'){
      setcalval(" ");
    }else if(buttonText === '='){
      const result = eval(calval);
      setcalval(result.toString());
    }else {
      const newValue = calval + buttonText;
      setcalval(newValue);
    }
  }

  return (
    <center>
    <div className={styles.Calculator}>
      <Display value={calval} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
    </center>

  );
}

export default App;
