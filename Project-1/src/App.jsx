import brandLogo from "./assets/Images/brand_logo.png";
import Shoe from "./assets/Images/shoe_image.png";
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navBar">
          <div className="brand-logo">
            <img src={brandLogo} alt="logo" />
          </div>

          <div >
            <ul className="menu" >
              <li><a href="#">MENU</a></li>
              <li><a href="#">LOCATION</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>

          <div>
            <button className="login">Login</button>
          </div>
        </nav>
      </header>
      <main className="box">
          <div className="left-box">
              <div className="heading">
                  <p>
                    YOUR FEET DESERVE THE BEST
                  </p>
              </div>
              <div className="info">
                  <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR SHOES</p>
              </div>
              <div className="buttons">
                  <button className="Shop">Shop Now</button>
                  <button className="Category">Category</button>
              </div>
          </div>
          <div className="right-box">
            <img src={Shoe} alt="shoe" />
          </div>
      </main>
    </>
  );
}

export default App;