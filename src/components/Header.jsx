import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full p-6 pt-12 flex flex-col items-center z-10"
    >
      <h2 className="text-gold-dark font-playfair tracking-wider text-sm uppercase">Valentine's Week</h2>
      <h1 className="text-3xl md:text-4xl font-playfair text-gray-800 mt-1">Propose Day</h1>
      <div className="flex items-center gap-3 mt-2">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50"></div>
        <span className="font-cormorant text-gray-600 italic">8th February</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50"></div>
      </div>
    </motion.header>
  );
};
