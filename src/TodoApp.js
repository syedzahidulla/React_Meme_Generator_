import React from 'react';

import Todo from './todocomp/Todo'
import './style.css'
import todoData from './todocomp/todoData'
import Conditional from './Conditionalcomp/Conditional'
class App extends React.Component{
   constructor(){
      super()
      this.state={
          Data:todoData
         //isLoggedin:true        
      }
       this.handleClick=this.handleClick.bind(this)
      //this.Changestate=this.Changestate.bind(this)
   }
   handleClick(id) {
      // this.setState((prevState)=>{
      //    // return{
      //    //    count : prevState.count + 1
      //    // }
         
      // })
      this.setState(prevState=>{
         const updatedData=prevState.Data.map(item=>{
            if(item.id=== id){
               item.completed=!item.completed
               console.log("changed",item.id)
            }
            return item
         })
         return{
            Data:updatedData
         }
      })
   }
   // componentDidMount(){
   //    setTimeout(()=>{
   //       this.setState({
   //          isLoggedin:false
   //       })
   //    },1500)
   // }
   // Changestate(){
   //    this.setState((prevstate)=>{
   //       return{
   //          isLoggedin:!prevstate.isLoggedin
   //       }
   //    })
   // }
   render(){
      const todoarray=this.state.Data.map(item => <Todo key={item.id} attributes={item} handleChange={this.handleClick}/>)
      return(
         <div className="todo-list">
         {todoarray}
         {/* <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click me</button> */}
            {/* <Conditional isLoading={this.state.isLoading}/> */}
         {/* <h2>{this.state.isLoggedin?"Logged IN":"Logged Out"}</h2>
         <button onClick={this.Changestate}>Press Me To {this.state.isLoggedin?"Log Out":"Log In"}</button> */}
         </div>
      )
   }
}
export default App


// class App extends React.Component {
//  render() {
//   return(
//    <div className="todo-list">
//       <Todo placeholder={{name:"WakingUp"}}/>
//       <Todo placeholder={{name:"Breakfast"}}/>
//       <Todo placeholder={{name:"Lunch"}}/>
//       <Todo placeholder={{name:"Dinner"}}/>
//       <Todo placeholder={{name:"Sleep"}}/>
//    </div>
//   );
//  }
 
// }
// export default App
