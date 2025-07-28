import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3
        }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        <motion.div
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3
         }} 
        className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I'm Web developer with over 1 year of experience</h3>
          <p className='mb-6'>
          Versatile web developer skilled in crafting responsive and efficient web applications. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), with additional experience in Python and embedded coding. Adept at using modern frontend tools like Redux, HTML, CSS, Tailwind CSS, and Vue, as well as backend technologies such as MySQL and SQL. Dedicated to delivering innovative solutions with a focus on clean code and seamless user experiences.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-teritiary text-gradient mb-2'>
                { inView ?
                  <CountUp start={0} end={2} duration={5}/>: null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of<br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-teritiary text-gradient mb-2'>
                { inView ?
                  <CountUp start={0} end={8} duration={5}/>: null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>
                completed
              </div>
            </div>
           
          </div>
          <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg rounded-2xl'  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact me</button>
            
            </div>
        </motion.div>
       

      </div>
    </div>
  </section>;
};

export default About;
