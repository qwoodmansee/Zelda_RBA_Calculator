import React from "react"
import ReactDOM from "react-dom"
import InventoryItem from './components/inventoryItem/inventoryItem'
import Inventory from './components/inventory/inventory'
import './index.css'
const Index = () => {
  return  (
    <div>
      <h1>RBA Calculator</h1>
      <br/>
      <h2>In progress components:</h2>
      <h3>InventoryItem:</h3>
      <InventoryItem itemName="Bombchu" itemValue={5}/>
      <br/>
      <h3>Inventory:</h3> 
      <Inventory/>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"))