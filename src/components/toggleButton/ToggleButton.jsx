import { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  
  const [isToggle, setToggle] = useState(true);
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const toggleButton = () => {
    setToggle(!isToggle);
  };

  return (
    <div>
      {isToggle ? (
        <button className="toShoppingCart" onClick={toggleButton}>
          <span className="toShoppingCartIcon"></span>
          <span className="toShopingCartText">В корзину</span>
        </button>
      ) : (
        <div className="counter">
          <button className="minus" onClick={minus}></button>
          <span className="counterText">{count} штуки</span>
          <button className="plus" onClick={plus}></button>
        </div>
      )}
    </div>
  );
};

export default ToggleButton;