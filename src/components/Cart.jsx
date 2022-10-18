// import { product_1_thumb, deleteIcon } from '../assets';
import { useGlobalContext } from '../context';
import { OrangeButton } from '../UI';

import './styles/Cart.css';

function Cart() {
  const {
    // cartItems,
    // setCartItems,
    showCart,
    // quantity,
    // product: { price, discount, name },
    // total,
    cart,
    deleteItem,
  } = useGlobalContext();

  return (
    <>
      {showCart &&
        cart.map((item) => {
          const { name, price, discount, total, thumb,quantity  } = item;
          return (
            <article className="cart">
              <h2>cart</h2>
              <hr />
              {cart.length > 0 ? (
                <>
                  <div className="cart-item">
                    <img
                      src={thumb}
                      alt="product thumbnail"
                      className="cart-item__thumb"
                    />
                    <div>
                      <p className="cart-item__product-name">{name}</p>
                      <p className="cart-item__price">
                        ${price * (discount / 100)} x {quantity}{' '}
                        <span>${price * (discount / 100) * quantity}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="delete-cart-items"
                      onClick={deleteItem}
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
          );
        })}
    </>
  );
}

export default Cart;
