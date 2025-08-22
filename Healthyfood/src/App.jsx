import FoodItems from './Components/Fooditems'
import './App.css'
import ErrorMsg from './Components/errormsg'
import Container from './Components/Container'
import Foodinput from './Components/Foodinput'
import { useState, useState as usestate } from 'react';

function App() {

  let textStatearr = usestate();
  let texttoShow = textStatearr[0];
  let setTextState = textStatearr[1];

  let [foodItems,setFoodItems] = useState([
    // "salad","green vegetables" , "fruit salad"
  ]);

  const onkeydown = (event) => {
    if(event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      // console.log(newFoodItem);
    }
  };

  return (
    <Container>
      <h1 className='Foodname'>Healthyfood</h1>

      <Foodinput handleKeyDown={onkeydown}></Foodinput>
      <p>{texttoShow}</p>
            <ErrorMsg items = {foodItems}></ErrorMsg>
      <FoodItems items = {foodItems}></FoodItems>
    </Container>
  )
}

export default App
