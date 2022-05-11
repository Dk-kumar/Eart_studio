import dashBord from "../../Shared/Images/DashBord/dashBord.png";
import NavBarContainer from "../../Component/NavBar/NavBar.container";
import { Values } from "../../Constant";
import "./DashBord.style.scss";

const DashBord = () => {
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
          <div>
            <NavBarContainer />
          </div>
          <img src={dashBord} alt="dashBord.png" />
        </div>
        {renderText()}
      </>
    );
  };

  return <div className="dashBord-container"> {renderImage()}</div>;
};

export default DashBord;
