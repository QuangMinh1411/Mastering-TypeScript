import React,{useRef} from 'react';
import {v4 as getId} from "uuid";
import Item from '../models/item';
interface ShoppingListFormProps {
    onAddItem:(item:Item)=>void;
}
function ShoppingListForm({onAddItem}:ShoppingListFormProps):JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        const newProduct = {
            id:getId(),
            product:productInputRef.current!.value,
            quantity:quantityInputRef.current==null?0:parseInt(quantityInputRef.current.value)
        }
        onAddItem(newProduct);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value="1";
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter product name' ref={productInputRef} />
        <input type="number" min={0} ref={quantityInputRef} />
        <button type='submit'>Add Item</button>
    </form>
  )
}

export default ShoppingListForm