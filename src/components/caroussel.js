import React from 'react'
import { Carousel } from 'react-bootstrap';
import './styles/caroussel.css'

export default function ImageCarousel(props) {

    return (
        <Carousel fade style={{"margin-top": '20px'}}>
            {props.data.map((item, index) => (
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-caroussel"
                    src={item.imageSrc}
                    alt={item.title}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}