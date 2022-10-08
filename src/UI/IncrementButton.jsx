import { minus, plus } from '../assets';

import './IncrementButton.css';

function IncrementButton() {
  return (
    <div className="increment-btns-container">
      <button className="increment-button">
        <img src={minus} alt="" />
      </button>
      <p className="count">0</p>
      <button className="increment-button">
        <img src={plus} alt="" />
      </button>
    </div>
  );
}

export default IncrementButton;
