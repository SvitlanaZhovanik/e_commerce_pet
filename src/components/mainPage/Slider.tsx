'use client';
import { motion } from 'motion/react';

import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';

const slides = [<SlideOne key={'slide1'} />, <SlideTwo key={'slide2'} />];

const Slider = () => {
  return (
    <div className='relative mb-10 h-20 w-full md:mb-15 md:h-40 xl:mb-20 xl:h-50'>
      {slides.map((slide, index) => (
        <motion.div
          key={`slide${index}`}
          className='absolute top-0 left-0 h-full w-full'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: slides.length * 7 - 7,
            delay: index * 7,
          }}
        >
          {slide}
        </motion.div>
      ))}
    </div>
  );
};

export default Slider;
