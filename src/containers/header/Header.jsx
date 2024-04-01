import HeaderLogo from '../../components/headerLogo/HeaderLogo';
import HeaderMenuButton from '../../components/headerMenuButton/HeaderMenuButton';
import HeaderInput from '../../components/headerInput/HeaderInput';
import BallAndHeart from '../../components/ballAndHeart/BallAndHeart';
import HeaderShoppingCart from '../../components/headerShoppingCart/HeaderShoppingCart';
import UserAvatar from '../../components/userAvatar/UserAvatar';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderMenuButton />
      <HeaderInput />
      <BallAndHeart />
      <HeaderShoppingCart />
      <UserAvatar />
    </div>
  );
};

export default Header;