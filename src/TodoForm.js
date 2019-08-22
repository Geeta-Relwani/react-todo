import React from 'react';
import shortid from 'shortid';
import  './index.css';

class TodoForm extends React.Component{
    state = {
    text: ""
    };

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmmit=(event) =>{
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ''
        });

    };



    render(){

        
        return(
            <div>
                <form onSubmit={this.handleSubmmit}>
                <input 
                    className = 'inputTab'
                    name= 'text'
                    value={this.state.text} 
                    onChange ={this.handleChange}
                    placeholder='Add new todo' >
                </input>
                <button onClick={this.handleSubmmit}>add todo</button>

                </form>
                

            </div>
        )
    }
}

export default TodoForm;