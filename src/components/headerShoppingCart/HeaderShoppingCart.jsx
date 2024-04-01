import './HeaderShoppingCart.css';

const HeaderShoppingCart = () => {
  return (
    <button className="shoppingCart">
      <span className="shoppingCartIcon"></span>
      <span className="shopingCartText">144 235₽</span>
    </button>
  );
};

export default HeaderShoppingCart;