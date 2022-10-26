import { IncrementButton } from '../UI';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';

import './styles/ItemInfo.css';

function ItemInfo() {
  const {
    product: { name, desc, price, discount },
    addToCart,
  } = useGlobalContext();

  const currentPrice = price.toFixed(2)
  const discountedPrice = (price * (discount / 100)).toFixed(2);
  

  return (
    <div className="item-info-container">
      <h4>sneaker company</h4>
      <h2>{name}</h2>
      <p className="description">{desc}</p>
      <div className="price-info">
        <div className="price__discount-container">
          <p className="curr-price">${discountedPrice}</p>
          <p className="discount">{discount}%</p>
        </div>
        <p className="original-price">${currentPrice}</p>
      </div>
      <div className="btn-container">
        {/* increment */}
        <div className="increment-container">
          <IncrementButton />
        </div>
        {/* add to cart */}
        <div className="add-to-cart-container">
          <button className="orange-btn-container" onClick={addToCart}>
            <div className="cart-icon-container">
              <AiOutlineShoppingCart />
            </div>
            <p> Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
