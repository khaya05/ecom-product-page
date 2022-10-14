import { ImagesGallery, ItemInfo } from './';
import './styles/ProductInfo.css'

function ProductInfo() {
  return (
    <section id='product-info'>
      <div className="gallery-container">
        <ImagesGallery />
      </div>
      <div className="info-container">
        <ItemInfo />
      </div>
    </section>
  );
}

export default ProductInfo;
