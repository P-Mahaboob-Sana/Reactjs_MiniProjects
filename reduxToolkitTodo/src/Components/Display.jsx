import React, { useState } from "react"
import './CSS/Display.css'

function Display(){
    
    return(
        <>
        <div className="container">
        <input type="text" /> <br />
        <button>AC</button>
        <button>b</button>
        <button>+/-</button>
        <button>/</button>
        <br />
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <br />
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <br />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <br />
        <button>%</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        </div>
        </>
    )
}

export default Display