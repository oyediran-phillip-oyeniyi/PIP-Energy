import { useState, useEffect } from "react";
import Logo from "../../assets/pip-energy_1.png"

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const TrendingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ToolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

// Real Unsplash solar photography
const IMAGES = {
  hero:            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85&fit=crop&crop=center",
  solarFarm:       "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=85&fit=crop",
  solarProduction: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=85&fit=crop",
  selfConsumption: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=85&fit=crop",
  agriSolar:       "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=85&fit=crop",
  panelClose:      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1400&q=85&fit=crop&crop=center",
  ctaBg:           "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85&fit=crop",
  residential:     "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85&fit=crop",
  commercial:      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=85&fit=crop",
  industrial:      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85&fit=crop",
  techPanel:       "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=85&fit=crop",
  installation:    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=85&fit=crop",
};

// Animated Counter Component
function AnimatedCounter({ end=0, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ROI Calculator Component
function ROICalculator() {
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [systemSize, setSystemSize] = useState(6);
  
  const calculations = {
    annualSavings: monthlyBill * 12 * 0.85,
    systemCost: systemSize * 3500,
    paybackYears: (systemSize * 3500) / (monthlyBill * 12 * 0.85),
    lifetime25Years: monthlyBill * 12 * 0.85 * 25,
    co2Offset: systemSize * 1.5 * 25,
  };
  
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 sm:p-10">
      <h3 className="font-display text-3xl sm:text-4xl text-gray-900 mb-6">Calculate Your Savings</h3>
      
      <div className="space-y-6 mb-8">
        <div>
          <label className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700 font-body">Monthly Electric Bill</span>
            <span className="text-lg font-bold text-sky-600 font-display">${monthlyBill}</span>
          </label>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-sky-200 rounded-full appearance-none cursor-pointer slider"
          />
        </div>
        
        <div>
          <label className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700 font-body">System Size</span>
            <span className="text-lg font-bold text-sky-600 font-display">{systemSize} kW</span>
          </label>
          <input
            type="range"
            min="3"
            max="15"
            step="0.5"
            value={systemSize}
            onChange={(e) => setSystemSize(Number(e.target.value))}
            className="w-full h-2 bg-sky-200 rounded-full appearance-none cursor-pointer slider"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { label: "Annual Savings", value: `$${Math.round(calculations.annualSavings).toLocaleString()}`, color: "bg-green-50 border-green-200" },
          { label: "System Cost", value: `$${Math.round(calculations.systemCost).toLocaleString()}`, color: "bg-blue-50 border-blue-200" },
          { label: "Payback Period", value: `${calculations.paybackYears.toFixed(1)} years`, color: "bg-amber-50 border-amber-200" },
          { label: "25-Year Savings", value: `$${Math.round(calculations.lifetime25Years).toLocaleString()}`, color: "bg-emerald-50 border-emerald-200" },
          { label: "CO₂ Offset", value: `${Math.round(calculations.co2Offset)} tons`, color: "bg-teal-50 border-teal-200" },
          { label: "ROI", value: `${Math.round((calculations.lifetime25Years / calculations.systemCost) * 100)}%`, color: "bg-indigo-50 border-indigo-200" },
        ].map(item => (
          <div key={item.label} className={`${item.color} border rounded-2xl p-4`}>
            <div className="text-xs text-gray-500 mb-1 font-body">{item.label}</div>
            <div className="font-display text-xl sm:text-2xl text-gray-900">{item.value}</div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full inline-flex items-center justify-center gap-2 btn-dark rounded-full px-6 py-3 text-sm font-semibold transition-colors">
        Get Detailed Quote <ArrowRight />
      </button>
    </div>
  );
}

export default function SunfoldLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'industrial'>('residential');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [liveStats, setLiveStats] = useState({
    energyGenerated: 1247893,
    co2Saved: 934156,
    homesPowered: 4283,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    
    // Simulate live stats updating
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        energyGenerated: prev.energyGenerated + Math.floor(Math.random() * 50),
        co2Saved: prev.co2Saved + Math.floor(Math.random() * 30),
        homesPowered: prev.homesPowered + (Math.random() > 0.8 ? 1 : 0),
      }));
    }, 300000);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(statsInterval);
    };
  }, []);

  const navLinks = ["Home", "About", "Expertise", "Process", "Portfolio", "Contact"];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        @keyframes marquee { to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 22s linear infinite; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        .afu-1 { animation: fadeUp .8s  .05s ease both; }
        .afu-2 { animation: fadeUp .8s  .20s ease both; }
        .afu-3 { animation: fadeUp .8s  .35s ease both; }
        .afu-4 { animation: fadeUp .8s  .50s ease both; }

        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.4); } 50% { box-shadow: 0 0 30px rgba(14, 165, 233, 0.6); } }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

        .card-hover { transition: transform .3s ease, box-shadow .3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(0,0,0,.12); }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform .6s ease; display: block; }
        .img-zoom:hover img { transform: scale(1.05); }

        .btn-dark    { background:#111; color:#fff; }
        .btn-dark:hover { background:#333; }
        .btn-outline { background:#fff; border:1.5px solid #e5e7eb; color:#374151; }
        .btn-outline:hover { background:#f9fafb; }

        .hero-frame { border-radius: 24px 24px 0 0; overflow: hidden; position: relative; }
        .hero-frame::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(to top, rgba(255,255,255,.25) 0%, transparent 55%);
          pointer-events: none;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0ea5e9;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0ea5e9;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .float-animation { animation: float 3s ease-in-out infinite; }

        .timeline-line { position: relative; }
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #e0f2fe, #0ea5e9, #e0f2fe);
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .timeline-line::before { left: 20px; }
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className={`fixed top-0 inset-x-0 z-50 font-body transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur-sm"}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
              <img src={Logo} className="w-20 h-auto"/>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">{l}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            <button className="text-sm font-medium rounded-full px-5 py-2 btn-outline transition-colors">Contact</button>
            <button className="text-sm font-medium rounded-full px-5 py-2 btn-dark transition-colors">Get Started</button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-2">
            {navLinks.map(l => (
              <a key={l} href="#" className="block text-sm font-medium text-gray-700 py-1.5">{l}</a>
            ))}
            <div className="flex gap-3 pt-3">
              <button className="flex-1 text-sm font-medium rounded-full px-4 py-2.5 btn-outline transition-colors">Contact</button>
              <button className="flex-1 text-sm font-medium rounded-full px-4 py-2.5 btn-dark transition-colors">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-28 pb-0 px-4 sm:px-8 text-center bg-linear-to-b from-sky-50 via-blue-50/30 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="afu-1 inline-flex items-center gap-2 bg-white/90 border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"/>
            <span className="text-xs font-medium text-gray-500 font-body">Top Solar Energy Company</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[72px] text-gray-900 leading-[1.07] mb-5 afu-2">
            Solar Energy,<br />Tailored to<br />Your Needs
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-sm mx-auto mb-8 afu-3 font-body">
            PIP Energy designs, installs, and maintains premium PV systems—optimized for your roof and your budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 afu-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-dark rounded-full px-7 py-3 text-sm font-semibold transition-colors">
              Book a Call <ArrowRight />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-outline rounded-full px-7 py-3 text-sm font-semibold transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto hero-frame shadow-2xl">
          <img
            src={IMAGES.hero}
            alt="Modern home with solar panels installed on roof"
            className="w-full h-65 sm:h-95 md:h-125 object-cover object-center"
            loading="eager"
          />
          <div className="absolute bottom-5 md:scale-150 scale-125 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl flex items-center gap-5 whitespace-nowrap z-10">
            {[["10+","Years exp."],["200+","Projects"],["1.7 MW","Installed"]].map(([val, lbl], i, arr) => (
              <div key={lbl} className="flex items-center gap-5">
                <div className="text-center">
                  <div className="font-display text-xl text-gray-900">{val}</div>
                  <div className="text-[10px] text-gray-400 font-body">{lbl}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-gray-200"/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE IMPACT DASHBOARD ─── */}
      <section className="py-16 px-4 sm:px-8 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl"/>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"/>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block pulse-glow"/>
              <span className="text-xs font-medium font-body">Live Impact</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-2">Our Network's Real-Time Impact</h2>
            <p className="text-gray-400 text-sm font-body">Updated every 5 minutes</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Energy Generated", value: liveStats.energyGenerated, suffix: " kWh", icon: <BoltIcon />, color: "from-amber-500 to-orange-500" },
              { label: "CO₂ Emissions Saved", value: liveStats.co2Saved, suffix: " kg", icon: <LeafIcon />, color: "from-green-500 to-emerald-500" },
              { label: "Homes Powered", value: liveStats.homesPowered, suffix: "", icon: <SunIcon />, color: "from-sky-500 to-blue-500" },
            ].map(stat => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 text-white`}>
                  {stat.icon}
                </div>
                <div className="font-display text-3xl sm:text-4xl mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] text-center text-gray-400 uppercase tracking-widest mb-6 font-body">A Promising Sustainable Future</p>
          <p className="font-display text-3xl sm:text-4xl md:text-[46px] text-gray-900 text-center leading-[1.22] mb-20">
            We envision a world where 🌍 sustainable energy is not an alternative but the standard 🌎 empowering businesses and communities to thrive while 🌏 protecting the planet.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-16">
            {[["10+","Years of experience"],["200+","Projects across 30 states"],["1.7 MW","Installation capacity"]].map(([val,lbl]) => (
              <div key={val} className="text-center">
                <div className="font-display text-4xl sm:text-5xl text-gray-900 mb-1">{val}</div>
                <div className="text-xs text-gray-400 font-body">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl img-zoom shadow-xl">
            <img
              src={IMAGES.solarFarm}
              alt="Aerial view of a large solar panel farm"
              className="w-full h-[240px] sm:h-[360px] md:h-[440px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="overflow-hidden border-y border-gray-100 py-4 bg-white select-none">
        <div className="flex animate-marquee" style={{width:"max-content"}}>
          {Array.from({length:10}).map((_,i) => (
            <span key={i} className="font-display text-4xl sm:text-5xl text-gray-200 px-8 inline-flex items-center gap-6">
              Our Expertise <span className="text-gray-300 text-2xl">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── EXPERTISE ─── */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-8 sm:p-10 card-hover flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full px-3 py-1 mb-5 font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"/>
                  Agricultural Panels
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-gray-900 mb-4">Solar Production</h3>
                <p className="text-gray-400 text-sm font-body leading-relaxed">
                  No-shade solar installations that maximize energy output—whether on rooftops, open fields, or floating platforms. Every project is engineered for site-specific performance.
                </p>
              </div>
              <button className="mt-6 self-start inline-flex items-center gap-2 btn-dark rounded-full px-5 py-2.5 text-xs font-semibold transition-colors">
                Learn more <ArrowRight />
              </button>
            </div>
            <div className="rounded-3xl img-zoom h-[280px] sm:h-auto">
              <img src={IMAGES.solarProduction} alt="Solar panels on a residential rooftop" className="w-full h-full object-cover rounded-3xl"/>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl img-zoom h-[280px] sm:h-auto order-2 sm:order-1">
              <img src={IMAGES.selfConsumption} alt="Electric vehicle charging with solar power" className="w-full h-full object-cover rounded-3xl"/>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 card-hover flex flex-col justify-between min-h-[300px] order-1 sm:order-2">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full px-3 py-1 mb-5 font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"/>
                  Smart Storage
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-gray-900 mb-4">Self-Consumption &amp; Optimization</h3>
                <p className="text-gray-400 text-sm font-body leading-relaxed">
                  Store and use more of the energy you generate. With smart storage and energy management systems, you reduce dependency on the grid while cutting costs.
                </p>
              </div>
              <button className="mt-6 self-start inline-flex items-center gap-2 btn-dark rounded-full px-5 py-2.5 text-xs font-semibold transition-colors">
                Learn more <ArrowRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-8 sm:p-10 card-hover flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full px-3 py-1 mb-5 font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"/>
                  Agricultural Solar Power
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-gray-900 mb-4">AgriSolar / Agrivoltaics</h3>
                <p className="text-gray-400 text-sm font-body leading-relaxed">
                  Combine solar power with agriculture. Agrivoltaics lets crops grow under solar panels, optimizing land use while generating clean energy.
                </p>
              </div>
              <button className="mt-6 self-start inline-flex items-center gap-2 btn-dark rounded-full px-5 py-2.5 text-xs font-semibold transition-colors">
                Learn more <ArrowRight />
              </button>
            </div>
            <div className="rounded-3xl img-zoom h-[280px] sm:h-auto">
              <img src={IMAGES.agriSolar} alt="Agrivoltaic solar panels with crops growing below" className="w-full h-full object-cover rounded-3xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ─── */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* ─── OUR PROCESS TIMELINE ─── */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium text-sky-600 bg-sky-100 rounded-full px-3 py-1 mb-4 font-body">Our Process</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">From Consultation to Clean Energy</h2>
            <p className="text-gray-400 text-sm font-body max-w-md mx-auto">
              A streamlined process designed for efficiency, transparency, and your peace of mind.
            </p>
          </div>

          <div className="relative timeline-line py-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "We assess your energy needs, site conditions, and budget to design the perfect solar solution.", icon: <MessageIcon />, duration: "1-2 days" },
              { step: "02", title: "Custom Design & Proposal", desc: "Our engineers create a detailed system design with 3D modeling, energy projections, and ROI analysis.", icon: <ToolIcon />, duration: "3-5 days" },
              { step: "03", title: "Permits & Approvals", desc: "We handle all paperwork, permits, and utility coordination so you don't have to worry about bureaucracy.", icon: <ShieldIcon />, duration: "2-4 weeks" },
              { step: "04", title: "Professional Installation", desc: "Our certified technicians install your system with precision, safety, and minimal disruption.", icon: <BoltIcon />, duration: "1-3 days" },
              { step: "05", title: "Activation & Monitoring", desc: "System activation, grid connection, and 24/7 monitoring setup to ensure optimal performance.", icon: <TrendingIcon />, duration: "1-2 days" },
              { step: "06", title: "Ongoing Support", desc: "Lifetime monitoring, maintenance, and support to keep your system running at peak efficiency.", icon: <SunIcon />, duration: "25+ years" },
            ].map((item, i) => (
              <div key={item.step} className={`flex gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover inline-block w-full md:max-w-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-sky-600 bg-sky-50 rounded-full px-2 py-0.5 font-body">{item.step}</span>
                          <span className="text-xs text-gray-400 font-body">{item.duration}</span>
                        </div>
                        <h3 className="font-display text-xl text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 font-body leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-lg z-10"/>
                </div>
                <div className="flex-1"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS BY SECTOR ─── */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1 mb-4 font-body">Tailored Solutions</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Solar for Every Sector</h2>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {(['residential', 'commercial', 'industrial'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all font-body ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl img-zoom overflow-hidden shadow-xl">
              <img
                src={IMAGES[activeTab]}
                alt={`${activeTab} solar installation`}
                className="w-full h-25 object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              {activeTab === 'residential' && (
                <>
                  <h3 className="font-display text-3xl text-gray-900 mb-4">Residential Solar</h3>
                  <p className="text-gray-500 font-body mb-6 leading-relaxed">
                    Transform your home into a clean energy powerhouse. Our residential solutions are designed for maximum efficiency, aesthetic appeal, and long-term savings.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Rooftop & ground-mount systems',
                      'Battery storage integration',
                      'Smart home energy management',
                      'Net metering & grid independence',
                      '25-year performance warranty',
                      'Financing options available'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon />
                        </div>
                        <span className="text-sm text-gray-600 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'commercial' && (
                <>
                  <h3 className="font-display text-3xl text-gray-900 mb-4">Commercial Solar</h3>
                  <p className="text-gray-500 font-body mb-6 leading-relaxed">
                    Reduce operating costs and enhance your sustainability credentials. Our commercial systems deliver enterprise-grade performance and reliability.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Large-scale rooftop installations',
                      'Carport & parking lot systems',
                      'Energy cost reduction up to 75%',
                      'Tax incentives & accelerated depreciation',
                      'Corporate sustainability reporting',
                      'Power purchase agreements (PPAs)'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon />
                        </div>
                        <span className="text-sm text-gray-600 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'industrial' && (
                <>
                  <h3 className="font-display text-3xl text-gray-900 mb-4">Industrial Solar</h3>
                  <p className="text-gray-500 font-body mb-6 leading-relaxed">
                    Power-intensive operations demand robust energy solutions. We deliver utility-scale systems engineered for maximum output and minimal downtime.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Multi-megawatt installations',
                      'On-site energy generation',
                      'Peak demand management',
                      'Microgrid & hybrid systems',
                      'Process heat integration',
                      'Industrial-grade monitoring'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon />
                        </div>
                        <span className="text-sm text-gray-600 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <button className="self-start inline-flex items-center gap-2 btn-dark rounded-full px-6 py-3 text-sm font-semibold transition-colors">
                Explore {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Solutions <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY SHOWCASE ─── */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4 font-body">Technology</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Premium Components,<br />Proven Performance</h2>
            <p className="text-gray-400 text-sm font-body max-w-md mx-auto">
              We partner with world-leading manufacturers to ensure maximum efficiency and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "High-Efficiency Solar Panels",
                specs: ["22.8% conversion efficiency", "450W monocrystalline modules", "25-year performance warranty", "0.25%/year degradation rate"],
                badge: "Tier 1",
                color: "bg-gradient-to-br from-blue-500 to-indigo-600"
              },
              {
                title: "Smart Inverter Systems",
                specs: ["99.2% peak efficiency", "Real-time monitoring", "Grid-forming capability", "20-year product warranty"],
                badge: "Premium",
                color: "bg-gradient-to-br from-purple-500 to-pink-600"
              },
              {
                title: "Battery Storage",
                specs: ["13.5 kWh usable capacity", "10-year warranty", "Seamless backup power", "90% round-trip efficiency"],
                badge: "Advanced",
                color: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                title: "Monitoring & Control",
                specs: ["24/7 system monitoring", "Mobile app control", "Predictive maintenance", "Performance analytics"],
                badge: "AI-Powered",
                color: "bg-gradient-to-br from-amber-500 to-orange-600"
              },
            ].map(tech => (
              <div key={tech.title} className="bg-white rounded-3xl p-8 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl text-gray-900">{tech.title}</h3>
                  <span className={`${tech.color} text-white text-xs font-bold rounded-full px-3 py-1 font-body`}>
                    {tech.badge}
                  </span>
                </div>
                <ul className="space-y-2">
                  {tech.specs.map(spec => (
                    <li key={spec} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"/>
                      <span className="text-sm text-gray-600 font-body">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES / PORTFOLIO ─── */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-green-600 bg-green-50 rounded-full px-3 py-1 mb-4 font-body">Portfolio</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-gray-400 text-sm font-body max-w-md mx-auto">
              Real results from real installations across residential, commercial, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Villa",
                location: "Lagos, Nigeria",
                size: "12 kW",
                savings: "₦850K/year",
                image: IMAGES.residential,
                type: "Residential"
              },
              {
                title: "Shopping Complex",
                location: "Abuja, Nigeria",
                size: "250 kW",
                savings: "₦18M/year",
                image: IMAGES.commercial,
                type: "Commercial"
              },
              {
                title: "Manufacturing Plant",
                location: "Port Harcourt",
                size: "1.2 MW",
                savings: "₦75M/year",
                image: IMAGES.industrial,
                type: "Industrial"
              },
            ].map(project => (
              <div key={project.title} className="group bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full px-3 py-1 font-body">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-400 mb-4 font-body">{project.location}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1 font-body">System Size</div>
                      <div className="font-bold text-gray-900 font-body">{project.size}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1 font-body">Annual Savings</div>
                      <div className="font-bold text-green-600 font-body">{project.savings}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 btn-outline rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              View All Projects <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-amber-600 bg-amber-100 rounded-full px-3 py-1 mb-4 font-body">Testimonials</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Chidi Okafor",
                role: "Homeowner",
                content: "PIP Energy transformed our home. We've cut our electricity bills by 90% and the system has been flawless for 2 years. Best investment we've made.",
                rating: 5
              },
              {
                name: "Amaka Nwosu",
                role: "Business Owner",
                content: "From consultation to installation, the process was seamless. Their team handled everything professionally, and our ROI exceeded projections.",
                rating: 5
              },
              {
                name: "Ibrahim Hassan",
                role: "Operations Manager",
                content: "Our factory now runs primarily on solar. The reduction in operating costs is remarkable, and the 24/7 monitoring gives us complete peace of mind.",
                rating: 5
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-lg card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-body leading-relaxed mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900 font-body">{testimonial.name}</div>
                  <div className="text-xs text-gray-400 font-body">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-sky-600 bg-sky-50 rounded-full px-3 py-1 mb-4 font-body">Why Choose Us</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Solar Energy, Tailored<br />to Your Needs</h2>
            <p className="text-gray-400 text-sm font-body max-w-xs mx-auto">
              PIP Energy designs, installs, and maintains premium PV systems optimized for your roof and your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji:"💡", title:"Tailored Solutions", bg:"bg-amber-50", desc:"Every project is unique. Our purpose-driven design ensures your solar system is optimized for maximum efficiency." },
              { emoji:"⚡", title:"Proven Expertise",   bg:"bg-sky-50",   desc:"With 10+ years of experience and 1.7MW of installed capacity, we deliver reliable, large-scale projects across industries." },
              { emoji:"🔧", title:"End-to-End Service", bg:"bg-green-50", desc:"From feasibility studies to ongoing monitoring, we manage the entire process—so you don't have to worry." },
            ].map(item => (
              <div key={item.title} className={`${item.bg} rounded-3xl p-8 card-hover`}>
                <div className="text-4xl mb-5">{item.emoji}</div>
                <h3 className="font-display text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-medium text-gray-600 bg-gray-200 rounded-full px-3 py-1 mb-4 font-body">FAQ</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How much does a solar installation cost?",
                a: "Costs vary based on system size, location, and complexity. Residential systems typically range from ₦2.5M to ₦8M, while commercial installations start at ₦15M. We offer free consultations and detailed quotes."
              },
              {
                q: "What's the payback period for solar?",
                a: "Most systems pay for themselves in 4-7 years through energy savings. With incentives and tax credits, this can be reduced to 3-5 years. After payback, you enjoy 20+ years of virtually free electricity."
              },
              {
                q: "Do solar panels work during power outages?",
                a: "Standard grid-tied systems shut down during outages for safety. However, systems with battery storage can provide backup power, keeping critical loads running during grid failures."
              },
              {
                q: "How long do solar panels last?",
                a: "Quality solar panels last 25-30 years with minimal degradation. Most panels come with 25-year performance warranties guaranteeing at least 80% of original output after 25 years."
              },
              {
                q: "What maintenance is required?",
                a: "Solar systems require minimal maintenance—primarily occasional cleaning and annual inspections. Our monitoring systems alert us to any issues, and we provide comprehensive maintenance packages."
              },
              {
                q: "Can I expand my system later?",
                a: "Yes! We design systems with expansion in mind. You can start small and add more panels as your needs or budget grow. We'll ensure compatibility and optimal performance."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 font-body pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${activeFAQ === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFAQ === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 font-body leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PANEL PHOTO DIVIDER ─── */}
      <div className="relative h-55 sm:h-80 overflow-hidden">
        <img
          src={IMAGES.panelClose}
          alt="Close-up of solar panels"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/35 pointer-events-none"/>
      </div>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 sm:px-8 relative overflow-hidden bg-gray-950 text-white">
        <img
          src={IMAGES.ctaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-linear-to-br from-gray-950/90 via-gray-950/75 to-gray-900/85 pointer-events-none"/>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
                Cut Costs.<br />Save Energy.<br />Go Solar Today.
              </h2>
              <p className="text-gray-400 text-sm font-body leading-relaxed mb-8 max-w-xs">
                Whether you're a business, community, or individual, our tailored solar solutions maximize efficiency and impact—let's start your transition today.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold rounded-full px-7 py-3 hover:bg-gray-100 transition-colors">
                Book a Call <ArrowRight />
              </button>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white text-xs font-medium rounded-full px-4 py-1.5 mb-4 font-body">
                📅 Book a 30-minute call to discuss your project
              </div>
              <p className="text-gray-500 text-xs font-body mb-7 max-w-xs">
                No pressure, no commitments. We'll learn about your requirements, timeline, and define the strategy you need.
              </p>
              <div className="space-y-3">
                {[
                  { icon:<PhoneIcon />,  label:"30 Minutes",        sub:"Quick & Efficient",   color:"bg-sky-500"    },
                  { icon:<VideoIcon />,  label:"1-on-1 Call",       sub:"Personal & Dedicated", color:"bg-blue-600"   },
                  { icon:<MessageIcon />,label:"Free Consultation",  sub:"No Commitment",        color:"bg-indigo-600" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs font-body">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100 pt-14 pb-8 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={Logo} className="w-20 h-auto"/>
              </div>
              <p className="text-xs font-semibold text-gray-700 mb-2">Contact</p>
              <div className="text-xs text-gray-400 font-body space-y-1">
                <p>455 Power Avenue, Strength City, CA 90211</p>
                <p>admin@pip-energy.com</p>
                <p>+44 20 7946 0958</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-700 mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-sky-400 font-body min-w-0"
                />
                <button className="btn-dark rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors">Subscribe</button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-700 mb-3">Opening Hours</p>
              <div className="text-xs text-gray-400 font-body space-y-1.5">
                {[["Monday – Friday","08:00 – 23:00"],["Saturday","08:00 – 16:00"],["Sunday","08:00 – 13:00"],["Holiday","08:00 – 16:00"]].map(([d,h]) => (
                  <div key={d} className="flex justify-between gap-4">
                    <span>{d}</span><span className="text-gray-600 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400 font-body">{new Date().getFullYear()} PIP Energy. All Rights Reserved.</p>
            <div className="flex gap-5 text-xs text-gray-400 font-body">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}