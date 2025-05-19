import React from 'react';
import './Suit.css';

const suitItems = [
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

const Suit = () => {
  return (
    <div className="suit-page">
      <h1>Our Suit Collection</h1>
      <div className="suit-collection">
        {suitItems.map((item, idx) => (
          <div className="suit-card" key={idx}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suit;