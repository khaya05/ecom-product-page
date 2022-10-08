import { product_1_thumb } from "../assets"
import { OrangeButton } from "../UI"

function Cart() {
  return (
    <section className='cart'>
      <h2>cart</h2>
      <hr />
      <div className='cart-item'>
        <img src={product_1_thumb} alt='product thumbnail' />
        <div>
          <p className="product-name"> Fall Limited</p>
          <p className="price">$125 x 3<span>$375.00</span></p>
        </div>
        <img src={deleteIcon} alt='' />
      </div>
      <OrangeButton>
        <p>Checkout</p>
      </OrangeButton>
    </section>
  )
}

export default Cart