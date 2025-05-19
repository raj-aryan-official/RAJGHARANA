import React from 'react';
import './Showcase.css';

const showcaseItems = [
  {
    img: '/lehenga.jpg',
    title: 'Lehenga',
    desc: 'A swirling masterpiece of fabric, a celebration of colors, and a beacon of tradition and festivity.'
  },
  {
    img: '/saree.jpg',
    title: 'Saree',
    desc: 'A symbol of grace, tradition, and timeless beauty. Six yards of elegance and heritage.'
  },
  {
    img: '/suit.jpg',
    title: 'Suit',
    desc: 'A symphony in fabric, harmonizing tradition and modernity in every stitch.'
  },
  {
    img: '/anarkali.jpg',
    title: 'Anarkali',
    desc: 'Flowing, regal, and timeless. The Anarkali is a classic of Indian fashion.'
  },
  {
    img: '/bridal.jpg',
    title: 'Bridal Lehenga',
    desc: 'Opulent, intricate, and made for the most special day.'
  },
  {
    img: '/banarasi.jpg',
    title: 'Banarasi Saree',
    desc: 'Rich silk, gold brocade, and a legacy of luxury.'
  }
];

const Showcase = () => {
  return (
    <div className="showcase">
      <h1>Showcase</h1>
      <div className="showcase-grid">
        {showcaseItems.map((item, idx) => (
          <div className="showcase-item" key={idx}>
            <img src={item.img} alt={item.title} />
            <div className="showcase-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;