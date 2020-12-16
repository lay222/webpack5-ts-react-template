import React, {useState} from 'react'
import './indes.css'
import imgURL from '../public/img/logo.png'


export default ()=>{
    const [aa, setAa] = useState<string>('aaaa');
    console.log(aa)
    return(
        <>
        <div style={{color:"red"}}>Hello Word</div>
        <img src={imgURL} alt="111"/>
        </>
    )
}
