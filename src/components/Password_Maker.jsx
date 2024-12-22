import React, { useState } from 'react'
import './pass.css'
import toast from 'react-hot-toast'

const Password_Maker = () => {
  const [length,setLength] =useState("")
let Pass_char='abcdefghijklmnopqrstuvwxyz'
const [password_1,UpdatedPassword]=useState("");
let copy =document.getElementById('copy')
// let SpecailCheck=document.querySelector('#add_specialChars')
const [addSpecialChars, setAddSpecialChars] = useState(false);
const [addNumber,updateNumbers]=useState(false)
const [addUppercase,updateUppercase]=useState(false)


// if(SpecailCheck.checked){
//   ()=>{
//     Pass_char+='!£$%^&*@~#?/.,;:{}~"';
//   }
// }
const Generate=()=>{
  // e.preventDefault();
  if(length===''){
    toast.error('Please enter the length of password')
  }
  if(length!==''){
    toast.success('Password Generated')
  }
  let password='';
  if (addSpecialChars) {
    Pass_char += '!£$%^&*@~#?/.,;:{}~"';
  }
  if (addNumber) {
    Pass_char+="0123456789";
  }
  if (addUppercase) {
    Pass_char+=Pass_char.toUpperCase;
  }
  for(let i=0;i<length;i++){
    password+=Pass_char.charAt(Math.floor(Math.random()*Pass_char.length))
    
  }
  UpdatedPassword(password);
  console.log(password_1)
}
  return (
    <div id='body_2'>

    <div id='box'>
      <h3 id='heading_1'>PassWord Generator</h3>
      <form action="" id='passForm'>
        <label htmlFor="Length" className='labels'></label>
        <input id='text' type="text" onChange={(e)=>setLength(e.target.value)} list='mysuggestion' placeholder='Enter Length in Numbers' />
        <datalist id='mysuggestion'>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </datalist>
<div className="capitals">

        <label style={{color:"white"}} className='labels' htmlFor="add_capitals">Do you want to Add Capital Letters </label>
        <input type="checkbox" name="add_capitals" id="add_capitals" checked={addUppercase} onChange={()=>updateUppercase(!addUppercase)} />
        </div>
        <div className="numbers">

        <label style={{color:"white"}} className='labels' htmlFor="add_numbers">Do you want to Add Numbers </label>
        <input type="checkbox" name="add_numbers" id="add_numbers" checked={addNumber} onChange={()=>updateNumbers(!addNumber)} />
        </div>

        <div className="specials">

        <label style={{color:"white"}} className='labels' htmlFor="add_specialChars">Do you want to Add Special Characters </label>
        <input type="checkbox" name="add_specialChars" id="add_specialChars" checked={addSpecialChars}
      onChange={() => setAddSpecialChars(!addSpecialChars)} />
        </div>
        
      </form>
      <button id='Generator' onClick={Generate}>Generate Password</button>
      <p id='password'style={{color:"white"}}>Password is:  {password_1}</p> 
      <button id='copy' onClick={()=>{
        if(password_1==""){
          toast.error('Please Generate Password First')
        }else{

          navigator.clipboard.writeText(password_1)
          toast.success('Password Copied Succesfully')
        }
      }}>Copy</button>
    </div>
        </div>
  )
}

export default Password_Maker
