import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


class TodoList extends React.Component{
    state = {
        todos: []
    };

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = (id) =>{
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    //suppose to update
                    return{
                        ...todo,
                        complete: !todo.complete,
                    };
                }
                else{
                    return todo;
                }

                
                
            })
        });
    };

    handleDelete=(id)=>{
        this.setState({
            todos: this.state.todos.filter(
                todo => todo.id !== id
            )
        });
    };

    render(){
    return(<div>
        <div>
        <TodoForm onSubmit={this.addTodo}/>
         {this.state.todos.map(todo=>(
             <Todo key={todo.id} 
             toggleComplete={()=> this.toggleComplete(todo.id)}  
             todo={todo}
             onDelete={()=>this.handleDelete(todo.id)}/>

         ))}
         </div>

        <div>
            todo left = {this.state.todos.filter(todo=>!todo.complete).length}
        </div>
     </div>
    )   
    }
}

export default TodoList;