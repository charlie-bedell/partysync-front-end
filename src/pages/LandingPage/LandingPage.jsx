import React from 'react';
import Text from '../../components/LandingPageText/LandingPageText'
import Button from '../../components/LandingPageButton/LandingPageButton'

const styles = {
  ImageContainer: {
    position: 'absolute', // Ensure it's positioned absolutely relative to its nearest positioned ancestor or the body
    top: '0',
    left: '0',
    width: '100vw', // 100% of the viewport's width
    height: '100vh', // 100% of the viewport's height
    borderRadius: '0', // Adjust as needed, but for full screen, a border radius might not be necessary
    // backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1', // Ensure it's behind other content, adjust as necessary
  },
};


const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/9806d445-d461-4ac5-9d5d-ffb733e6b896.png',
}

const Image = (props) => {
  return (
    <>
    <Text />
    <Button />
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
    </>
  );
};

export default Image;