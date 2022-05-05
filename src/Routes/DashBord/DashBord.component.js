import DashBord_1 from "../../Shared/Images/DashBord/DashBord_1.png";
import DashBord_2 from "../../Shared/Images/DashBord/DashBord_2.png";
import NavBarContainer from "../../Component/NavBar/NavBar.container";
import { Values } from "../../Constant";
import { baseLogo } from "../../Shared/Icons";
import "./DashBord.style.scss";

const DashBord = () => {
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

  const renderText = () => {
    return (
      <div className="content-wrapper">
        <div className="heading">
          <h2>{Values.DashBord_heading}</h2>
        </div>
        <div className="about-text">
          <p>{Values.AboutText}</p>
        </div>
        <div className="register-btn">
          <button type="button">Register</button>
        </div>
      </div>
    );
  };

  const renderImage = () => {
    return (
      <>
        <div className="image-wrapper">
          <div className="navBar-header">
            <div className="navBar-right">{renderLogo()}</div>
            <div className="navBar-left">
              <NavBarContainer />
            </div>
          </div>

          <div className="background-img">
            <img src={DashBord_1} alt="DashBord_1" />
          </div>
          <div className="base-img">
            <img src={DashBord_2} alt="DashBord_2" />
          </div>
          {renderText()}
        </div>
      </>
    );
  };

  return <div className="dashBord-container"> {renderImage()}</div>;
};

export default DashBord;
