
import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../contextapi/ThemeContext';
  function Home(props) {

    const value = useContext(themeContext);

  return (
  <main id="main">
    <section className={`slider_section position-relative ${value.theme}`}>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div className="d-flex">
                            <a href className="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href className="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt className />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div className="d-flex">
                            <a href className="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href className="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt className />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div className="d-flex">
                            <a href className="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href className="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt className />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_carousel-control">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    <section className={`service_section layout_padding ${value.theme}`} >
      <div className="container">
        <h2 className="custom_heading">Our Services</h2>
        <p className="custom_heading-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        <div className=" layout_padding2">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="images/card-item-1.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Orange</h5>
                <p className="card-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="images/card-item-2.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Grapes</h5>
                <p className="card-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="images/card-item-3.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Gauva</h5>
                <p className="card-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href className="custom_dark-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
    <section className="fruit_section">
      <div className="container">
        <h2 className="custom_heading">Fresh Fruits</h2>
        <p className="custom_heading-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        <div className="row layout_padding2">
          <div className="col-md-8">
            <div className="fruit_detail-box">
              <h3>
                Best Fresh Orange
              </h3>
              <p className="mt-4 mb-5">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be
              </p>
              <div>
                <a href className="custom_dark-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="fruit_img-box d-flex justify-content-center align-items-center">
              <img src="images/orange.png" alt className width="250px" />
            </div>
          </div>
        </div>
        <div className="row layout_padding2">
          <div className="col-md-8">
            <div className="fruit_detail-box">
              <h3>
                Best Fresh Grapes
              </h3>
              <p className="mt-4 mb-5">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be
              </p>
              <div>
                <a href className="custom_dark-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="fruit_img-box d-flex justify-content-center ">
              <img src="images/grapes.png" alt className width="100px" />
            </div>
          </div>
        </div>
        <div className="row layout_padding2-top layout_padding-bottom">
          <div className="col-md-8">
            <div className="fruit_detail-box">
              <h3>
                Best Fresh Gauva
              </h3>
              <p className="mt-4 mb-5">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be
              </p>
              <div>
                <a href className="custom_dark-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="fruit_img-box d-flex justify-content-center align-items-center">
              <img src="images/gauva.png" alt className width="250px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="tasty_section">
      <div className="container_fluid">
        <h2>
          Very tasty fruits
        </h2>
      </div>
    </section>
    <section className="client_section layout_padding">
      <div className="container">
        <h2 className="custom_heading">Testimonial</h2>
        <p className="custom_heading-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        <div>
          <div id="carouselExampleControls-2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="client_detail">
                    <h3>
                      Johnhex
                    </h3>
                    <p className="custom_heading-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are <br />
                      going to use a passage of Lorem Ipsum, you need to be sure
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="client_detail">
                    <h3>
                      Johnhex
                    </h3>
                    <p className="custom_heading-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are <br />
                      going to use a passage of Lorem Ipsum, you need to be sure
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src="images/client.png" alt />
                  </div>
                  <div className="client_detail">
                    <h3>
                      Johnhex
                    </h3>
                    <p className="custom_heading-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are <br />
                      going to use a passage of Lorem Ipsum, you need to be sure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom_carousel-control">
              <a className="carousel-control-prev" href="#carouselExampleControls-2" role="button" data-slide="prev">
                <span className aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls-2" role="button" data-slide="next">
                <span className aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact_section layout_padding">
      <div className="container">
        <h2 className="font-weight-bold">
          Contact Us
        </h2>
        <div className="row">
          <div className="col-md-8 mr-auto">
            <form action>
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="mt-5">
                    <input type="text" placeholder="Message" />
                  </div>
                  <div className="mt-5">
                    <button type="submit">
                      send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="info_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>
              Fruits
            </h5>
            <ul>
              <li>
                randomised
              </li>
              <li>
                words which
              </li>
              <li>
                don't look even
              </li>
              <li>
                slightly
              </li>
              <li>
                believable. If you
              </li>
              <li>
                are going to use
              </li>
              <li>
                a passage of
              </li>
              <li>
                Lorem Ipsum,
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>
              Services
            </h5>
            <ul>
              <li>
                randomised
              </li>
              <li>
                words which
              </li>
              <li>
                don't look even
              </li>
              <li>
                slightly
              </li>
              <li>
                believable. If you
              </li>
              <li>
                are going to use
              </li>
              <li>
                a passage of
              </li>
              <li>
                Lorem Ipsum,
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>
              List
            </h5>
            <ul>
              <li>
                randomised
              </li>
              <li>
                words which
              </li>
              <li>
                don't look even
              </li>
              <li>
                slightly
              </li>
              <li>
                believable. If you
              </li>
              <li>
                are going to use
              </li>
              <li>
                a passage of
              </li>
              <li>
                Lorem Ipsum,
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="social_container">
              <h5>
                Follow Us
              </h5>
              <div className="social-box">
                <a href>
                  <img src="images/fb.png" alt />
                </a>
                <a href>
                  <img src="images/twitter.png" alt />
                </a>
                <a href>
                  <img src="images/linkedin.png" alt />
                </a>
                <a href>
                  <img src="images/instagram.png" alt />
                </a>
              </div>
            </div>
            <div className="subscribe_container">
              <h5>
                Subscribe Now
              </h5>
              <div className="form_container">
                <form action>
                  <input type="email" />
                  <button type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}
  export default Home;

