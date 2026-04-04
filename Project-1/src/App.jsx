import brandLogo from "./assets/Images/brand_logo.png";
import './App.css';

function App() {
  return (
    <div className="navBar">
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
    </div>
  );
}

export default App;