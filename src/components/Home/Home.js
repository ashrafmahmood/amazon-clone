import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Mayart21/GWRev/PCHero1x/MayART_PC_Days_1x._CB670367126_.jpg" alt=""
            />
            <div className="home__row">
                <Product id="1" title="New Apple iPhone 12 (64GB) - Black"
                price={70900.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._AC_SL1500_.jpg"
                rating={4}
                />
                <Product id="2" title="OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)"
                price={38999.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71CuwgwCQdL._AC_SL1500_.jpg"
                rating={4}
                />
                 <Product id="3" title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)"
                price={29090.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._AC_SL1500_.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product id="4" title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Black)"
                price={3499.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61Z5bOhKKAL._AC_SL1000_.jpg"
                rating={4}
                />
                <Product id="5" title="Kindle (10th Gen), 6' Display with Built-in Light,WiFi (Black)"
                price={6799.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61CKdUloJJL._AC_SL1000_.jpg"
                rating={4}
                />
                <Product id="6" title="OnePlus Smart Band :1.1 Inch AMOLED Display, Dual-Color Band Design, Sleep Monitoring of Blood Oxygen Saturation (SpO2), 5ATM + IP68 Water & Dust Resistant(only Android Compatible Currently)"
                price={2299.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BA3LpRuAL._AC_SL1500_.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product id="7" title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver)"
                price={49990.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71kMdY5M1KL._AC_SL1500_.jpg"
                rating={4}
                />
                 <Product id="8" title="Lenovo IdeaPad S145 81W800C3IN 15.6' (39.62cms) FHD  Thin and Light Laptop (10th Gen CORE I3-1005G1/4GB/256GB SSD/Windows 10/Microsoft Office/Integrated Graphics), Grey"
                price={31990.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81EoCoV-8tL._AC_SL1500_.jpg"
                rating={4}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
