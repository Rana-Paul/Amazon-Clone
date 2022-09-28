import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home__row">
        <Product
          id="1"
          title="
        Rustic Art Organic Neem Basil Face Wash Concentrate | SLS & Paraben Free | Vegan & Creulty Free | Acne Control | 50 g"
          price={3.6}
          rating={5}
          image="https://m.media-amazon.com/images/I/71tgnfpRb5L._SL1500_.jpg"
        />
        <Product
          id="2"
          title="
          Apple iPhone 12 (128GB) - Green | 6.1-inch (15.5 cm diagonal) Super Retina XDR display"
          price={10.76}
          rating={4}
          image="https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="
          Canon M50 Mark II 15-45mm f3.5-6.3 is STM Digital Zoom Camera (Black) | In-camera YouTube live streaming for real-time video engagement"
          price={23.55}
          rating={3}
          image="https://m.media-amazon.com/images/I/61zne3JPlQS._SL1200_.jpg"
        />
        <Product
          id="4"
          title="
          (Renewed)Lenovo ThinkPad L450 5th Gen Intel Core i3 Thin & Light HD Laptop (4 GB RAM/500 GB HDD/14 (35.6 cm)/Windows 10/MS Office/Wifi/Bluetooth 4.0/Webcam/Integrated Graphics)"
          price={3.6}
          rating={2}
          image="https://m.media-amazon.com/images/I/51c+2g9LdDL._SL1380_.jpg"
        />
        <Product
          id="5"
          title="
          (Renewed) Redgear A-15 Wired Gaming Mouse with RGB, Semi-Honeycomb Design and Upto 6400 dpi for Windows PC Gamers."
          price={3.6}
          rating={5}
          image="https://m.media-amazon.com/images/I/51ZYOFfTBoL._SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="
        OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)"
          price={3.6}
          rating={5}
          image="https://m.media-amazon.com/images/I/81qoKyMES2L._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
