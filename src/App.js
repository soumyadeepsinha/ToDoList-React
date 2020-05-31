import React, { useState } from 'react'
import './App.css'
import Todolist from './Todolist'

function App() {
  const [inputlist, setinputlist] = useState('')

  // initializing an empty array to storing data
  const [items, setitems] = useState([''])

  const itemEvents = (event) => {
    setinputlist(event.target.value)
  }

  // new array
  const listItems = () => {
    setitems((olditem) => {
      return [...olditem, inputlist]
    })
    setinputlist('')
  }

  // delete item
  const deleteitem = (id) => {
    console.log("deleted");
    setitems((olditem) => {
      return (olditem.filter((arrayEl, index) => {
        return (index !== id)
      }))
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" value={inputlist} placeholder="Add an Item" onChange={itemEvents} />
        <button onClick={listItems}> + </button>
        <ol>
          {items.map((itemvalue, index) => {
            return (<Todolist
              key={index}
              id={index}
              text={itemvalue}
              onSelect={deleteitem}
            />)
          })}
        </ol>
      </div>
    </div>
  );
}

export default App
