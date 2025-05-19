import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>RAJ GHARANA</h1>
          <p>THE LEHENGA HOUSE</p>
          <Link to="/showcase" className="btn">SHOW CASE</Link>
        </div>
      </section>

      <section className="about dark-theme">
        <div className="about-content">
          <h2>About RAJ GHARANA</h2>
          <p>Welcome to RAJ GHARANA...</p>
          <p>where tradition meets elegance! At our store, <br />
            we offer a stunning collection of high-quality sarees, lehengas, and suits,<br />
            meticulously crafted to perfection. Whether you seek the timeless charm of a Banarasi saree, <br /></p>
          <p>the regal beauty of a bridal lehenga, or the contemporary grace of an Anarkali suit, we have it all.<br />
            We pride ourselves on providing premium fabrics, intricate designs, and a commitment to excellence, all at unbeatable prices. <br />
            Shop with us and experience the perfect blend of style, comfort, and affordability. <br />
            Your satisfaction is our utmost priority, and we guarantee you'll find the best quality at the best price.</p>
        </div>
        <div className="about-image">
          <img src="/shop.jpg" alt="About Image" />
        </div>
      </section>

      <section className="menu">
        <h2>OUR COLLECTION</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/lehenga.jpg" alt="Lehenga Image" />
            <h3>LEHENGA</h3>
            <p>A lehenga is a swirling masterpiece of fabric, a celebration of colors, and a beacon of tradition and festivity.<br />
              Imagine an opulent skirt that flares out like a blossoming flower, adorned with intricate embroidery, sparkling sequins, and delicate beadwork.<br />
              Each stitch whispers tales of artisans' dedication, capturing the essence of royalty and timeless elegance.</p>
            <p>OUR COLLECTIONS</p>
            <p>Bridal Lehenga<br />
              Designer Lehenga<br />
              Anarkali Lehenga<br />
              Sharara Lehenga<br />
              A-Line Lehenga<br />
              Circular Lehenga<br />
              and Many More</p>
            <Link to="/lehenga" className="btn">SEE MORE</Link>
          </div>

          <div className="menu-item">
            <img src="/saree.jpg" alt="Saree Image" />
            <h3>SAREE</h3>
            <p>A saree is more than just a garment—it's a symbol of grace, tradition, and timeless beauty. <br />
              Imagine six yards of fabric, woven with tales of ancient weavers, <br />
              cascading down like a waterfall of elegance.<br />
              Each fold and pleat is an art form, meticulously crafted to drape the body in a harmonious blend of modesty and allure.</p>
            <p>OUR COLLECTIONS</p>
            <p>Banarasi Saree<br />
              Kanjeevaram Saree<br />
              Chiffon Saree<br />
              Silk Saree<br />
              Georgette Saree<br />
              Cotton Saree<br />
              and Many More</p>
            <Link to="/saree" className="btn">SEE MORE</Link>
          </div>

          <div className="menu-item">
            <img src="/suit.jpg" alt="Suit Image" />
            <h3>SUIT</h3>
            <p>A suit is like a symphony in fabric, harmonizing tradition and modernity in every stitch.<br />
              Imagine an ensemble where the fluidity of the fabric flows like poetry,<br />
              from the fitted choli that frames the elegance of the upper body to the graceful fall of the kameez that drapes with effortless sophistication.<br />
              The palazzo or churidar trousers, with their tailored precision.</p>
            <p>OUR COLLECTIONS</p>
            <p>Anarkali Suit<br />
              Palazzo Suit<br />
              Patiala Suit<br />
              Churidar Suit<br />
              Salwar Kameez<br />
              Straight Suit<br />
              and Many More</p>
            <Link to="/suit" className="btn">SEE MORE</Link>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>ADDRESS</h2>
          <h3>MAIN ROAD</h3>
          <h3>NEAR POLICE STATION</h3>
          <h3>HILSA, NALANDA (BIHAR)</h3>
          <h3>801302</h3>
          <h2>CONTACT US</h2>
          <h3>MOB: 6201207481, 6206897868<br />
            EMAIL: rahulraj90606024@gmail.com</h3>
          <h2>LOCATION</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.64281810741!2d85.2802140752662!3d25.316201926870445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2979031789f2f%3A0x9a5c6f7b446003e1!2sRaj%20Cake%20%26%20Raj%20Gharana!5e0!3m2!1sen!2sin!4v1735651850385!5m2!1sen!2sin"
            width="80%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home; 