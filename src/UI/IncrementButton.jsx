import { minus, plus } from '../assets';
import { useGlobalContext } from '../context';

import './IncrementButton.css';

function IncrementButton() {
  const { amount, increase,decrease } = useGlobalContext();
  return (
    <div className="increment-btns-container">
      <button className="increment-button" onClick={decrease}>
        <img src={minus} alt="" />
      </button>
      <p className="count">{amount}</p>
      <button className="increment-button" onClick={increase} >
        <img src={plus} alt="" />
      </button>
    </div>
  );
}

export default IncrementButton;
