import React from 'react'
import '../style.css'

class Todo extends React.Component {
    
    render(props) {
        const completedStyle={
            fontStyle:"italic",
            color:"#cdcdcd",
            textDecoration:"line-through"
        }
     return(
         <div className="todo-item">
            <input type="checkbox" 
            checked={this.props.attributes.completed} 
            onChange={()=>this.props.handleChange(this.props.attributes.id)}/>
            <p style={this.props.attributes.completed?completedStyle:null}>{this.props.attributes.text}</p>
         </div>      
     );
    }
    
   }
   export default Todo

// function Todo(props){
//     console.log(props)
// return(
//     <div className="todo-item">
//     <input type="checkbox" checked={props.attributes.completed}/>
// <p>{props.attributes.text}</p>
//     </div>  
// )
// }
// export default Todo
