import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../utils/styles/styles";
import Navbar from "../components/Navbar";
import { d_serviceCard } from "../data/about";

function ServiceCard(){
  return (
    <>
      {d_serviceCard.map((card, index) => (
        <motion.div
          key={index}
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

            <p className='text-white text-[20px] font-bold text-center'>
              {card.title}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-black">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-white text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <ServiceCard />
      </div>
    </>
    
  )
}

export default About;