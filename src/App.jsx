import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Heart } from 'lucide-react'
import { Header } from './components/Header'
import { FloatingHearts } from './components/FloatingHearts'
import { RingBox } from './components/RingBox'
import { PhotoFrame } from './components/PhotoFrame'

function App() {
  const [stage, setStage] = useState(0); 
  // 0: Closed Box
  // 1: Box Open + Message
  // 2: Say Yes Clicked + Photo Frame

  const [noCount, setNoCount] = useState(0);
  const [noButtonText, setNoButtonText] = useState("No");

  const romanticPleas = [
    "Are you sure?",
    "Think again, my love!",
    "Don't break my heart...",
    "But I love you so much!",
    "Pretty please?",
    "Look into my eyes...",
    "I promise to be good!",
    "Just one chance?",
    "You are my everything!",
    "Say yes, please?"
  ];

  const handleBoxOpen = () => {
    if (stage === 0) {
      setStage(1);
    }
  };

  const handleSayYes = () => {
    setStage(2);
  };

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
    const randomIndex = Math.floor(Math.random() * romanticPleas.length);
    setNoButtonText(romanticPleas[randomIndex]);
  };

  const handleReset = () => {
    setStage(0);
    setNoCount(0);
    setNoButtonText("No");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-ivory via-blush-light to-blush overflow-hidden font-cormorant flex flex-col">
      {/* Background Elements */}
      <FloatingHearts intensity={stage === 2 ? 'high' : 'normal'} />
      
      {/* Navigation */}
      {stage > 0 && (
        <div className="absolute top-6 left-6 z-50">
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full hover:bg-white/50"
          >
            <ArrowLeft size={20} />
            <span className="font-playfair text-sm">Back</span>
          </button>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10 w-full max-w-lg mx-auto">
        
        {/* Stage 0 & 1: Ring Box */}
        <div className={`transition-all duration-1000 ${stage === 2 ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}>
          <RingBox isOpen={stage >= 1} onOpen={handleBoxOpen} />
        </div>

        {/* Stage 1: Proposal Message */}
        <AnimatePresence>
          {stage >= 1 && stage < 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 text-center w-full"
            >
              <h2 className="text-3xl font-playfair text-gray-800 mb-6 px-2">Will you be my valentine my love?</h2>
              
              <div className="text-lg text-gray-700 font-cormorant leading-relaxed space-y-4 mb-8 px-2 text-left max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rose-300 scrollbar-track-transparent">
                <p>It is yet another proposal of ours to each other right?</p>
                <p>The way I see it? This is the moment I've had for the last 4 years and trust me every moment of ours since Nov 13 2021 has led us to cherish this very moment.</p>
                <p>Proposals are the most formal way of having asking your mi amor they say.</p>
                <p>Here I am. With one more cute proposal for this week.</p>
                <p>Home filled with blushes. Rooms filled with our voices. Couches with you and me cuddled.</p>
                <p>And us making us loved over and over again.</p>
                <p>That is my proposal to you senora.</p>
                
                <div className="py-4 text-center font-playfair font-semibold text-xl text-rose-800">
                  <p>Will you?</p>
                  <p>Be my Valentine one more time my love??</p>
                </div>

                <div className="text-right italic text-base text-gray-600 mt-4 border-t border-rose-200 pt-4">
                  <p>With infinite rings more to gift.</p>
                  <p>With lots of kissies and wraps.</p>
                  <p className="mt-2 font-bold text-rose-700">Your Ring Man.</p>
                  <p>Yours only,</p>
                  <p>Mr.Innocent.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSayYes}
                  style={{ transform: `scale(${1 + noCount * 0.1})` }}
                  className="bg-gradient-to-r from-blush-dark to-pink-400 text-white font-playfair text-xl py-3 px-12 rounded-full shadow-lg shadow-pink-200/50 flex items-center gap-2 hover:shadow-pink-300/60 transition-all border border-white/20 relative z-50 whitespace-nowrap"
                >
                  <span>Yes, Forever!</span>
                  <Heart size={20} fill="currentColor" />
                </motion.button>

                <motion.button
                  whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
                  onClick={handleNoClick}
                  className="bg-white/80 text-gray-600 font-playfair text-lg py-3 px-8 rounded-full shadow-sm hover:bg-white hover:text-rose-600 transition-all border border-gray-200 backdrop-blur-sm z-40"
                >
                  {noButtonText}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: Confirmation & Photo Frame */}
        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center w-full"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-playfair text-gray-800 mb-2">This is the beginning of us.</h2>
              </motion.div>
              
              <PhotoFrame />
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  )
}

export default App
