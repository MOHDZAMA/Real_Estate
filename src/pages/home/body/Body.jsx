import React from "react";
import "./style.scss";

function Body() {
  return (
    <div className="body">
      <div className="body-top">
        <div className="body-top-left">
          <span>Get home recommendations</span>
          <span>Sign in for a more personalized experience.</span>
          <button>Sign in</button>
        </div>
        <div className="body-top-right">
          <img
            src="https://assets.architecturaldigest.in/photos/60084b068661bd303c240c54/1:1/w_768,h_768,c_limit/Spaces-Architects%2540ka-Delhi-courtyard-home-feature-1366x768.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="body-bottom">
        <div className="card">
          <img
            alt="Buy_a_home"
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.png"
          ></img>
          <span>Buy a house</span>
          <p>
            Find your place with an immersive photo
            <br /> experience and the most listings,
            <br /> including things you won’t find anywhere else.
          </p>
          <button>Browse homes</button>
        </div>
        <div className="card">
          <img
            alt="Rent_a_home"
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.png"
          ></img>
          <span>Rent a house</span>
          <p>
            We’re creating a seamless online experience
            <br /> – from shopping on the largest rental
            <br /> network, to applying, to paying rent.
          </p>
          <button>Find rentals</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
