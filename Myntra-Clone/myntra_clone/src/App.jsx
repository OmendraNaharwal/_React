function App() {

  return (
    <div className="App">
      <header>
        <div className="logo_container">
          <a href="#"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">person</span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">favorite</span>
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">shopping_bag</span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItems.length}</span>
          </div>
        </div>
      </header>

      <main>
        <div className="items-container">
          {items.map(item => (
            <div key={item.id} className="item-container">
              <div className="item-image">
                <img src={item.image} alt={item.item_name} />
              </div>
              <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
              </div>
              <div className="company-name">{item.company}</div>
              <div className="item-name">{item.item_name}</div>
              <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
              </div>
              <button 
                className="btn-add-bag" 
                onClick={() => addToBag(item.id)}
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>CUSTOMER POLICIES</h3>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
          </div>

          <div className="footer_column">
            <h3>EXPERIENCE MYNTRA APP</h3>
            <a href="#">Download App</a>
            <a href="#">Rate Us</a>
            <a href="#">Feedback</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Exchange Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
