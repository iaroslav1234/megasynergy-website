import React from 'react';

const Stats = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        }}>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
          {/* BOB Reserve Growth */}
          <div className="relative group text-center">
            <div className="space-y-4">
              <div className="terminal-text text-xs sm:text-sm opacity-75">> BOB_RESERVE.status</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">BOB Reserve Growth</h3>
              <p className="text-base sm:text-lg gradient-text">Accumulation in Progress</p>
              <p className="text-sm sm:text-base text-text-secondary">
                Watch this space. Every day, every week, every month - the number only goes up.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto"></div>
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="relative group text-center">
            <div className="space-y-4">
              <div className="terminal-text text-xs sm:text-sm opacity-75">> MARKET_SCAN.results</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Market Intelligence</h3>
              <p className="text-base sm:text-lg gradient-text">23,981 Potential Sellers</p>
              <p className="text-sm sm:text-base text-text-secondary">
                Each one a future MegaSynergy BOB acquisition opportunity. We're patient. We're persistent. We're permanent.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto"></div>
            </div>
          </div>

          {/* BOB Supply Analysis */}
          <div className="relative group text-center">
            <div className="space-y-4">
              <div className="terminal-text text-xs sm:text-sm opacity-75">> SUPPLY_ANALYSIS.total</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">BOB Supply Analysis</h3>
              <p className="text-base sm:text-lg gradient-text">21 Million BOB Total</p>
              <p className="text-sm sm:text-base text-text-secondary">
                And MegaSynergy intends to acquire as much of it as possible. Not for speculation. Not for trading. For permanent holding.
              </p>
              <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="inline-block">
            <div className="terminal-text text-xs sm:text-sm mb-3 opacity-75">
              > display_target.exe
            </div>
            <p className="text-sm sm:text-base mono text-text-secondary">
              Target BOB: <span className="text-white">21,000,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
