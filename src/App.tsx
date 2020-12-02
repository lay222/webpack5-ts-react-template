import React, {useState} from 'react'
import './indes.css'


export default ()=>{
    const [aa, setAa] = useState<string>('aaaa');
    console.log(aa)
    return(
        <>
        <div style={{color:"red"}}>欢迎来到</div>
        <img src="../public/img/logo.png" alt="111"/>
        </>
    )
}
