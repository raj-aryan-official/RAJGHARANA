import React from 'react';
import './Lehenga.css';

const lehengaItems = [
  {
    img: '/bridal.jpg',
    title: 'Bridal Lehenga',
    desc: 'Opulent, intricate, and made for the most special day.'
  },
  {
    img: '/designer.jpg',
    title: 'Designer Lehenga',
    desc: 'Modern silhouettes, bold colors, and unique embellishments.'
  },
  {
    img: '/anarkali.jpg',
    title: 'Anarkali Lehenga',
    desc: 'Flowing, regal, and timeless. The Anarkali is a classic.'
  },
  {
    img: '/sharara.jpg',
    title: 'Sharara Lehenga',
    desc: 'Wide-legged, flared, and perfect for festive occasions.'
  },
  {
    img: '/aline.jpg',
    title: 'A-Line Lehenga',
    desc: 'Elegant, versatile, and flatters every body type.'
  },
  {
    img: '/circular.jpg',
    title: 'Circular Lehenga',
    desc: 'Maximum flare, traditional style, and dramatic twirls.'
  }
];

const Lehenga = () => {
  return (
    <div className="lehenga-page">
      <h1>Our Lehenga Collection</h1>
      <div className="lehenga-collection">
        {lehengaItems.map((item, idx) => (
          <div className="lehenga-card" key={idx}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lehenga;