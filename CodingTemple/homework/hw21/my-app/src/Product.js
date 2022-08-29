import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const p = this.props.productInfo
        return (
            <div className="mx-auto card text-decoration-none text-center" style={{ width: "18rem" }}>
                <img src={p.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.price}</p>
                </div>
            </div>
        )
    }
}
