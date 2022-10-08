import { IncrementButton, OrangeButton } from '../UI';
import { cartIcon } from '../assets';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './styles/ItemInfo.css';

function ItemInfo() {
  return (
    <div className="item-info-container">
      <h4>sneaker company</h4>
      <h2>
        {' '}
        fall limited edition <span>sneakers</span>
      </h2>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-info">
        <div className="price__discount-container">
          <p className="curr-price">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <p className="original-price">$250</p>
      </div>
      <div className="btn-container">
        {/* increment */}
        <div className="increment-container">
          <IncrementButton />
        </div>
        {/* add to cart */}
        <div className="add-to-cart-container">
          <OrangeButton>
            <div className='cart-icon-container'>
              <AiOutlineShoppingCart />
            </div>
            <p> Add to cart</p>
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
