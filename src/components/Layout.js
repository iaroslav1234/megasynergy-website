import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MegaSynergy - Building the World's Largest BOB Reserve</title>
        <meta name="description" content="MegaSynergy is dedicated to building the world's largest BOB reserve. Join us in the great BOB accumulation." />
      </Head>

      <nav className="fixed w-full z-50 backdrop-blur-md bg-surface/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                MegaSynergy
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/strategy" className="nav-link">Strategy</Link>
              <Link href="/reserve" className="nav-link">BOB Reserve</Link>
              <Link href="/vision" className="nav-link">Vision</Link>
              <button className="button-primary">
                Join The Accumulation
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-surface mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">MegaSynergy</h3>
              <p className="text-text-secondary">
                Building the world's largest BOB reserve, one block at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/strategy" className="nav-link">Our Strategy</Link></li>
                <li><Link href="/reserve" className="nav-link">BOB Reserve</Link></li>
                <li><Link href="/vision" className="nav-link">Our Vision</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">BOB Network</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Ledger: 7pail-xaaaa-aaaas-aabmq-cai</li>
                <li>Canister: 6lnhz-oaaaa-aaaas-aabkq-cai</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-text-secondary">
            <p>© {new Date().getFullYear()} MegaSynergy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
