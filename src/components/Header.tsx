import { NavLink } from 'react-router-dom';
import ROUTES from '../router/routes';

const Header = () => {
  return (
    <header className="bg-gray-500 text-white shadow-md">
      <div className="container flex items-center justify-between h-[50px]">
        <h2 className="font-semibold drop-shadow-[0_3px_7px_#e5e7eb]">
          GitHub Search
        </h2>
        <nav className="*:pl-6">
          <NavLink to={ROUTES.HOME}>Home</NavLink>
          <NavLink to={ROUTES.FAVOURITES}>Favourites</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
