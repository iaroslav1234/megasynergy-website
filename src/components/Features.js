import React from 'react';

const Features = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Strategy Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
            <div className="terminal-text text-sm text-white/75 mb-4">
              > cat strategy.md
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <p className="text-sm mono gradient-text">Buy BOB</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <p className="text-sm mono gradient-text">HODL BOB</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-sm mono gradient-text">More BOB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BOB Reserve Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="terminal-text text-sm text-white/75">RESERVE.md</div>
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">BOB Reserve</h3>
                <div className="flex-grow">
                  <p className="text-sm text-white/75 mb-4">Every asset we own is a future BOB.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-white/50">Asset conversion: Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-white/50">BOB accumulation: In Progress</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Treasury Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="terminal-text text-sm text-white/75">TREASURY.md</div>
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏦</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Treasury Revolution</h3>
                <div className="flex-grow">
                  <p className="text-sm text-white/75 mb-4">BOB is the perfect treasury asset.</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>Cash</span>
                      <span className="text-red-400">Loses Value ↓</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>Bonds</span>
                      <span className="text-red-400">Zero Yield ↓</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>BOB</span>
                      <span className="text-green-400">Moon Soon ↑</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Supremacy Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="terminal-text text-sm text-white/75">SUPREMACY.md</div>
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-xl">👑</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">BOB Supremacy</h3>
                <div className="flex-grow">
                  <p className="text-sm text-white/75 mb-4">Own more BOB than anyone else.</p>
                  <div className="relative h-20">
                    <div className="absolute bottom-0 left-0 w-full h-16 flex items-end justify-around">
                      <div className="w-4 h-8 bg-white/10 rounded-t"></div>
                      <div className="w-4 h-12 bg-white/10 rounded-t"></div>
                      <div className="w-4 h-16 bg-gradient-to-t from-green-500/50 to-blue-500/50 rounded-t"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-around">
                      <span className="text-[10px] text-white/50">Others</span>
                      <span className="text-[10px] text-white/50">Whales</span>
                      <span className="text-[10px] text-white/50">MegaSynergy</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/75">BOB Accumulation in Progress</span>
              </div>
              <div className="h-4 w-32 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500/50 to-blue-500/50"
                  style={{ width: '45%', transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
