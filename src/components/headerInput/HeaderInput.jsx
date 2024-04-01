import './HeaderInput.css';

const HeaderInput = () => {
  return (
    <div className="input">
      <input type="text" className="headerInput" placeholder="Название запроса" />
      <div className="cancel"></div>
      <div className="search"></div>
    </div>
  );
};

export default HeaderInput;