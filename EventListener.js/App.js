import React from "react";


export default function App(){
    function handleOnMouseOver(){
        console.log("mouse over")
    }
    function handleclick(){
        console.log("i was clicked")
    }
    return(
        <div className = "container" >
        <img src = "https://picsum.photos/640/360" 
        onMouseOver={handleOnMouseOver}
        />
        <button onClick={handleclick}> Click me</button>
        </div>
    )
}