import React from "react";

export default function Meme(){
    return(
    <main>
        <form className="form">
            <input className="form--input" type= "text" placeholder="Top Text" />
            <input className="form--input" type= "text" placeholder="Botton Text" />
            <button className="form--button">Get new meme image</button>


        </form>
    </main>
    )
}