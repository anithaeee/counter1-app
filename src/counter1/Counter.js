import React, { useState } from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.css';
import '../counter1/counter.css';
 const Counter = () => {
    const [count , setcount] = useState(0);
    const[display, setdisplay]= useState('');
    const switchvalue = (value)=> {
        switch(value){
            case 'increment':
                setdisplay("increased");
                break;
            case 'decrease':
                setdisplay("decreased");
                break;
                    
            default:
                setdisplay("")
        
    }
    }
  return (
    <div className='container-fluid' >
        <div style={{marginLeft:'13rem'}}> 
        <div className='row' >
       <div className='card' style={{height:'10rem',alignItems:'center', width:'10rem'}}>
        <div className='card-body'>
            <h1 className='card-text'>{count}
            <br />
            {display}
            </h1>
        </div>
       </div>
       </div>
       <div style={{padding:'2rem'}}></div>
       <div className='row'>
       <button label='button' onClick={()=>{setcount(count+1);switchvalue('increment')}} style={{background:'blue',borderRadius:'4px', width:'10rem', marginRight:'5px'}}>Increase</button>
       <button label='button' onClick={()=>{setcount(count-1);switchvalue('decrease')}} style={{background:'red',borderRadius:'4px', width:'10rem', marginRight:'5px'}}>Decrease</button>
       <button label='button' onClick={()=>setcount(0)} style={{background:'green',borderRadius:'4px', width:'10rem'}}>Reset</button>
       </div>
       </div>
    </div>
  )
}
export default Counter;