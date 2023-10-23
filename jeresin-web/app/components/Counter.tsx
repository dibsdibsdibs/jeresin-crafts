import {useState} from 'react'

export default function Counter(){
    const [count, setCounter] = useState(0)

    const increase = () => {
        setCounter(count+1)
    }

    const decrease = () => {
        if(count != 0){
            setCounter(count-1)
        }
    }
    
    return(
        <div className='flex flex-row justify-around w-24 font-semibold outline rounded-md'>
            <button onClick={increase}>+</button>
            <p>{count}</p>
            <button onClick={decrease}>-</button>
        </div>
    )
}