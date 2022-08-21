import React, { Component } from 'react'

export default class Food extends Component {

    render() {
        return (
            <div> 
                <ul>
                    {this.props.amount}
                </ul>
            </div>
        )
  }
}
