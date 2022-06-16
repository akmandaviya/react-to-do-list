import React, {useState} from "react";
import './App.css'

function App () {

const [newItem, setNewItem] = useState("")
const [items, setItems] = useState([])


 function  addItem() {
       // console.log(newItem)

       if(!newItem) {
        alert ("Enter an item")
        return
       }

       const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
       }
         setItems(oldList => [...oldList, item])
         setNewItem("")
         //console.log(items)
        }

function deleteItems (id) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
}

    return (
        <div className="App">
            <h1>To-do List</h1>
            <input type="text" placeholder="Add an item"
            value={newItem}
            onChange = {e => setNewItem(e.target.value)}
            />
            <button onClick={() => addItem()}>Add</button>

            <ul>
                {items.map(item => {
                    return (
                        <li key = {item.id}>{item.value} 
                        <button onClick={() => deleteItems(item.id)}>Delete</button>
                         </li>
                      
                    )
                })}
            </ul>
        </div>
    )
}
export default App