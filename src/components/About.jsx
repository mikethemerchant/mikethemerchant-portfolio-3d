import { motion } from 'framer-motion';
import { styles } from '../styles';

import { fadeIn, textVariant } from "../utils/motion";

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
    </>
  )
}

export default About