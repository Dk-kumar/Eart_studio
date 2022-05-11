import { Link } from "react-router-dom";
import { baseLogo } from "../../Shared/Icons";
import "./NavBar.style.scss";

const NavBar = (props) => {
  const { links } = props;

  const renderLogo = () => {
    return (
      <div className="base-logo">
        <span className="logo">{baseLogo()}</span>
        <span className="title">
          ART <span className="sub-title">STUDIOS</span>
        </span>
      </div>
    );
  };

  const renderNavLinks = () => {
    return (
      <nav className="navBar-wrapper">
        {links.map((res, index) => {
          return (
            <ul key={index}>
              <li>
                <Link to={res.path}>{res.text}</Link>
              </li>
            </ul>
          );
        })}
      </nav>
    );
  };

  return (
    <div className="navBar-container">
      {renderLogo()}
      {renderNavLinks()}
    </div>
  );
};

export default NavBar;
