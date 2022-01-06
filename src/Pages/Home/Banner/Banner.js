import { Button } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ccPYf6J/sun-banner2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text">
                        <h1>4 Milllions Units</h1>
                        <p>4 Million Units Assembled Newnan, Ga</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0FgcvS0/sun-banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text">
                        <h1>MT-IDSP</h1>
                        <p>Mororcross, Cross Country</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0fJnx8G/sun-banner3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text">
                        <h1>Yamaha Outdoor</h1>
                        <p>Access Initiative Steadfast In Public Lend Conservation</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/w05z26h/1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text">
                        <h1>TURN UP YOUR EXPERIENCE</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ngnGLYH/2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text">
                        <h1>LETS RIDE HOLIYDAY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zRwSYNB/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text">
                        <h1>YAMAHA R15</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;