import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Main.css';

export default class Music extends Component {
  render() {
    return (
        <>
        <h1 className="text-center">Recently Played</h1>
    <Carousel>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://i.scdn.co/image/ab67616d0000b273b7a5088012c53f395941e8ae"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://cdns-images.dzcdn.net/images/cover/4d1dece6ccd27da19bce02307c26e586/500x500.jpg"
                alt=""
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://images.genius.com/ef62c92b3e328a3a5b3ff2383eca6b6c.1000x1000x1.png"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://i.scdn.co/image/ab67616d0000b273fa8e98e58178036f3f5b8981"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://i.discogs.com/QbfSCkVebeeteBWDUZlxOaPHBMUnQutD4HvKLOGtS8k/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1Nzk4/LTEyMzEwMDAzMjQu/anBlZw.jpeg"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://images.genius.com/869d7fc5584a984cab9c05d96dcc7a58.1000x1000x1.png"
                alt=""
            />
        </Carousel.Item>
        <Carousel.Item interval={900}>
            <img
                className="d-block w-100"
                src="https://images.genius.com/b824e700cbfe84bde4dda67cff669b6d.600x600x1.jpg"
                alt="Fifth slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/71XsuGkjMwL._SL1400_.jpg"
                alt="Sixth slide"
            />
        </Carousel.Item>
    </Carousel>
    </>
    )
  }
}