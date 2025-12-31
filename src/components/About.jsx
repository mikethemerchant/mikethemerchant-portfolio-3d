
import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from "../constants";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250] w-25 h-25 ">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[35px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[35px] py-2 px-2 min-h-[200px] min-w-[300px] 
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} 
               alt='web-development' 
               className="w-16 h-16 object-contain" 
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>      
    </Tilt>
  )

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
        I’m a senior software engineer focused on modernizing legacy systems, automating delivery pipelines, and reducing operational risk.
        
        Most of my work lives at the intersection of legacy applications, Azure DevOps CI/CD, and pragmatic AI assistance — bringing structure, visibility, and repeatability to environments that grew organically over many years.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");