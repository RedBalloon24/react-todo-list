import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id)
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <ul>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.task}</li>
                </ul>
            )
        }
        return result;
    }
}

export default Todo;