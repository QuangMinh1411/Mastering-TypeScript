import React, { useState } from 'react';
import './App.css';
// import {v4 as getId} from "uuid";
// import Greeter from './components/Greeter';
import Item from './models/item';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
function App() {

  const [items,setItems] = useState<Item[]>([])
  const AddItem = (product:Item)=>{
    setItems([...items,product])
    console.log(product);
  }
//   const items = [
//     {
//         id:1,
//         product:"Item 1",
//         quantity:2
//     },
//     {
//         id:2,
//         product:"Item 2",
//         quantity:3
//     }
// ]
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem = {AddItem} />
    </div>
  );
}

export default App;
