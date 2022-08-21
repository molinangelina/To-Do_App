import React, { Component } from 'react'

import Music from './Music'
import Home from './Home'
import Food from './Food'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
        fruit: 'apples',
        amount: 0,
        greeting: 'Welcome to My First Props Demo'
    }
  }

  addToCart = () => {
    this.setState({amount: this.state.amount + 1})
  }

  render() {
    return (
      <div className="background">
      <BrowserRouter>
        <div>
          
          <Nav />

          {this.state.fruit}
          <button onClick={this.addToCart}>add to cart</button>

          {/* BLOCK CONTENT */}

          <Routes>
            <Route path='/' element={<Home greeting={this.state.greeting} />}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/food' element={<Food amount={this.state.amount} />}/>
          </Routes>

          {/* BLOCK CONTENT */}
        </div>
      </BrowserRouter>
      </div>
    )
  }
}