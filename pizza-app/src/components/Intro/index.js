import React from "react";

function Intro() {
  return (
    <section id="intro" style={{ height: "80vh" }}>
      <img
        src={process.env.PUBLIC_URL + "/imgs/intro.png"}
        style={{ width: "100%", height: "99%" }}
        alt="intro"
      />
      <div className="container h-100">
        <div className="row justify-content-center">
          <div className="content col-md-8 text-center">
            <h1>Food delivery in Kovel</h1>
            <p>
              If you decide to relax or have unexpected guests, call us. We make
              sure that your vacation is comfortable, enjoyable and delicious
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
