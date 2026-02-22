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

// Real Unsplash solar photography — all freely available
const IMAGES = {
  hero:            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85&fit=crop&crop=center",
  solarFarm:       "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=85&fit=crop",
  solarProduction: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=85&fit=crop",
  selfConsumption: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=85&fit=crop",
  agriSolar:       "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=85&fit=crop",
  panelClose:      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1400&q=85&fit=crop&crop=center",
  ctaBg:           "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85&fit=crop",
};

export default function SunfoldLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Expertise", "Why Choose Us"];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
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
      <section className="pt-28 pb-0 px-4 sm:px-8 text-center bg-gradient-to-b from-sky-50 via-blue-50/30 to-white overflow-hidden">
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

        {/* ── Hero photo ── */}
        <div className="max-w-5xl mx-auto hero-frame shadow-2xl">
          <img
            src={IMAGES.hero}
            alt="Modern home with solar panels installed on roof"
            className="w-full h-[260px] sm:h-[380px] md:h-[500px] object-cover object-center"
            loading="eager"
          />
          {/* Floating stats pill */}
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

      {/* ─── MISSION ─── */}
      <section className="py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] text-center text-gray-400 uppercase tracking-widest mb-6 font-body">A Promising Sustainable Future</p>
          <p className="font-display text-3xl sm:text-4xl md:text-[46px] text-gray-900 text-center leading-[1.22] mb-20">
            We envision a world where 🌍 sustainable energy is not an alternative but the standard 🌎 empowering businesses and communities to thrive while 🌏 protecting the planet.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-16">
            {[["10+","Years of experience"],["200+","Projects across 5 countries"],["1.7 MW","Installation capacity"]].map(([val,lbl]) => (
              <div key={val} className="text-center">
                <div className="font-display text-4xl sm:text-5xl text-gray-900 mb-1">{val}</div>
                <div className="text-xs text-gray-400 font-body">{lbl}</div>
              </div>
            ))}
          </div>

          {/* Solar farm photo */}
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

          {/* Solar Production */}
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

          {/* Self-Consumption */}
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

          {/* AgriSolar */}
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

      {/* ─── PANEL PHOTO DIVIDER ─── */}
      <div className="relative h-[220px] sm:h-[320px] overflow-hidden">
        <img
          src={IMAGES.panelClose}
          alt="Close-up of solar panels"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none"/>
      </div>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 sm:px-8 relative overflow-hidden bg-gray-950 text-white">
        <img
          src={IMAGES.ctaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/75 to-gray-900/85 pointer-events-none"/>

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
                <p>hello@pip-energy.com</p>
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
