import React from "react";
import "./index.scss";
import Button from "../../components/button";

const HomePage = () => {
  return (
    <>
      <div id="hero-banner-section">
        <div className="container">
          <div className="hero-banner-section">
            <div className="empty"></div>
            <div className="hero-banner-texts">
              <h1>Him & Her</h1>
              <h4>Love Collection</h4>
              <p>Exclusive diamond rings for couples and lovers.</p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div id="showcase">
        <div className="container">
          <div className="showcase-section">
            <div className="showcase-left">
              <h1>Necklace with Diamond Pendant</h1>
              <p>Lorem ipsum dolor sit amet, adipiscing elit</p>
              <Button>Shop Now</Button>
            </div>
            <div className="showcase-right">
              <div className="item">
                <h1>Give Her the Best Thing She Deserves</h1>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="highlight">
        <div className="container">
          <div className="highlight-section">
            <div className="highlight-left">
              <h1>For Him</h1>
              <p>Exclusive diamond rings for gold loving men</p>
              <Button>Shop Now</Button>
            </div>
            <div className="highlight-right">
              <div className="item">
                <h1>Everything You Need For The Best Look You Wish</h1>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
