import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMouse } from 'react-use';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const canvasRef = useRef(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  // Particle system setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const particleCount = 50;
    const connectionDistance = 150;
    const mouseInfluenceRadius = 200;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 120 // Green to blue hues
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Mouse influence
        const dx = docX - particle.x;
        const dy = docY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
          particle.x -= dx * force * 0.02;
          particle.y -= dy * force * 0.02;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 50%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, ${opacity})`;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, [docX, docY]);

  // Terminal animation
  useEffect(() => {
    if (showTerminal) return; // Prevent multiple runs
    
    const timer = setTimeout(() => {
      setShowTerminal(true);
      const lines = [
        'Analyzing market conditions...',
        'BOB accumulation strategy: ACTIVE',
        'Current status: ACCUMULATING'
      ];
      
      lines.forEach((line, index) => {
        setTimeout(() => {
          setTerminalLines(prev => [...prev, line]);
        }, index * 800);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [showTerminal]);

  return (
    <div ref={ref} className="relative">
      <section className="relative min-h-screen flex items-center justify-center bg-black px-8 lg:px-24 pt-24">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.3 }}
        />

        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-5" />

        <div className="relative w-full max-w-4xl flex flex-col items-center text-center">
          {/* Initialize Command with Typewriter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-black/90 rounded-lg px-4 py-2 mb-3"
          >
            <div className="text-sm mono text-white/75">
              <Typewriter
                options={{
                  strings: ['> initialize_megasynergy.exe'],
                  autoStart: true,
                  cursor: '▋',
                  delay: 50
                }}
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-3"
          >
            Building the World's<br />
            Largest BOB Reserve
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl text-white/75 mb-6"
          >
            While others diversify, we consolidate. While others speculate, we accumulate.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 text-white bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
            >
              READ THE MANIFESTO
            </motion.button>
          </motion.div>

          {/* Terminal Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showTerminal ? 1 : 0, y: showTerminal ? 0 : 20 }}
            className="relative w-full max-w-2xl"
          >
            {/* Terminal Window */}
            <div className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="text-xs text-white/50 ml-2">megasynergy_accumulation.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white/75">init_accumulation_protocol</span>
                </div>
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-green-400">></span>
                    <span className="text-white/75">{line}</span>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="h-2 w-full bg-black rounded overflow-hidden mt-4"
                >
                  <motion.div 
                    animate={{ 
                      width: ["0%", "45%"],
                      transition: { duration: 2, ease: "easeOut" }
                    }}
                    className="h-full bg-gradient-to-r from-green-500/50 to-blue-500/50"
                  />
                </motion.div>
              </div>
            </div>

            {/* Status Cards */}
            <motion.div 
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 right-4 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="text-xs text-white/75">BOB_RESERVE.status</div>
              <div className="text-xl font-bold text-white">Accumulating</div>
            </motion.div>

            <motion.div 
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 left-4 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="text-xs text-white/75">TARGET_STATUS</div>
              <div className="text-xl font-bold text-white">21M BOB</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
