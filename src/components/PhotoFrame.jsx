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
      <div className="relative w-72 h-auto p-3 bg-white shadow-[0_0_30px_rgba(255,215,0,0.3)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 rounded-sm">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 relative">
           <img src={defaultPhoto} alt="Our Forever Moment" className="w-full h-full object-cover" />
        </div>
        {/* Tape effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/80 rotate-1 shadow-sm backdrop-blur-sm opacity-60"></div>
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 font-playfair text-xl text-gray-800 italic text-center max-w-md px-4 leading-relaxed"
      >
        "The first pic of ours for real. Standing next to each other. I'm making the very same proposal as the one my heart longed to make to you that day"
      </motion.p>
    </motion.div>
  );
};
