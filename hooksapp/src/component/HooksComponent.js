import React,{useState,useEffect} from 'react';
import DisplayComponent from './DisplayComponent'

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [city,setCity] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <div>
            <center>
                <h2>{title}</h2>
                <h2>{count}</h2>
                <button onClick={() =>{setCount(count+1)}}>Counter</button>
                <h2>{count1}</h2>
                <button onClick={() =>{setCount1(count1+1)}}>Counter</button>
                <DisplayComponent mycity={city}/>
            </center>
        </div>
    )
}

export default HooksComponent;