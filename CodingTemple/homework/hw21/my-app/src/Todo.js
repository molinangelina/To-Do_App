import React, { Component } from 'react'
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// library.add(faTrash);

export default class Todo extends Component {
    constructor() {
        super();
        // initial state
        this.state = {
            tasks: []
        }
    };

    // option1: create a copy, mutate a copy, then use setter function // accepting event here
    // addToList = e => {
    //     e.preventDefault(); //stops on form submission, don't refresh the page
    //     const taskToDo = e.target.task.value; // gets input from 'name='task'' //could've done 'getDocumentById'
    //     const copy = this.state.tasks.slice() // copying empty list
    //     //cannot push to the state
    //     // this.state.tasks.push(taskToDo), cannot do this this bc u cannot push to the state, states are immutable
    //     copy.push(taskToDo) //appending/push to that copied list
    //     this.setState({tasks: copy}) // didn't change state, tasks= [] is being updated, mutating copy by using setter function
    // };

    // option 2: spread operator
    // addToList = e => {
    //     e.preventDefault();
    //     const taskToDo = e.target.task.value;
    //     const copy = [...this.state.tasks, taskToDo] //spread of this.state.tasks (copied entire list), add something
    //     this.setState({tasks: copy})
    // };

    // option3: concatenating
    addToList = e => {
        e.preventDefault();
        const taskToDo = e.target.task.value;
        const obj = {
            text: taskToDo,
            complete: false
        }
        this.setState({ tasks: this.state.tasks.concat([obj]) }) // value is old state + list of one new task
        // const inputs = document.querySelectorAll('#task');
        // inputs.forEach(input => {
        //     input.value = '';
        // });
    };

    // removeFromList = e => {
    //     e.preventDefault();
    //     const taskToDo = e.target.task.value; // gets input from 'name='task'' //could've done 'getDocumentById'

    // };

    // deleteTask(index) {
    //     const tasks = this.state.tasks.filter((task, taskIndex) => {
    //       return taskIndex !== index
    //     })
    //     this.setState({ tasks })
    // }

    // deleteTask = (key) => {
    //     const filteredTasks = this.state.tasks.filter(task =>
    //         task.key !== key);
    //     this.setState({tasks: filteredTasks})
    // }

    markComplete = () => {
        this.setState()
    };

    // loop/map over through every dict that exists, a is looking at that entire dict, returning return() for every a that exists,
    //looping through both the item(task) and the index at the same time
    showTasks = () => {
        return this.state.tasks.map((t, i) =>
            <div className="taskBox">
                {/* <key={i} obj={t}/> */}
            </div>
        )
    };

    render() {
        return (
            <div className="todoBox">
                <h1>{this.props.title}</h1>
                <form onSubmit={(e) => { this.addToList(e) }}>
                    <input name='task' id='task' />
                    <button>Add</button>
                </form>
                {this.showTasks()}
                {/* <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {this.deleteTask(this.task.key)}} icon="trash" />
                </span> */}
            </div>
        )
    }
};