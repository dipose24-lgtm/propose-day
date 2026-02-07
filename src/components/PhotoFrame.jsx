import { motion } from 'framer-motion';
import defaultPhoto from '../assets/our-moment.jpg';

export const PhotoFrame = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center mt-8"
    >
      <div className="relative w-full max-w-[28rem] bg-white shadow-[0_0_50px_rgba(255,215,0,0.4)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 rounded-sm p-4">
        {/* Tape effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/90 rotate-1 shadow-sm backdrop-blur-sm opacity-80 z-20"></div>
        
        {/* Image Container - Dynamic Height */}
        <div className="w-full bg-gray-100 overflow-hidden border border-gray-100 relative">
           <img src={defaultPhoto} alt="Our Forever Moment" className="w-full h-auto object-contain block" />
        </div>

        {/* Caption inside the frame (Polaroid style) - In Flow */}
        <div className="w-full px-4 pt-6 pb-2 text-center">
          <p className="font-playfair text-xl text-gray-900 font-medium italic leading-relaxed tracking-wide">
            "The first pic of ours for real. Standing next to each other. I'm making the very same proposal as the one my heart longed to make to you that day"
          </p>
        </div>
      </div>
      
      {/* Remove external caption since it's now inside */}
    </motion.div>
  );
};
