import {useSelector, useDispatch} from 'react-redux';
import {decrement,increment, incrementByAmount } from './ducks/counterSlice';
import React, {useState} from 'react';

 function Counter() {
    const count= useSelector((state)=> state.value)
    const dispatch = useDispatch()
    const [input,setInput] = useState(0)

    const byAmountSubmit=(e) =>{
      e.preventDefault()
      dispatch(incrementByAmount(Number(input)))  
    }
    return (
       <div>
        <h1>{count}</h1>
        <button aria-label="Increment value" onClick={()=>dispatchEvent(increment())}>Increment</button>
        <button aria-label="Decrement value" onClick={()=>dispatchEvent(decrement())}>Decrement</button>
       <form onSubmit = {(e)=> byAmountSubmit(e)}>
            <input type="number" onChange={(e) => setInput(e.target.value)}/>
            <button type ="submit">Submit</button>
       </form>
       </div>
    )
}  

 export default Counter