import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
 <div className="home__container">
     <img 
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
    
          
<div className="home__row">
<Product 
id="123124124"
title="The Indigo Story: How Constant Innovation Creates Radically Successful Businesses Paperback" 
price={19.99} 
image="https://m.media-amazon.com/images/P/B07HGY3JL5.01._SCLZZZZZZZ_SX500_.jpg" 
rating={5} />

<Product 
id="537189274"
title="Kenwood Mixer, Stylish Kichen Mixer with K-beater, Dough hook and Whisk, 5 Litre Glass Bowl"
price={239.0}
rating={4}
image="https://m.media-amazon.com/images/I/61v4DnQa0vL._SL1100_.jpg"
/>

</div>  

<div className="home__row">
<Product 
id="124359982"
title="Casio CT-S200RD 61-Keys Portable Keyboard with Casio CBS100 Carry Bag"
price={300.0}
rating={5}
image="https://m.media-amazon.com/images/I/61UdHVZlHXL._SL1100_.jpg"
/>
<Product
id="288234578"
title="POLESTAR Bold 42 L College/ Casual/ Office/ Travel Backpack with 15.6 laptop compartment and rain cover, made with polyester, 1 year warranty"
price={12.0}
rating={3}
image="https://m.media-amazon.com/images/I/71bhrIjxD5L._UL1500_.jpg"
/>
<Product 
id="352121436"
title="EKSA E900Pro Gaming Wired Over Ear Headphones with Virtual 7.1 Surround Sound, Noise Cancelling with Mic & Led, Compatible with PC, PS4, PS5, Xbox One"
price={35}
rating={4}
image="https://m.media-amazon.com/images/I/71Mmswrrn+L._SL1500_.jpg"
/>

</div>    

<div className="home__row">
<Product 
id="13452341"
title="LG 108 cm (43 Inches) Full HD Smart LED TV 43LM5600PTC (Dark Iron Gray) (2019 Model)"
price={450}
rating={4}
image="https://m.media-amazon.com/images/I/81z-Ir0qCFL._SL1500_.jpg"
/>
</div>

    </div>
    </div>
  );
}

export default Home;
