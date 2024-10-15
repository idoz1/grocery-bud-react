import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { toast, ToastContainer } from "react-toastify";

const getLoacalStorage = () => {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : '[]';
}

const setLoacalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const App = () => {
  const [items, setItems] = useState(getLoacalStorage())

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems);
    setLoacalStorage(newItems)
    toast.success('item added to the list');
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLoacalStorage(newItems)
    toast.success('item removed')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId){
        const newItem = {...item, completed: !item.completed}
        return newItem;
      }else {
        return item;
      }
    });
    setItems(newItems);
    setLoacalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
};

export default App;
