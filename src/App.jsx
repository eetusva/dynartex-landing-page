import React, { useState, useEffect } from 'react';
import { Upload, RefreshCw, Download, Zap, Image, Layers, Box, Check, Menu, X, ChevronRight, Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynartexLogo from './dynartexlogo.png';
import dynarteLandingPage from './dynartelandingpage.png';

const CAROUSEL_IMAGES = [dynartexLogo, dynarteLandingPage];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              DYNARTEX
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#premium" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Premium</a>
              <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              <button className="bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple border border-neon-purple/50 px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                Launch Editor
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#premium" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Premium</a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <button className="w-full text-left bg-neon-purple/20 text-neon-purple px-3 py-2 rounded-md text-base font-medium mt-4">
              Launch App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLightboxOpen]);

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X size={32} />
          </button>
          <img
            src={CAROUSEL_IMAGES[currentImageIndex]}
            alt="Dynartex Interface Fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-neon-purple/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-dark-bg opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue text-glow">
              Dynartex
            </span>
          </h1>
          <div className="mt-4 mb-10 flex justify-center">
            <p className="text-xl text-gray-300 max-w-3xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg">
              Upload .ydr/.ytd files, edit textures with web-editor, auto-convert to DDS and download your files!
              No external programs required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                Start Editing Now <ChevronRight size={20} />
              </span>
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all backdrop-blur-sm">
              View Documentation
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-white/10 bg-dark-card/50 backdrop-blur-xl p-2 shadow-2xl shadow-neon-purple/20">
            <div
              className="rounded-lg bg-dark-bg relative group flex items-center justify-center p-1 cursor-pointer overflow-hidden min-h-[200px] md:min-h-[400px]"
              onClick={() => setIsLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={CAROUSEL_IMAGES[currentImageIndex]}
                  alt="Dynartex Interface Preview"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.9 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full h-auto rounded-lg hover:opacity-100 transition-opacity duration-500"
                />
              </AnimatePresence>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 text-white">
                  <Image size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-neon-purple/50 transition-all hover:shadow-[0_0_30px_rgba(176,38,255,0.1)] group">
    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neon-purple/20 transition-colors">
      <Icon className="text-neon-blue group-hover:text-neon-purple transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Streamlined Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From upload to export, we've optimized every step of the texture editing process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Upload}
            title="Upload texture files"
            description="Upload .ydr/.ytd files. We handle the texture parsing instantly."
          />
          <FeatureCard 
            icon={RefreshCw}
            title="Replace Textures"
            description="You can replace textures using common image formats (PNG, JPG, WEBP) or DDS files. You can also export the DDS files."
          />
          <FeatureCard 
            icon={Zap}
            title="Edit Textures"
            description="You can edit textures with our built-in web-editor. No need to install any additional software."
          />
          <FeatureCard 
            icon={Download}
            title="Instant Export"
            description="Download modified files individually or grab everything in a bulk ZIP archive. We handle the dds conversion for you."
          />
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See It In Action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch how easy it is to transform your GTA V textures with Dynartex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-dark-card/50 backdrop-blur-xl p-2 shadow-2xl shadow-neon-purple/10">
            <div className="aspect-video rounded-lg bg-black relative group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-bold text-lg">Texture Swapping Demo</h3>
                <p className="text-sm text-gray-400">Learn the basics of replacing textures</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-dark-card/50 backdrop-blur-xl p-2 shadow-2xl shadow-neon-blue/10">
            <div className="aspect-video rounded-lg bg-black relative group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-bold text-lg">AI Generation Workflow</h3>
                <p className="text-sm text-gray-400">Creating unique assets with AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumFeatures = () => {
  return (
    <section id="premium" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-neon-purple/5 to-dark-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-medium mb-6">
              <Star size={14} /> Premium Features
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Next-Gen Tools for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Elite Modders
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Unlock the full potential of your creativity with our advanced AI and asset library tools.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                  <Image className="text-neon-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">AI Texture Generation</h3>
                  <p className="text-gray-400">Generate seamless textures from text prompts. Create unique graffiti, fabrics, or surfaces in seconds.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0">
                  <Box className="text-neon-pink" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Quick Asset Library</h3>
                  <p className="text-gray-400">Access a curated library of props like picture frames, signs, and decals ready to drop into your project.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue blur-[100px] opacity-20"></div>
            <div className="relative rounded-2xl border border-white/10 bg-dark-card/80 backdrop-blur-xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 rounded-lg bg-white/5 border border-white/10 p-4 flex flex-col justify-end">
                    <span className="text-xs text-gray-400">Generated: "Cyberpunk Wall"</span>
                  </div>
                  <div className="h-32 rounded-lg bg-white/5 border border-white/10 p-4 flex flex-col justify-end">
                    <span className="text-xs text-gray-400">Asset: Neon Sign</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-lg bg-white/5 border border-white/10 p-4 flex flex-col justify-end">
                    <span className="text-xs text-gray-400">Asset: Modern Frame</span>
                  </div>
                  <div className="h-40 rounded-lg bg-white/5 border border-white/10 p-4 flex flex-col justify-end">
                    <span className="text-xs text-gray-400">Generated: "Rusty Metal"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ tier, price, currencySymbol, billingCycle, features, recommended = false }) => (
  <div className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${recommended ? 'border-neon-purple bg-dark-card/80 shadow-[0_0_40px_rgba(176,38,255,0.15)] hover:shadow-[0_0_60px_rgba(176,38,255,0.3)]' : 'border-white/10 bg-dark-card/40 hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]'} flex flex-col`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-purple text-white text-xs font-bold uppercase tracking-wider rounded-full">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-display font-bold mb-2">{tier}</h3>
    <div className="mb-6 flex items-center gap-2">
      <div>
        <span className="text-4xl font-bold">{currencySymbol}{price}</span>
        {price !== '0' && <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>}
      </div>
      {billingCycle === 'yearly' && price !== '0' && (
        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
          -10%
        </span>
      )}
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
          <Check size={18} className={recommended ? "text-neon-purple" : "text-gray-500"} />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-bold transition-all ${recommended ? 'bg-neon-purple hover:bg-neon-purple/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
      {price === '0' ? 'Get Started' : 'Subscribe Now'}
    </button>
  </div>
);

const Pricing = () => {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const currencies = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    JPY: { symbol: '¥', rate: 150 },
    CAD: { symbol: 'C$', rate: 1.35 },
    AUD: { symbol: 'A$', rate: 1.52 }
  };

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const calculatePrice = (basePrice) => {
    if (basePrice === 0) return '0';
    let price = basePrice * currencies[currency].rate;
    if (billingCycle === 'yearly') {
      price = price * 12 * 0.9; // 10% discount
    }
    // Round to whole numbers for JPY, 2 decimals for others
    return currency === 'JPY' ? Math.round(price).toString() : price.toFixed(2);
  };

  return (
    <section id="pricing" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-400 mb-8">Choose the plan that fits your modding needs.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors min-w-[100px] justify-between"
              >
                <span>{currency}</span>
                <ChevronDown size={16} className={`transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCurrencyOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-dark-card border border-white/10 rounded-xl overflow-hidden shadow-xl z-20">
                  {Object.keys(currencies).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setIsCurrencyOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors ${currency === curr ? 'text-neon-purple font-bold' : 'text-gray-300'}`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Billing Cycle Toggle */}
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-neon-blue text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-neon-blue text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            tier="Free"
            price="0"
            currencySymbol={currencies[currency].symbol}
            billingCycle={billingCycle}
            features={[
              "15 exports per Month ",
              "Basic Texture Editor",
              "Single File Downloads",
              "Community Support"
            ]}
          />
          <PricingCard
            tier="Pro"
            price={calculatePrice(13.99)}
            currencySymbol={currencies[currency].symbol}
            billingCycle={billingCycle}
            recommended={true}
            features={[
              "No export Limits",
              "AI Generations (100/month)",
              "Fast Processing Priority",
              "Bulk ZIP Downloads",
              "Email Support"
            ]}
          />
          <PricingCard
            tier="Elite"
            price={calculatePrice(27.99)}
            currencySymbol={currencies[currency].symbol}
            billingCycle={billingCycle}
            features={[
              "Everything in Pro",
              "AI Generations (500/month)",
              "Asset Library Access",
              "Early Access to New Features",
              "Priority Support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue mb-4 block">
              DYNARTEX
            </span>
            <p className="text-gray-400 max-w-xs">
              The premier browser-based tool for GTA V texture modification. Modding made accessible for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Dynartex. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-purple/30">
      <Navbar />
      <Hero />
      <Features />
      <VideoShowcase />
      <PremiumFeatures />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;