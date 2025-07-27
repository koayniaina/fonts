import React from "react";

export default function Category() {
  return (
    <div>
      <h6 className="text-gray-700 p-4">Upcoming</h6>
      <div className="cardflex">
        <div className="card" style={{ width: "18rem",  margin: "1rem" }}>
          <img
            src="https://img.pccomponentes.com/articles/1087/10879424/12-pc-sobremesa-hp-27-cr1010ns-intel-core-ultra-5-125u-16gb-512gb-ssd-27-fhd-win11-especificaciones.jpg"
            className="card-img-top p-7 h-[60%] "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1rem" }}>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/optiplex-desktops/optiplex-d13-tower/13-5-pdp/desktop-optiplex-d13-5-7020-tower-alexandria-plus-sustainability.psd?wid=950&hei=781&fmt=png-alpha&qlt=100%2C0&op_usm=1.75%2C0.3%2C2%2C0&resMode=sharp2&pscan=auto&fit=constrain%2C1&align=0%2C0"
            className="card-img-top p-7 h-[60%]"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1rem" }}>
          <img
            src="https://www.tunisianet.com.tn/img/cms/3280AIO/desktop-inspiron-22-3280-aio-emea-direct-pdp-3.jpg"
            className="card-img-top p-7 h-[60%]"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
       

      </div>
    </div>
  );
}
