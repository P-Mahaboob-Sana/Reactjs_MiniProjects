import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [color,setColor]=useState("pink");
 
  return (
    <>
   
<div style={{backgroundColor:color }}>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

<Card name="Sana" about="hello everyone" btn="contact me" />
  <button onClick={()=>setColor("red")} className='my-3'style={{backgroundColor:"red", height:45,width:90,borderRadius:18, marginRight:20}} >red</button>
  <button onClick={()=>setColor("blue")} className='my-3' style={{backgroundColor:"blue",height:45,width:90,borderRadius:18, marginRight:20}}>blue</button>
  <button onClick={()=>setColor("green")}className='my-3'style={{backgroundColor:"green",height:45,width:90,borderRadius:18, marginRight:20}}>green</button>
</div>
    </>
  )
}

export default App
