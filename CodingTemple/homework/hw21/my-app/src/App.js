import React, { Component } from 'react'
import Music from './Music'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import ToDo from './Todo'
import SignUp from './SignUp'
import Login from './Login'
import Shop from './Shop'
import Cart from './Cart'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
        greeting: 'Welcome to My First Props Demo',
        title: 'Todo List'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Nav />

          <Routes>
            <Route path='/' element={<Home greeting={this.state.greeting} />}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/todo' element={<ToDo title={this.state.title}/>}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    )
  }
}