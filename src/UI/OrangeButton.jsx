import { useGlobalContext } from '../context';
import './OrangeButton.css';

function OrangeButton({ children }) {
  const { addToCart } = useGlobalContext();

  return (
    <button type="button" className="orange-btn-container" onClick={addToCart}>
      {children}
    </button>
  );
}

export default OrangeButton;
