import NavBarContainer from "../../Component/NavBar/NavBar.container";
import { Values } from "../../Constant";
import "./Gallery.style.scss";

const Gallery = (props) => {
  const { menus, activeIndex } = props;
  const { getImages, setIndex } = props;

  const renderHeader = () => {
    return (
      <div className="header-wrapper">
        <div className="heading">
          <span className="heading-text">{Values.GalleryText}</span>
        </div>
        <div className="menu-wrapper">{menusList()}</div>
      </div>
    );
  };

  const menusList = () => {
    return (
      <>
        {menus.map((menu, index) => {
          return (
            <ul
              className={`menu-list ${index === activeIndex ? `active` : ""}`}
            >
              <li onClick={() => setIndex(index)}>{menu.title}</li>
            </ul>
          );
        })}
      </>
    );
  };

  const renderImages = () => {
    return (
      <>
        {renderHeader()}
        <div className="image-wrapper">
          {getImages().map((img) => {
            return <img src={img} alt="gallery.png" />;
          })}
        </div>
      </>
    );
  };

  return (
    <div className="gallery-container">
      <NavBarContainer />
      {renderImages()}
    </div>
  );
};

export default Gallery;
