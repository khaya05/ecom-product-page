import { deleteIcon } from '../assets';
import { useGlobalContext } from '../context';

import './styles/Cart.css';
import './styles/OrangeButton.css';

function Cart() {
  const {
    showCart,
    product: { price, discount, name },
    cart,
    deleteItem,
  } = useGlobalContext();

  return (
    <>
      {showCart && (
        <article className="cart">
          <h2>cart</h2>
          <hr />
          {cart.length > 0 ? (
            cart.map((item, index) => {
              const { name, price, total, thumb, quantity } = item;
              const currentPrice = (price * (discount / 100)).toFixed(2);
              const totalPrice = (currentPrice * quantity).toFixed(2);
              return (
                <div key={index}>
                  <div className="cart-item">
                    <img
                      src={thumb}
                      alt="product thumbnail"
                      className="cart-item__thumb"
                    />
                    <div>
                      <p className="cart-item__product-name">{name}</p>
                      <p className="cart-item__price">
                        ${currentPrice} x {quantity} <span>${totalPrice}</span>
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
                    <button className="orange-btn-container">Checkout</button>
                  </div>
                </div>
              );
            })
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
