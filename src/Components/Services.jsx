import React from "react";
import { motion } from "framer-motion";


const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>Vocals</h3>
          <p>Hindustani Vocals</p>
          <p>Cranatic Vocals</p>
          <p>Playback Singing</p>
          <p>Music for Children</p>
        </motion.div>
        <motion.div
          className="serviceBox2" // Corrected class name
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
         
         <h3>Instruments</h3>
          <p>Piano</p>
          <p>Keyboard</p>
          <p>Guitar</p>
          <p>Tabla</p>
        </motion.div>
        <motion.div
          className="serviceBox3" // Corrected class name
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          
          <h3>Songs</h3>
          <p>Bollywood </p>
          <p>Devotional </p>
          <p>Sufi</p>
          <p>Ghazal</p>
          <p>Bhajan</p>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
         
         <h3>Admission Guidance</h3>
         <p>University of Delhi - Faculty of Music, Delhi</p>
         <p>Banaras Hindu University (BHU) - Faculty of Performing Arts, Varanasi</p>
<p>Rabindra Bharati University (RBU), Kolkata</p>
<p>Aligarh Muslim University (AMU) - Department of Music, Aligarh</p>
<p>University of Mumbai - Department of Music, Mumbai</p>
<p>Shantiniketan (Visva Bharati University), West Bengal</p>
<p>Maharaja Sayajirao University of Baroda - Faculty of Performing Arts, Vadodara</p>

        </motion.div>
      </section>
    </div>
  );
};

export default Services;
