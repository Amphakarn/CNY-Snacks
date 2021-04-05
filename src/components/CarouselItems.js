import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class CarouselItems extends Component {
  render() {
    return (
      <div>
        {/* <div className='container-fluid'>
          <div className='row title' style={{ marginBottom: "20px" }}>
            <div className='col-sm-12 btn btn-warning text-capitalize'>
              How to use bootstrap carousel in reactJS
            </div>
          </div>
        </div> */}

        <div className='container-fluid p-0'>
          <Carousel
            fade
            interval={5000}
            keyboard={false}
            pauseOnHover={true}
            className='text-capitalize'
          >
            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className='d-block w-100'
                src={"../img/home-product-1.jpg"}
                alt='home-product-1.jpg'
              />
              <Carousel.Caption>
                <h3>CNY Snacks</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className='d-block w-100'
                src={"../img/home-product-2.jpg"}
                alt='home-product-2.jpg'
              />
              <Carousel.Caption>
                <h3>CNY Snacks</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className='d-block w-100'
                src={"../img/home-product-3.jpg"}
                alt='home-product-3.jpg'
              />
              <Carousel.Caption>
                <h3>CNY Snacks</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
