import React, { useState } from 'react';
import '../style.css';
import dish1 from '../assets/dish1.jpeg';
import dish2 from '../assets/dish2.jpeg';
import dish3 from '../assets/dish3.jpeg';
import dish4 from '../assets/dish4.jpeg';
import dish5 from '../assets/dish5.jpeg';
import dish6 from '../assets/dish6.jpeg';
import dish7 from '../assets/dish7.jpeg';
import dish8 from '../assets/dish8.jpeg';
import dish9 from '../assets/dish9.jpeg';
import dish10 from '../assets/dish10.jpeg';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';

const Home = () => {
  const [cart, setCart] = useState([]);

  const dishes = [
    { id: 1, name: "Chicken Biryani", price: 10.99, image: dish1 },
    { id: 2, name: "Grilled Beef", price: 8.5, image: dish2 },
    { id: 3, name: "Chow mein", price: 9.99, image: dish3 },
    { id: 4, name: "Salad", price: 12.49, image: dish4 },
    { id: 5, name: "Grilled fish", price: 11.75, image: dish5 },
    { id: 6, name: "Beef Pulao", price: 9.25, image: dish6 },
    { id: 7, name: "Shami Kabab", price: 13.25, image: dish7 },
    { id: 8, name: "Chicken Corma", price: 10.25, image: dish8 },
    { id: 9, name: "White Corma", price: 11.0, image: dish9 },
    { id: 10, name: "Patties", price: 12.99, image: dish10 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <div className="main-wrapper">
      <header className="header">
        <h1 className="logo">MunchUp</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <h2>Delicious Meals, Delivered Fresh</h2>
          <p>Your favorite dishes at your doorstep in minutes</p>
          <button className="btn">
            <a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Order Now</a>
          </button>
          <button className="btn">
            <a href="#reservation" style={{ color: "inherit", textDecoration: "none" }}>Reserve a Table</a>
          </button>
        </div>

      </section>

      <section className="menu" id="menu">
        <h1>Our Menu</h1>
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div className="menu-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>${dish.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(dish)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart" id="cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}{' '}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>

            <h4>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>

            <form className="checkout-form">
              <h3>Checkout</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Delivery Address" required />
              <button type="submit">Place Order</button>
            </form>
          </>
        )}
      </section>

      <section className="reserve-section" id="reservation">
        <div className="reserve-container">
          <h1>Reserve a Table</h1>
          <p>Make a reservation and enjoy your meal without waiting.</p>
          <form className="reserve-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="date" required />
            <input type="time" required />
            <input type="number" placeholder="No. of Guests" min="1" required />
            <button type="submit">Book Now</button>
          </form>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Our Restaurant" />
          </div>
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              At <strong>MunchUp</strong>, we believe food is not just a meal — it’s an experience.
              Established in 2010, our restaurant has been serving delicious, freshly prepared dishes
              made with love and the finest ingredients.
            </p>
            <p>
              From cozy ambiance to professional service, we ensure every guest leaves with a smile.
              Whether it’s a romantic dinner or a family gathering, MunchUp is your perfect place to be.
            </p>
            <button className="btn">
              <a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Explore Menu</a>
            </button>
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <h1>Latest From Our Blog</h1>
        <div className="blog-posts">
          <div className="post">
            <img src={blog1} alt="Blog" />
            <h3>5 Quick Dinner Recipes</h3>
            <p>Try these quick and tasty dinners after a long day!</p>
          </div>
          <div className="post">
            <img src={blog2} alt="Blog" />
            <h3>Top 10 Street Foods</h3>
            <p>From spicy chaat to crispy fries, explore the best!</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 MunchUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
