import React, { Component } from 'react'
import './App.css';

export default class Task extends Component {
    render() {
        const a = this.props.taskInfo
        return (
            <div className="list" style={{ width: "18rem" }}>
                <p>{a.text}</p>
            </div>
        )
    }
}
