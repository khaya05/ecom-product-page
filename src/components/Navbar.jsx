import { menuIcon, logo, cartIcon, profile } from '../assets';
import { nanoid } from 'nanoid';

import './styles/Navbar.css';

function Navbar() {
  const links = ['collection', 'men', 'women', 'about', 'contact'];

  return (
    <nav>
      {/* logo and links or menuBtn */}
      <div className="logo__links-container">
        {/* menu btn */}

        <img src={menuIcon} alt="" className="menu" />

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
        <img src={cartIcon} alt="" className='cartIcon' />
        <img src={profile} alt="" className='profile' />
      </div>
    </nav>
  );
}

export default Navbar;
