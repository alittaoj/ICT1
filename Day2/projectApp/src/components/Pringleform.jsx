import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Pringleform = () => {

    let [count, setCount] = useState(0);

    function add() {
        setCount(count+1)
    }
  return (
    <div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Product ID" variant="outlined" /></div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Pringle Flavour" variant="outlined" /></div>    
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Product Price" variant="outlined" /></div>
        <div><br></br></div>
        <Button variant="contained" onClick={add} style={{backgroundColor:"black"}}>ADD</Button>
        <div><br></br></div>
        <small>The button is clicked {count}</small>
                     
    </div>
  )
}

export default Pringleform
