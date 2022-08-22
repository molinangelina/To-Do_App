import React, { Component } from 'react'
import './App.css';
// import Task from './Task';

export default class Todo extends Component {
    constructor() {
        super();
        // initial state
        this.state = {
            tasks: [],
            done: false,
            text: ''
        }
    }

    showTasks = () => { // loop/map over through every dict that exists, a is looking at that entire dict, returning return() for every a that exists, 
        return this.state.tasks.map((a, i) => //looping through both the item(task) and the index at the same time
            (
            // <Task key={i} taskInfo={a} />
            <div key={i}>
                <div className="list" style={{ width: "18rem" }}>
                    <p>{a.text}</p>
                </div>
            </div>
            )
        ) 
    }
 
    getTask = async (input) => {
        this.setState({ tasks: input.tasks }) // triggers rerender, updates the state
    }

    // accepting event here
    handleSubmit = e => {
        e.preventDefault(); //stops on form submission, don't refresh the page
        const input = e.target.text.value; // gets input from 'name='text'' //could've done 'getDocumentById'
        this.getTask(input)
    }

    render() {
        return (
            <div className="todoBox">
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name='text'/>
                    <button onClick={()=>{this.setState({done: true})}} type='submit'>Add</button>
                </form>
                {this.showTasks()}
            </div>
        ) 
    }      
}