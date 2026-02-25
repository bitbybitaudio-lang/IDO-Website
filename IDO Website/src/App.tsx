import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IDOLogo } from "./components/Logo";
import { Play, Pause, Check, Music, Heart, Star, Mail, ArrowRight } from "lucide-react";

// --- Components ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Button = ({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string }) => {
  const baseStyle = "px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 hover:scale-105",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Portfolio Data ---
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    couple: "Sarah & James",
    title: "Forever in August",
    duration: "3:42",
    genre: "Acoustic Folk",
    image: "https://picsum.photos/seed/wedding1/400/400"
  },
  {
    id: 2,
    couple: "Michael & David",
    title: "Starlight Vows",
    duration: "2:55",
    genre: "Piano Ballad",
    image: "https://picsum.photos/seed/wedding2/400/400"
  },
  {
    id: 3,
    couple: "Elena & Thomas",
    title: "The Journey Home",
    duration: "4:10",
    genre: "Cinematic Orchestral",
    image: "https://picsum.photos/seed/wedding3/400/400"
  }
];

// --- Pricing Data ---
const PRICING_TIERS = [
  {
    name: "The Vow Snippet",
    price: "$499",
    description: "A perfect 60-second musical capture of your love. Ideal for social media highlights and intimate moments.",
    features: [
      "60-Second Composition",
      "Piano or Acoustic Guitar",
      "Digital Download (MP3/WAV)",
      "1 Revision Round",
      "Social Media License"
    ]
  },
  {
    name: "Signature Union",
    price: "$999",
    popular: true,
    description: "Our most popular choice. A full-length song telling your complete story with rich instrumentation.",
    features: [
      "Full Length (3-4 Minutes)",
      "Full Band Arrangement",
      "Professional Mixing & Mastering",
      "Lyric Video",
      "2 Revision Rounds",
      "Streaming Platform Upload"
    ]
  },
  {
    name: "Legacy Orchestral",
    price: "$1,999",
    description: "The ultimate sonic heirloom. Cinematic production featuring string arrangements and a physical keepsake.",
    features: [
      "Extended Cinematic Composition",
      "String Quartet Arrangement",
      "Live Instrument Recording",
      "Custom Vinyl Record Keepsake",
      "Unlimited Revisions",
      "Sheet Music Framed Gift"
    ]
  }
];

export default function App() {
  const [activeSong, setActiveSong] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference backdrop-blur-sm bg-black/20">
        <div className="w-12 h-12">
            <IDOLogo color="white" />
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/80">
          <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <Button variant="outline" className="!py-2 !px-6 !text-xs">Book Now</Button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
        
        <div className="w-full max-w-3xl aspect-[16/9] relative flex items-center justify-center mb-12">
          <div className="w-full h-full max-w-lg">
            <IDOLogo color="#ffffff" />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center max-w-2xl z-10"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6 italic leading-tight">
            Your Vows,<br />
            <span className="text-white/80">Composed.</span>
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed font-light mb-10 max-w-lg mx-auto">
            We transform your unique love story into a bespoke musical masterpiece. 
            The perfect soundtrack for your walk down the aisle and your life together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button>Start Your Song</Button>
            <Button variant="outline">Listen to Samples</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce"
        >
          <ArrowRight className="w-6 h-6 rotate-90 text-white/30" />
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <Section className="border-t border-white/5" >
        <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">From Heart<br />to Harmony</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every couple has a sound. Whether it's the song that was playing when you met, 
              or the rhythm of your heartbeat when you're together. We capture that essence.
            </p>
            <div className="space-y-8">
              {[
                { icon: Heart, title: "1. The Story", desc: "We interview you to understand your journey, your style, and your vows." },
                { icon: Music, title: "2. The Composition", desc: "Our world-class composers craft a melody unique to your relationship." },
                { icon: Star, title: "3. The Masterpiece", desc: "You receive a studio-quality recording to cherish forever." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <step.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                    <p className="text-sm text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5">
             <img 
                src="https://picsum.photos/seed/piano/800/1000" 
                alt="Composer at piano" 
                className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-700"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8">
               <p className="font-serif italic text-2xl">"Music is the shorthand of emotion."</p>
               <p className="text-xs uppercase tracking-widest mt-2 opacity-60">- Leo Tolstoy</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-4xl mb-4">Featured Stories</h2>
              <p className="text-white/50">Listen to the love stories we've already told.</p>
            </div>
            <Button variant="outline" className="hidden md:block">View All Archive</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => setActiveSong(activeSong === item.id ? null : item.id)}>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {activeSong === item.id ? (
                        <Pause className="w-6 h-6 fill-white text-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-1">{item.title}</h3>
                <p className="text-sm text-white/60 uppercase tracking-wider mb-2">{item.couple}</p>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span>{item.genre}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section>
        <div id="pricing" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Investment</h2>
          <p className="text-white/50">
            Choose the perfect arrangement for your wedding budget. 
            All tiers include full ownership rights and high-quality digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-2xl border ${tier.popular ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/10'} flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <div className="text-3xl font-light mb-4">{tier.price}</div>
                <p className="text-sm text-white/50 leading-relaxed min-h-[60px]">{tier.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.popular ? "primary" : "outline"} className="w-full">
                Select Plan
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / Footer */}
      <section className="py-32 px-6 text-center bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 mx-auto mb-12">
            <IDOLogo color="white" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to say "I Do"?</h2>
          <p className="text-white/50 mb-12">
            Limited commission slots available for the upcoming wedding season.
            Reserve your composition today.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <Button>Book Consultation</Button>
             <a href="mailto:hello@ido.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
               <Mail className="w-4 h-4" />
               hello@ido-music.com
             </a>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 text-xs text-white/20 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} IDO Production Company</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white/40">Instagram</a>
              <a href="#" className="hover:text-white/40">Spotify</a>
              <a href="#" className="hover:text-white/40">Terms</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
