import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    let [count , setCount]  = useState(0)

    function countHandlerPlus(){
        setCount(count + 1)
    }
    function countHandlerMinus(){
        if(count > 0){
            setCount(count - 1)
        }            
    }
    function reset(){
        setCount(0);
    }

  return (
    <div className='main'>
        <h1 className="heading">increment and decrement counter</h1>
        <div className="container">
                <div>
                    <button className="btn" onClick={countHandlerMinus}>-</button>
                </div>
                <div className='h3'>
                <h3>{count}</h3>
                </div>
                <div>
                    <button className="btn" onClick={countHandlerPlus}>+</button>
                </div>
        </div>
       <div className="rbtn"> 
            <button className='reset' onClick={reset}>Reset</button>
       </div>
    </div>
  )
}

export default Counter