import React from 'react';
import './Saree.css';

const sareeItems = [
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
  }
];

const Saree = () => {
  return (
    <div className="saree-page">
      <h1>Our Saree Collection</h1>
      <div className="saree-collection">
        {sareeItems.map((item, idx) => (
          <div className="saree-card" key={idx}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saree;