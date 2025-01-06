import React from 'react';

const Stats = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {/* BOB Reserve Growth */}
          <div className="relative group text-center md:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">BOB_RESERVE.status</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">BOB Reserve Growth</h3>
              <p className="text-lg md:text-xl gradient-text">Accumulation in Progress</p>
              <p className="text-base md:text-lg text-text-secondary">
                Watch this space. Every day, every week, every month - the number only goes up.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="relative group text-center md:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">MARKET_SCAN.results</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Market Intelligence</h3>
              <p className="text-lg md:text-xl gradient-text">23,981 Potential Sellers</p>
              <p className="text-base md:text-lg text-text-secondary">
                Each one a future MegaSynergy BOB acquisition opportunity. We're patient. We're persistent. We're permanent.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* BOB Supply Analysis */}
          <div className="relative group text-center md:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="terminal-text text-xs md:text-sm opacity-75">SUPPLY_ANALYSIS.total</div>
              <h3 className="text-xl md:text-2xl font-bold text-white">BOB Supply Analysis</h3>
              <p className="text-lg md:text-xl gradient-text">21 Million BOB Total</p>
              <p className="text-base md:text-lg text-text-secondary">
                And MegaSynergy intends to acquire as much of it as possible. Not for speculation. Not for trading. For permanent holding.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block">
            <div className="terminal-text text-xs md:text-sm mb-4 opacity-75">
              > display_accumulation_target.exe
            </div>
            <p className="text-base md:text-lg mono text-text-secondary">
              Target BOB holdings: <span className="text-white">21,000,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
