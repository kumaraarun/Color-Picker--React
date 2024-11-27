
import { useState } from 'react'
import './App.css'

function App() {
  const[backgroundColor,setBackgroundColor]=useState('#fffff');
  const colors=['#ff0000','#dae44f','#7f4fe4','#e44fd8','#4fe464','#CCCCFF','#800080	'];
 const handleColorChange=(color)=>{
  setBackgroundColor(color)
 }

  return (
   <div  className='App' style={{backgroundColor:backgroundColor}}>
   <h1>Color Picker</h1>
   <div className='color-palatee' >
    {colors.map((color,index)=>(
      <div className='color-box' key={index}
      style={{backgroundColor:color}} 
      onClick={()=>handleColorChange(color)}></div>
    ))}
       </div>

   
   <div className='custom-color'>
    <input type='color'
    value={backgroundColor}
    onChange={(e)=>{handleColorChange(e.target.value)}}></input>
    </div>
    </div>
  )
}

export default App
