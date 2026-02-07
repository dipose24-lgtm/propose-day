import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FloatingHearts = ({ intensity = 'normal' }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      setHearts((prev) => [...prev.slice(-15), { id, x: Math.random() * 100 }]);
    }, intensity === 'high' ? 300 : 800);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0, scale: 0.5 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{ duration: 10, ease: 'linear' }}
          className="absolute"
        >
          <Heart className="text-pink-300 fill-pink-200" size={Math.random() * 20 + 10} />
        </motion.div>
      ))}
    </div>
  );
};
