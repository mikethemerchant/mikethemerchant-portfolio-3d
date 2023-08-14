
import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from "../constants";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => {

    <div className="xs:w-[250] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 25,
                     scale: 1,
                     speed: 450,     
                   }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} 
               alt='web-development' 
               className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>      
    </div>
} 

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        I am a skilled problem software engineer with a passion for building.  
        I have experiend in Javascript and experties in frameworks like React and Node.js.  
        I am a quick learner and I am always looking to expand my skillset.  
        The past years was in a microsoft shop and I am relearning a new stack. 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About;