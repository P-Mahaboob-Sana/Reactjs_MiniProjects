import {useState} from "react";

function App() {
  
  let [count,setCount] =useState(0);
  const AddCount= () =>{
    setCount(count+1);
    console.log(count);  
  }
  const reduceCount= () =>{
   let newCount=count
    if(newCount<=0){
      setCount(0);
    }
    else{
      setCount(count-1)
    }
    console.log(count);  
  }

  return (
    <>
  <h2>My number counter</h2>
  <h3>count = {count}</h3>
  <button onClick={AddCount}> Add count</button> <br />
  <button onClick={reduceCount}> reduce count</button>
  </>
  );
}

export default App
