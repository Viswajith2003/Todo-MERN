import React, { useState } from "react";

export default function App() {

  const [text,setText]=useState("");
  const [addItem,setAddItem]=useState([])
  const handleText=(e)=>{
    console.log(e.target.value);
    setText(e.target.value);
  }

  const AddItem=()=>{
      
  }


  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input type="text" value={text} onChange={handleText} />
        <button onClick={AddItem}>ADD</button>
      </div>
      <div>
        <ul>
          <li>{addItem}</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </div>
  );
}
