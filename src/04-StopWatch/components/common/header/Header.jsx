import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

  return (
    <div className="header">
      <NavLink to="/">
        StopWatch
      </NavLink>
      <NavLink to="/timer">
        Timer
      </NavLink>
    </div>
  );

};

export default Header;
