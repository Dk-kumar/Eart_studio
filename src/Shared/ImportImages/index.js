export const GetImageCollections = (filePath) => {
  let imageCollections = {};
  const importImage = (files) => {
    return files.keys().forEach((key) => (imageCollections[key] = files(key)));
  };
  const exportImages = () => {
    return importImage(
      require.context(filePath.toString(), true, /\.(png|jpe?g|svg)$/)
    );
  };

  exportImages();

  return imageCollections;
};
