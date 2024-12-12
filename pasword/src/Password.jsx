import React, { useState } from 'react'

const Password = ({title}) => {
  const [length, setlenght] = useState(8)
  const [inculdeupper, setinculdeupper] = useState(true)
  const [inculdelower, setinculdelower] = useState(true)
  const [inculdenum, setinculdenum] = useState(true)
  const [inculdesymbol, setinculdesymbol] = useState(true)
  const [password, setpassword] = useState("")

  const genpassword =()=>{
    let charset= ""
    if(inculdeupper) charset +="QWERTYUIOPLKJHGFDSAZXCVBNM"
    if(inculdelower) charset +="qwertyuioplkjhgfdsazxcvbnm"
    if(inculdenum) charset +="1234567890"
    if(inculdesymbol) charset +="!@#$%^&*()_+=-/?<>,.`~[]{}"

    let generatepassword =""
    for(let i = 0; i < length; i++){
      const randompass= Math.floor(Math.random()*charset.length);
      generatepassword += charset[randompass]
    }
    setpassword(generatepassword);
  };

  const clipboard =()=>{
    navigator.clipboard.writeText(password)
    alert("Copied")
  }
  return (

    <>
    <div className='header'>{title}</div>
    <div className='lenght-box'>
      <label htmlFor="num">Password Lenght:</label>
      <input type="number" id='num' value={length} onChange={(e)=>{setlenght(parseInt(e.target.value))}}/>
    </div>
    <div className='checkbox-group'>
        <input type="checkbox" id='Symbol'checked={inculdeupper} onChange={(e)=> setinculdeupper(e.target.checked)}/>
        <label htmlFor="Symbol">Inculde UpperCase</label>
    </div>

    <div className='checkbox-group'>
        <input type="checkbox" id='Symbol' checked={inculdelower} onChange={(e)=> setinculdelower(e.target.checked)}/>
        <label htmlFor="Symbol">Inculde LowerCase</label>
    </div>

    <div className='checkbox-group'>
        <input type="checkbox" id='Symbol'checked={inculdenum} onChange={(e)=> setinculdenum(e.target.checked)}/>
        <label htmlFor="Symbol">Number</label>
    </div>

    <div className='checkbox-group'>
        <input type="checkbox" id='Symbol'checked={inculdesymbol} onChange={(e)=> setinculdesymbol(e.target.checked)}/>
        <label htmlFor="Symbol">Symbols</label>
    </div>

    <button className='Generate-btn' onClick={genpassword}>Generate Password</button>

    <div className='Generated-password'>
      <input type="text" readOnly value={password}/>
      <button className='copy-btn' onClick={clipboard}>Copy</button>
    </div>
    </>
  )
}

export default Password