import React from "react";
import { motion } from "framer-motion";
import vg from '../assets/spsgal1.png';
import vg2 from '../assets/spsgal2.png';
import vg3 from '../assets/spsgal3.png';

const Services = () => {
  // Array of images
  const images = [vg, vg2, vg3];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <motion.img
          key={index}
          className="pict"
          src={image}
          alt="Graphics"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}   // Scale down on tap
          transition={{ duration: 0.5 }} // Smooth transition duration
        />
      ))}
    </div>
  );
};

export default Services;
