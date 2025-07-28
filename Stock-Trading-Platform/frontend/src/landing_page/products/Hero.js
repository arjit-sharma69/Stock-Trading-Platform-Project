import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="">Technology</h1>
        <h2 className="fs-4 text-muted">
          {" "}
          Sleek, modern and intuitive trading platforms
        </h2>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
