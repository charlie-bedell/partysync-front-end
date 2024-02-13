import React from 'react';

const styles = {
  ImageContainer: {
    position: 'absolute', 
    bottom: '13px', 
    left: '-106px',
    width: '436px',
    height: '400px',
    borderRadius: '10000px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/535ab8b3-e755-4093-9a43-1cedae870e52.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
      zIndex: -99,
    }} />
  );
};

export default Image;
