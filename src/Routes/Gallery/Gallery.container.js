import { useState } from "react";
import Gallery from "./Gallery.component";

const GalleryContainer = () => {
  const menus = [
    { id: 1, title: "All" },
    { id: 2, title: "Photos" },
    { id: 3, title: "Videos" },
  ];

  const [activeIndex, setIndex] = useState(0);

  const containerStates = {
    menus: menus,
    activeIndex: activeIndex,
  };

  const containerFunctions = {
    getImages: () => getImages(),
    setIndex: (index) => setIndex(index),
  };

  const getImages = () => {
    let imageCollection = {};

    const importImages = (files) => {
      return files.keys().forEach((key) => (imageCollection[key] = files(key)));
    };
    importImages(
      require.context(
        "../../Shared/Images/Gallery",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    return Object.values(imageCollection);
  };

  return <Gallery {...containerStates} {...containerFunctions} />;
};

export default GalleryContainer;
