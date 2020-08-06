import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuidv4() });
        this.setState({ task: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;