import { product_1_thumb, deleteIcon } from '../assets';
import { useGlobalContext } from '../context';
import { OrangeButton } from '../UI';

import './styles/Cart.css';

function Cart() {
  const { cartItems, setCartItems, showCart } = useGlobalContext();

  return (
    <>
      {showCart && (
        <article className="cart">
          <h2>cart</h2>
          <hr />
          {cartItems.length > 0 ? (
            <>
              <div className="cart-item">
                <img
                  src={product_1_thumb}
                  alt="product thumbnail"
                  className="cart-item__thumb"
                />
                <div>
                  <p className="cart-item__product-name">
                    {' '}
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="cart-item__price">
                    $125 x 3 <span>$375.00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="delete-cart-items"
                  onClick={() => setCartItems([])}
                >
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
              <div className="checkout-btn">
                <OrangeButton>
                  <p>Checkout</p>
                </OrangeButton>
              </div>
            </>
          ) : (
            <div className="cart-empty-container">
              <p>Your cart is empty</p>
            </div>
          )}
        </article>
      )}
    </>
  );
}

export default Cart;
