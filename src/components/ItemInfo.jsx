import { IncrementButton, OrangeButton } from '../UI';
import { cartIcon } from '../assets';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';

import './styles/ItemInfo.css';

function ItemInfo() {

  const{product:{name,desc,price,discount}} = useGlobalContext()

  return (
    <div className="item-info-container">
      <h4>sneaker company</h4>
      <h2>{name}</h2>
      <p className="description">{desc}
      </p>
      <div className="price-info">
        <div className="price__discount-container">
          <p className="curr-price">${price * discount / 100}</p>
          <p className="discount">{discount}%</p>
        </div>
        <p className="original-price">${price}</p>
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
