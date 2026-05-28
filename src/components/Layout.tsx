import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative text-slate-100">
      <div className="frosted-bg" />
      
      {/* Background Life Layer */}
      <div className="background-life">
        {/* Slowly pacing ambient tech connectivity network image */}
        <motion.img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt=""
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-screen pointer-events-none"
          animate={{
            scale: [1.05, 1.15, 1.05],
            rotate: [0, 2, 0],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="blob w-96 h-96 bg-blue-600 top-0 -left-20 animation-delay-2000" />
        <div className="blob w-72 h-72 bg-indigo-600 top-1/2 left-1/3 animation-delay-4000" />
        <div className="blob w-[30rem] h-[30rem] bg-blue-900 bottom-0 right-0" />
        <div className="blob w-64 h-64 bg-slate-800 top-1/4 right-1/4 animation-delay-2000" />
        
        {/* Subtle grid light flashes */}
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
