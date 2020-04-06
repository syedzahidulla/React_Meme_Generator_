import React from 'react'
import '../style.css'

function Joke(props){
    console.log(props)
return(
    <div className="todo-item">   
        <h3 style={{display:props.attributes.question ? "block" : "none"}}>Question: {props.attributes.question}</h3>
        <h3 style={{color:!props.attributes.question && "rgb(130, 155, 155)"}}>Answer: {props.attributes.answer}</h3>
        <h4>{props.attributes.id.toLocaleString("en-US",{style:"currency",currency:"USD"})}</h4>
        <hr></hr>
    </div>
)
}
export default Joke

