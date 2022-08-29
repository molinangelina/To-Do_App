import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.obj.text}
        <input type='checkbox' checked = {this.props.obj.complete?'checked':''}/>
      </div>
    )
  }
}