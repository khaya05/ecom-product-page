import { menuIcon, logo, cartIcon, profile } from '../assets';
import { useGlobalContext } from '../context';
import { links } from '../data';
import { nanoid } from 'nanoid';

import './styles/Navbar.css';

function Navbar() {
  const { setShowCart, showCart, setShowAside , quantity,setShowBackdrop} = useGlobalContext();

  const handleShowAside = () => {
    setShowAside(true)
    setShowBackdrop(true)
  }

  return (
    <nav>
      {/* logo and links or menuBtn */}
      <div className="logo__links-container">
        {/* menu btn */}
        <button
          type="button"
          className="toggle-menu"
          onClick={handleShowAside}
        >
          <img src={menuIcon} alt="" className="menu" />
        </button>

        {/* logo */}
        <img src={logo} alt="logo" className="logo" />
        {/* links */}

        <ul className="nav-links">
          {links.map((link) => (
            <li key={nanoid()}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* cart and profile */}
      <div className="cart__profile-container">
        <div className='cart-btn-and-counter'>
          <div className="counter">
            <p>{quantity }</p>
          </div>
          <button
            type="button"
            onClick={() => setShowCart((prevState) => !prevState)}
          >
            <img src={cartIcon} alt="" className="cartIcon" />
          </button>
        </div>
        <img src={profile} alt="" className="profile" />
      </div>
    </nav>
  );
}

export default Navbar;
