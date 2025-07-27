import React from "react";

export default function Carousel() {
  return (
    <div>
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item ciner active">
            <img
              src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              height="300px"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div className="carousel-item ciner active">
            <img
              src="https://images.unsplash.com/photo-1510698453013-dd490a55cb4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              height="300px"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
           
            </div>
          </div>
          <div className="carousel-item ciner">
            <img
              src="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
             
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Second slide label</h5>
            
            </div>
          </div>
          <div className="carousel-item  ciner">
            <img
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
             
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
             
            </div>
          </div>
        </div>
      </div> */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item   ciner active">
             <img
              src="https://images.unsplash.com/photo-1510698453013-dd490a55cb4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              height="300px"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div className="carousel-item ciner">
            <img
              src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              height="300px"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div className="carousel-item  ciner">
            <img
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
