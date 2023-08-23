import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image}) => {

  return (
   <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
        <p>{testimonial}</p>
        <img src={image}/>
        <p>{name}</p>
        <p>{designation}</p>
        <p>{company}</p>
      </div>
   </>
  )}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonails.</h2>
        </motion.div>
      </div>
      <div>
        {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={`testimonial-${index}`}
              index={index}
              {...testimonial}
            />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");