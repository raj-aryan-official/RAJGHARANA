import React from 'react';
import './Showcase.css';

const showcaseItems = [
  // Lehengas
  {
    img: '/lehenga.jpg',
    title: 'Lehenga',
    desc: 'A swirling masterpiece of fabric, a celebration of colors, and a beacon of tradition and festivity.'
  },
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
  },
  // Sarees
  {
    img: '/saree.jpg',
    title: 'Saree',
    desc: 'A symbol of grace, tradition, and timeless beauty. Six yards of elegance and heritage.'
  },
  {
    img: '/banarasi.jpg',
    title: 'Banarasi Saree',
    desc: 'Rich silk, gold brocade, and a legacy of luxury.'
  },
  {
    img: '/kaanjivaram.jpg',
    title: 'Kanjeevaram Saree',
    desc: 'South Indian splendor, vibrant colors, and intricate zari work.'
  },
  {
    img: '/chiffon.jpg',
    title: 'Chiffon Saree',
    desc: 'Lightweight, flowing, and perfect for modern elegance.'
  },
  {
    img: '/silk.jpg',
    title: 'Silk Saree',
    desc: 'Classic, lustrous, and timelessly beautiful.'
  },
  {
    img: '/georgete.jpg',
    title: 'Georgette Saree',
    desc: 'Soft, drapey, and easy to style for any occasion.'
  },
  {
    img: '/cotton.jpg',
    title: 'Cotton Saree',
    desc: 'Comfortable, breathable, and perfect for daily wear.'
  },
  // Suits
  {
    img: '/suit.jpg',
    title: 'Suit',
    desc: 'A symphony in fabric, harmonizing tradition and modernity in every stitch.'
  },
  {
    img: '/anarkalisuit.jpg',
    title: 'Anarkali Suit',
    desc: 'Graceful, flowing, and perfect for festive occasions.'
  },
  {
    img: '/palazzo.jpg',
    title: 'Palazzo Suit',
    desc: 'Trendy, comfortable, and easy to style.'
  },
  {
    img: '/patiala.jpg',
    title: 'Patiala Suit',
    desc: 'Classic Punjabi style, voluminous and vibrant.'
  },
  {
    img: '/churidar.jpg',
    title: 'Churidar Suit',
    desc: 'Slim-fit, elegant, and timeless.'
  },
  {
    img: '/salwar.jpg',
    title: 'Salwar Kameez',
    desc: 'Traditional, versatile, and comfortable for all-day wear.'
  },
  {
    img: '/straight.jpg',
    title: 'Straight Suit',
    desc: 'Modern, sleek, and perfect for formal occasions.'
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