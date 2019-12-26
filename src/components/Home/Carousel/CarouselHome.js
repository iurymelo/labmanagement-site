import React from "react";
import {Carousel} from "react-bootstrap";

const carouselHome = (props) => {
  return (
    <div >
      <Carousel>
        <Carousel.Item>
          <img  width={900} height={500} alt="900x500"
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
          />
          <Carousel.Caption>
            <h3>Notícia 1 em destaque</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500"
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
          />

          <Carousel.Caption>
            <h3>Notícia 2 em destaque</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500"
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
          />

          <Carousel.Caption>
            <h3>Notícia 3 em destaque</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default carouselHome;
