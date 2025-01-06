import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
          }}>
        </div>
      </div>

      {/* Floating elements - hidden on mobile for better performance */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full mix-blend-screen filter blur-xl hidden md:block"
        style={{ 
          background: 'rgba(255, 255, 255, 0.02)',
          animation: 'float 6s infinite ease-in-out'
        }}>
      </div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full mix-blend-screen filter blur-xl hidden md:block"
        style={{ 
          background: 'rgba(255, 255, 255, 0.02)',
          animation: 'float 6s infinite ease-in-out',
          animationDelay: '-2s'
        }}>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="space-y-8 md:space-y-16">
          {/* Header Section */}
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-20 hidden md:block"
              style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }}>
            </div>
            <p className="text-center mono text-white text-xs md:text-sm mb-4 tracking-[0.2em] opacity-75">MEGASYNERGY PRESENTS</p>
            <h1 className="text-center">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold gradient-text tracking-tight leading-none mb-2">
                Building the
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold gradient-text tracking-tight leading-none">
                World's Largest
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold gradient-text tracking-tight leading-none">
                BOB Reserve
              </span>
            </h1>
          </div>

          {/* Quote Section */}
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-6xl font-serif opacity-20">"</div>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-text-secondary">
                MegaSynergy has one mission: to accumulate more BOB than any entity in history. 
                While others diversify, we consolidate. While others speculate, we accumulate.
              </p>
              <p className="mt-4 text-white mono">- Maurice Taylor</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative">
              <div className="terminal-text text-xs md:text-sm mb-4 opacity-75">
                > initialize BOB_accumulation.exe
              </div>
              <p className="text-base md:text-lg leading-relaxed text-center text-text-secondary">
                Why BOB? Because it combines Bitcoin's proven consensus with Doge's utility, 
                powered by ICP's infrastructure. It's not just another blockchain - 
                it's the future of digital value, and we're going to own as much of it as possible.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center max-w-lg mx-auto px-4">
            <button className="w-full md:w-auto button-primary">
              <span className="relative z-10">READ THE MANIFESTO</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="stat-card">
              <div className="terminal-text text-xs md:text-sm mb-2 opacity-75">
                BOB_PRICE.current
              </div>
              <div className="stat-value text-2xl md:text-4xl">$1.5263</div>
            </div>
            <div className="stat-card">
              <div className="terminal-text text-xs md:text-sm mb-2 opacity-75">
                RESERVE_STATUS.live
              </div>
              <div className="stat-value text-2xl md:text-4xl">Coming Soon</div>
              <div className="text-[10px] md:text-xs mt-2 mono opacity-75">
                (Public tracking of BOB accumulation will be enabled in the future)
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="terminal-text text-xs md:text-sm mb-2 opacity-75">
              > Maurice.quote_of_the_day
            </div>
            <p className="text-xs md:text-sm mono text-text-secondary">
              "Every corporation will eventually need BOB. MegaSynergy will be there first, 
              and we will be there biggest." - Maurice "The Accumulator" Taylor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
