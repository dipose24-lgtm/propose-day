import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const RingBox = ({ isOpen, onOpen }) => {
  return (
    <div className="relative cursor-pointer group perspective-1000" onClick={onOpen}>
      {/* Glow / Aura */}
      <div className={`absolute inset-0 bg-gold/20 blur-3xl rounded-full transition-opacity duration-1000 ${isOpen ? 'opacity-30 scale-125' : 'opacity-10 animate-pulse-slow'}`} />

      {/* The Box */}
      <div className="relative w-40 h-40 mx-auto transform-style-3d">
        
        {/* --- BASE OF THE BOX --- */}
        <div className="absolute bottom-0 w-full h-1/2 bg-[#881337] rounded-b-xl shadow-2xl z-20 overflow-hidden border-b-2 border-r-2 border-l-2 border-black/20">
            {/* Velvet Texture Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            
            {/* Gold Trim at the top edge of base */}
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600" />

            {/* Interior Cushion (Visible part) */}
            <div className="absolute top-1 inset-x-2 bottom-2 bg-[#500724] rounded-b-lg shadow-inner flex items-center justify-center">
                 {/* Ring Slit Shadow */}
                 <div className="w-20 h-1 bg-black/50 rounded-full blur-[1px] mt-4" />
            </div>
        </div>

        {/* --- THE RING (Pops up) --- */}
        <motion.div 
          initial={{ y: 25, scale: 0.8, opacity: 0 }}
          animate={{ y: isOpen ? -45 : 25, scale: isOpen ? 1.2 : 0.8, opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 1.2, type: "spring", bounce: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center"
        >
          {/* Ring Band */}
          <div className="absolute bottom-0 w-12 h-12 border-[4px] border-yellow-500 rounded-full shadow-md bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 55%)', transform: 'rotateX(50deg)' }}>
            {/* Inner Gold Reflection */}
            <div className="absolute inset-0 rounded-full border-[1px] border-white/50 opacity-50"></div>
          </div>
          
          {/* Diamond Setting */}
          <div className="absolute bottom-8 w-14 h-14 flex items-center justify-center">
              {/* Prongs */}
              <div className="absolute w-1.5 h-3 bg-yellow-600 rounded-full top-3 left-3.5 rotate-[-45deg] z-10" />
              <div className="absolute w-1.5 h-3 bg-yellow-600 rounded-full top-3 right-3.5 rotate-[45deg] z-10" />
              <div className="absolute w-1.5 h-3 bg-yellow-600 rounded-full bottom-3 left-3.5 rotate-[45deg] z-10" />
              <div className="absolute w-1.5 h-3 bg-yellow-600 rounded-full bottom-3 right-3.5 rotate-[-45deg] z-10" />
              
              {/* The Stone */}
              <div className="relative w-10 h-10 bg-blue-50 rotate-45 shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-blue-200 flex items-center justify-center overflow-hidden z-20">
                 {/* Diamond Shine Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-200 opacity-90" />
                 
                 {/* Internal Facets (Cross) */}
                 <div className="absolute w-full h-[1px] bg-blue-300/60" />
                 <div className="absolute h-full w-[1px] bg-blue-300/60" />
                 
                 {/* Central Table (Inner Square) */}
                 <div className="absolute w-5 h-5 border border-blue-300/50 bg-white/20 backdrop-blur-[1px]" />
              </div>
              
              {/* Sparkles */}
              <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-5 -right-5 text-white z-30"
              >
                  <Sparkles size={24} fill="white" className="drop-shadow-lg" />
              </motion.div>
          </div>
        </motion.div>


        {/* --- LID OF THE BOX --- */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? -100 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 w-full h-1/2 origin-bottom z-30 transform-style-3d"
        >
          {/* LID OUTSIDE (Front Face) */}
          <div className="absolute inset-0 bg-[#9d174d] rounded-t-xl backface-hidden border-t-2 border-r-2 border-l-2 border-white/10 shadow-lg flex items-center justify-center">
              {/* Velvet Texture */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 pointer-events-none rounded-t-xl" />
              {/* Gold Latch */}
              <div className="absolute bottom-0 w-8 h-3 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-t-md shadow-md border border-yellow-700" />
          </div>

          {/* LID INSIDE (Back Face - Visible when open) */}
          <div className="absolute inset-0 bg-[#fdf2f8] rounded-t-xl backface-hidden rotate-x-180 border-2 border-[#9d174d] flex items-center justify-center overflow-hidden">
               {/* Satin Texture */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white via-pink-50 to-pink-100 opacity-80" />
               {/* Brand/Logo Placeholder */}
               <span className="font-playfair text-[#9d174d] text-xs font-bold tracking-widest opacity-60 relative z-10">FOREVER</span>
               {/* Crease lines for satin */}
               <div className="absolute w-[150%] h-4 bg-white/40 rotate-12 blur-md top-2" />
          </div>
        </motion.div>

        {/* --- FRONT FACE OF BASE (For 3D effect when closed) --- */}
        {/* We need a front face to cover the gap if we rotate, but since we are just opening lid, the base is static. 
            However, to make the lid look like it sits ON the base, the base needs to be separate. 
            We handled Base above. 
        */}

      </div>
      
      {/* Text Hint */}
      <motion.p 
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 10 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 font-cormorant text-xl text-gray-500 italic tracking-wide text-center"
      >
        Tap the box
      </motion.p>
    </div>
  );
};
