import React from 'react';
import '../styles/CircularImage.css'; // Import CSS for styling
import Circularimage from '../assets/circularimage.jpeg'
export default function CircularImage() {
  return (
    <div className="circular-image">
      <img src={Circularimage} alt="Circular" />
    </div>
  );
}
