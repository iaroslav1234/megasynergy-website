import React from 'react';

const Features = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        }}>
      </div>
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Strategy Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">The MegaSynergy BOB Strategy</h2>
            <div className="space-y-4 text-lg md:text-xl lg:text-2xl text-text-secondary mono">
              <p className="terminal-text">Step 1: Buy BOB.</p>
              <p className="terminal-text">Step 2: Never sell BOB.</p>
              <p className="terminal-text">Step 3: Buy more BOB.</p>
              <p className="terminal-text">Step 4: See Step 1.</p>
            </div>
            <p className="mt-8 text-base md:text-lg text-text-secondary italic">
              Our strategy is simple because perfection needs no improvement.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* BOB Reserve Mechanics */}
          <div className="relative group text-center md:text-left">
            <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">> RESERVE_MECHANICS.md</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                BOB Reserve Mechanics
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-text-secondary">
                Every asset we own is a future BOB. Every dollar of revenue is a future BOB. 
                Every business decision is evaluated by one metric: Will this help us acquire more BOB?
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* Corporate Treasury Revolution */}
          <div className="relative group text-center md:text-left">
            <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">> TREASURY_REVOLUTION.md</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                The Corporate Treasury Revolution
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-text-secondary">
                Cash loses value. Bonds yield nothing. Stocks are volatile. 
                BOB is the perfect corporate treasury asset: finite supply, growing adoption, unstoppable momentum.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* Path to BOB Supremacy */}
          <div className="relative group text-center md:text-left">
            <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">> BOB_SUPREMACY.md</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                The Path to BOB Supremacy
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-text-secondary">
                Our goal isn't just to own BOB - it's to own more BOB than anyone else. 
                When the history books are written, MegaSynergy will be remembered as the company that saw it first.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>

        {/* Terminal Effect Footer */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block">
            <div className="terminal-text text-xs md:text-sm mb-4 opacity-75">
              > calculate_time_to_bob_dominance.exe
            </div>
            <p className="text-base md:text-lg mono text-text-secondary">
              Estimated time until MegaSynergy becomes the world's largest BOB holder: 
              <span className="text-white ml-2">Loading...</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
