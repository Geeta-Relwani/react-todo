import React from 'react';
import  './index.css';

 export default props => <div style={
    {
       justifyContent: "center",
       display: "flex",

       
    }
 }>
    <div className="todo" style={{
       textDecoration: props.todo.complete? "line-through" : ""}
    } onClick={props.toggleComplete}>

    {props.todo.text}
    
    </div>
    <span>
       <button onClick={props.onDelete}>X</button>
    </span>

 </div>
    
