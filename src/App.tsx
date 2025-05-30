import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brush, Layers, Palette, Monitor, Github, Disc as Discord, Mail, Sun, Moon, Puzzle, Heart } from 'lucide-react';
import { cn } from './lib/utils';

import bolt_black from "./assets/black_circle_360x360.png"
import bolt_white from "./assets/white_circle_360x360.png"
import baka_line from "./assets/baka_line.gif"
import baka_ref from "./assets/baka_ref.png"
import baka from "./assets/baka.gif"

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800",
      "text-gray-900 dark:text-gray-100"
    )}>
      {/* Bottom‑right theme‑aware logo */}
      <div className="fixed bottom-[2vw] right-[2vw] z-50">
        <a
          href="https://bolt.new"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 md:w-[6vw] md:h-[6vw] sm:w-[4vw] sm:h-[4vw] opacity-80 hover:opacity-100 transition-opacity"
        >
          <img
            src={theme === 'light'
              ? bolt_black
              : bolt_white}
            alt="Bolt link badge"
            className="w-full h-full object-contain"
          />
        </a>
      </div>
      <header className="fixed w-full top-0 z-50 transition-colors duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brush className="h-8 w-8 text-primary-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Kiseki
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <a 
              href="https://discord.gg/u5eBYN8Qns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section 
          className="w-full px-4 py-16 text-center inset-0 bg-gradient-to-br from-primary-200 via-secondary-200 to-primary-300 dark:from-primary-900/30 dark:via-secondary-900/30 dark:to-primary-900/30 "
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent"
            variants={fadeIn}
          >
            Automatic Line Art Colorization
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Transform your line art animations effortlessly with AI-powered colorization based on reference images
          </motion.p>
          
          <motion.div 
            className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-[60%] mx-auto"
            variants={fadeIn}
          >
            <div className="relative group overflow-hidden rounded-lg">
              <img src={baka_line} alt="Line Art" className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold">Line Art</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src={baka_ref} alt="Reference" className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold">Reference</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img src={baka} alt="Result" className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold">Result</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <a 
              href="https://discord.gg/u5eBYN8Qns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <Discord className="w-5 h-5" />
              Join Community
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose <span className="text-primary-500">Kiseki</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className=" bg-primary-100 dark:bg-primary-900/50 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 animate-float">
                  <Palette className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Colorization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced machine learning algorithms ensure accurate and consistent colorization across your animation frames.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className=" bg-secondary-100 dark:bg-secondary-900/50 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '1s' }}>
                  <Layers className="w-8 h-8 text-secondary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reference-Based</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Color your animations based on reference images, maintaining consistency with your artistic vision.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className=" bg-primary-100 dark:bg-primary-900/50 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '2s' }}>
                  <Monitor className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Time-Saving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automate the colorization process, reducing hours of manual work to just minutes.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Plugins & Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Enhance Your Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                    <Puzzle className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Plugins</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Seamlessly integrate Kiseki with your favorite art software
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Clip Studio Paint Extension (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Adobe Animate Plugin (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Toon Boom Harmony And More..!</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/50 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Community</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join our growing community of artists and developers
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://discord.gg/u5eBYN8Qns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Discord className="w-5 h-5" />
                      <span>Join our Discord community</span>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/radna0/Kiseki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      <span>Contribute on GitHub</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold">v0.0.1 Release</h3>
                  <p className="text-gray-500 dark:text-gray-400">May 29, 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Initial release focusing on improving existing works and establishing core functionality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 py-12">
        <div className="w-full ">
          <div className="px-10 w-full flex flex-col md:flex-row items-center justify-evenly gap-8">
            <div className="flex items-center gap-2">
              <Brush className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold">Kiseki</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/radna0/Kiseki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://discord.gg/u5eBYN8Qns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Discord className="w-6 h-6" />
              </a>
              <a 
                href="mailto:isekaicreationofficial@gmail.com"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              <p>Contact: <code>_radna</code> on Discord</p>
              <p className="mt-2">© 2025 Kiseki. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;