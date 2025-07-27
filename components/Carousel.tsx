import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
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
              {/* <span>
                Some representative placeholder content for the second slide.
              </span> */}
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
              {/* <span>
                Some representative placeholder content for the second slide.
              </span> */}
            </div>
          </div>
          <div className="carousel-item ciner">
            <img
              src="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              // height="300px"
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              {/* <span>
                Some representative placeholder content for the second slide.
              </span> */}
            </div>
          </div>
          <div className="carousel-item  ciner">
            <img
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 cimg"
              // height="300px"
              alt="..."
            />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
              {/* <span>
                Some representative placeholder content for the second slide.
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
