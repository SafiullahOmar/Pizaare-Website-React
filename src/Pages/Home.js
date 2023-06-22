import {Link} from 'react-router-dom';
import React from 'react';
import BannerImage from '../Assets/pizza.jpeg';

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{backgroundImage:`url(${BannerImage}) `}}>
        <h1>Pidros pizzaareee</h1>
        <p>Pizaa fit to any taste</p>
        <Link to="/menu">
        <button>Order NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
