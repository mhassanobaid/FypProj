import React from 'react';

const Map = ({ location }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

  const handleClick = () => {
    window.open(googleMapsLink, '_blank');
  };
  const containerStyle = {
    position: 'absolute',
    top: '178px', // Adjust as needed
    left: '0px',
    width: '21%', // This makes the component occupy the left half of the screen
    height: '260px', // Adjust as needed
    border: '1px solid #ddd', // Optional: add border
    boxSizing: 'border-box', // Ensure padding/border do not affect total width
  };
  return (
    <div style={containerStyle}>
      <iframe
        title="Google Map"
        src={googleMapsUrl}
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        onClick={handleClick}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Map;
