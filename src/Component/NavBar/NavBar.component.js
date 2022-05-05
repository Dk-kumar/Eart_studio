import { Link } from "react-router-dom";
import "./NavBar.style.scss";

const NavBar = (props) => {
  const { links } = props;

  const renderNavLinks = () => {
    return (
      <nav className="navBar-wrapper">
        {links.map((res) => {
          return (
            <ul>
              <li>
                <Link to={res.path}>{res.text}</Link>
              </li>
            </ul>
          );
        })}
      </nav>
    );
  };

  return <div className="navBar-container">{renderNavLinks()}</div>;
};

export default NavBar;
