import React, { Component } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';

export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount = async () => {
        this.getProducts()
    }

    getProducts = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/products');
        const data = await res.json();
        console.log(data)
        // const correctOrder = []
        this.setState({ products: data.products })
    }

    showProducts = () => {
        // the key should be on the outtermost
        return this.state.products.map(p=><Link key={p.id} to={`/products/${p.id}`}><Product productInfo={p}/></Link>)
    }

    render() {
        return (
            <>
                {this.showProducts()}
            </>
        )
    }
}
