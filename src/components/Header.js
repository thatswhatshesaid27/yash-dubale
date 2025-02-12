import React from 'react';
import logo from '../assets/final_who_cropped.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Header = () => {
  return <header className=' py-8'>
   <motion.div 
   variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3
            }} 
   className="container mx-auto flex flex-col items-center justify-center min-h-screen">
   <div className="text-center">

    <img src={logo} alt="Logo" />

  {/* <button className="btn btn-sm mt-4">Work with me</button> */}
  <a 
    href="/assets/FinalResume_YashDubale.pdf" 
    download="FinalResume_YashDubale.pdf"
    className="btn btn-sm mt-3 px-6 py-4 w-auto inline-block rounded-2xl"
  >
    Resume.pdf
  </a>
  </div>
</motion.div>

    </header>;
};

{/* #38b6ff */}

export default Header;
