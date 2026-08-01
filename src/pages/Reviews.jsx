import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Star, BadgeCheck, Quote, Globe2, Users, Award, ArrowRight } from 'lucide-react';
import Badge from '../components/ui/Badge';

// ─── Review Data ──────────────────────────────────────────────────────────────
const allReviews = [
  {
    id: 1,
    quote: "Excellent Work! Outstanding AI voice agent solution delivered for our food business. They successfully set up the voice agent and the results were beyond expectations.",
    name: "Verified Client",
    role: "AI Voice Agent Project",
    flag: "🌍",
    isGreen: true,
    tags: ["AI Development", "Voice Agent", "Automation"],
  },
  {
    id: 2,
    quote: "I had the pleasure of working with Ali on building an AI automation system for our business, and I can wholeheartedly recommend him. The collaboration felt smooth and reliable from start to finish. Ali is your guy.",
    name: "Verified Client",
    role: "AI Automation System",
    flag: "🌍",
    isGreen: true,
    tags: ["AI Automation", "Make", "Zapier"],
  },
  {
    id: 3,
    quote: "One of my fav person to work with. Attention to detail goes above and beyond. He always wants to make sure the client is being taken care of the right way. Really appreciate that, thank you for all that you do.",
    name: "mandywilliams",
    role: "Repeat Client · United States",
    flag: "🇺🇸",
    isGreen: false,
    tags: ["Repeat Client", "Reliable"],
  },
  {
    id: 4,
    quote: "Wow is all I can say. Great at what he does. Go above and beyond. Do whatever it takes to get the job completed correctly. I will make sure to use him for most of my projects. Attention to detail is top-notch.",
    name: "mandywilliams",
    role: "Repeat Client · United States",
    flag: "🇺🇸",
    isGreen: false,
    tags: ["Top Notch", "Detail-oriented"],
  },
  {
    id: 5,
    quote: "Absolutely phenomenal experience! The work exceeded my expectations in every way. Communication was seamless, every question I had was answered promptly. I highly recommend Zain for anyone looking for exceptional work.",
    name: "lucialucci",
    role: "Client · Canada",
    flag: "🇨🇦",
    isGreen: false,
    tags: ["Phenomenal", "Communication"],
  },
  {
    id: 6,
    quote: "Seller was amazing! This was exactly what I was looking for. He was very responsive and understanding to my needs.",
    name: "solo24",
    role: "Client · United States",
    flag: "🇺🇸",
    isGreen: false,
    tags: ["Responsive", "Understanding"],
  },
  {
    id: 7,
    quote: "This man is awesome! He helped me with my complicated project and solved the issue! He was truly into the project and basically saved the whole startup!",
    name: "keewlnek",
    role: "Client · Poland",
    flag: "🇵🇱",
    isGreen: false,
    tags: ["Problem Solver", "Startup"],
  },
  {
    id: 8,
    quote: "I am very happy with this Seller's work! Highly recommend him! He does very good work at a reasonable price and delivery is fast. Thanks a lot!",
    name: "desperado23",
    role: "Repeat Client · Trinidad & Tobago",
    flag: "🇹🇹",
    isGreen: false,
    tags: ["Fast Delivery", "Value"],
  },
  {
    id: 9,
    quote: "Great work, professionally done on time! Plan to engage him more for future projects.",
    name: "Verified Client",
    role: "Custom AI & Workflow Automation",
    flag: "🌍",
    isGreen: false,
    tags: ["On Time", "Professional"],
  },
  {
    id: 10,
    quote: "Throughout the entire project, he communicated clearly and proactively, kept us updated every step of the way, and acted quickly whenever action was needed.",
    name: "Verified Client",
    role: "CRM & Automation Project",
    flag: "🌍",
    isGreen: false,
    tags: ["CRM", "Communication"],
  },
];

// ─── World dot positions ──────────────────────────────────────────────────────
const worldDots = [
  { x: 66, y: 42, isHome: true, label: "Pakistan — HQ", size: 2.2 },
  { x: 20, y: 36, label: "United States", size: 1.8 },
  { x: 22, y: 27, label: "Canada", size: 1.6 },
  { x: 52, y: 29, label: "Poland", size: 1.5 },
  { x: 28, y: 53, label: "Trinidad & Tobago", size: 1.4 },
  { x: 47, y: 28, size: 1.2 },
  { x: 53, y: 34, size: 1.1 },
  { x: 60, y: 27, size: 1.2 },
  { x: 72, y: 38, size: 1.1 },
  { x: 80, y: 40, size: 1.0 },
  { x: 83, y: 48, size: 1.0 },
  { x: 33, y: 46, size: 1.1 },
  { x: 58, y: 44, size: 1.0 },
  { x: 49, y: 46, size: 1.0 },
  { x: 16, y: 44, size: 1.0 },
  { x: 76, y: 32, size: 1.0 },
  { x: 65, y: 50, size: 1.0 },
  { x: 41, y: 32, size: 1.0 },
  { x: 18, y: 55, size: 0.9 },
  { x: 88, y: 28, size: 0.9 },
  { x: 44, y: 18, size: 0.9 },
  { x: 70, y: 28, size: 0.9 },
  { x: 36, y: 38, size: 0.8 },
  { x: 56, y: 18, size: 0.8 },
];

// ─── SVG Map ──────────────────────────────────────────────────────────────────
const WorldMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-full aspect-[5/3]">
      <svg viewBox="0 0 100 60" className="w-full h-full rounded-2xl overflow-hidden">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1A1A2E" />
            <stop offset="100%" stopColor="#0d1120" />
          </radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="0.6" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>

        <rect width="100" height="60" fill="url(#bgGrad)" />

        {/* Subtle grid */}
        {[15, 30, 45, 60, 75, 90].map(x => <line key={`v${x}`} x1={x} y1="2" x2={x} y2="58" stroke="#2196F3" strokeWidth="0.06" opacity="0.15" />)}
        {[15, 30, 45].map(y => <line key={`h${y}`} x1="2" y1={y} x2="98" y2={y} stroke="#2196F3" strokeWidth="0.06" opacity="0.15" />)}

        {/* Continents */}
        <path d="M7,14 L30,11 L34,16 L32,34 L25,42 L16,40 L8,30 L7,20 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M28,8 L36,7 L37,14 L30,15 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.15" opacity="0.6"/>
        <path d="M20,43 L32,40 L36,48 L32,58 L22,56 L17,50 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M42,13 L56,11 L58,20 L54,26 L46,26 L42,20 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M44,26 L56,24 L60,36 L56,50 L46,52 L40,44 L40,34 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M56,10 L90,8 L92,18 L88,22 L70,24 L56,20 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M56,22 L74,22 L76,32 L68,36 L58,36 L54,28 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M74,18 L92,16 L94,26 L88,32 L76,32 L72,24 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>
        <path d="M78,32 L86,30 L88,38 L82,42 L76,40 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.8"/>
        <path d="M74,42 L90,40 L92,52 L82,54 L72,50 Z" fill="#1A1A2E" stroke="#2196F3" strokeWidth="0.2" opacity="0.85"/>

        {/* Connection arcs from HQ */}
        {isInView && [
          { tx: 20, ty: 36 }, { tx: 22, ty: 27 }, { tx: 52, ty: 29 }, { tx: 28, ty: 53 },
          { tx: 47, ty: 28 }, { tx: 72, ty: 38 }, { tx: 83, ty: 48 }, { tx: 33, ty: 46 },
        ].map((dest, i) => {
          const mx = (66 + dest.tx) / 2;
          const my = Math.min(42, dest.ty) - 12;
          return (
            <motion.path
              key={i}
              d={`M 66 42 Q ${mx} ${my} ${dest.tx} ${dest.ty}`}
              fill="none" stroke="#2196F3" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 + i * 0.2, ease: 'easeInOut' }}
            />
          );
        })}

        {/* Dots */}
        {worldDots.map((dot, i) => (
          <g key={i}>
            {isInView && (
              <motion.circle
                cx={dot.x} cy={dot.y} r={dot.isHome ? 3.5 : dot.size + 1}
                fill="none" stroke="#2196F3" strokeWidth="0.25"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
            <motion.circle
              cx={dot.x} cy={dot.y} r={dot.size}
              fill={dot.isHome ? "#2196F3" : "#3F51B5"}
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.2 + i * 0.06 }}
            />
          </g>
        ))}

        {/* HQ label */}
        {isInView && (
          <motion.text
            x={63} y={39} fontSize="2" fill="#2196F3" fontFamily="sans-serif" fontWeight="bold" textAnchor="end"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            HQ
          </motion.text>
        )}
      </svg>

      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <div className="flex items-center gap-1.5 bg-brand-dark/90 px-3 py-1.5 rounded-lg border border-brand-blue/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_6px_#2196F3]" />
          <span className="text-white/70 text-[10px] font-medium">HQ</span>
        </div>
        <div className="flex items-center gap-1.5 bg-brand-dark/90 px-3 py-1.5 rounded-lg border border-brand-indigo/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-indigo shadow-[0_0_6px_#3F51B5]" />
          <span className="text-white/70 text-[10px] font-medium">Global Clients</span>
        </div>
      </div>
    </div>
  );
};

// ─── Green Review Card ────────────────────────────────────────────────────────
const GreenCard = ({ review, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -8,
        rotateY: 3,
        boxShadow: '0 20px 60px rgba(57, 211, 83, 0.25)',
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group relative break-inside-avoid mb-6 cursor-default"
    >
      <div className="relative rounded-2xl overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[1.5px]"
          style={{
            background: 'linear-gradient(135deg, #39d353, #238636, #0d6624, #39d353)',
            backgroundSize: '300% 300%',
            animation: 'borderShift 4s ease infinite',
          }}
        >
          <div className="h-full w-full rounded-2xl bg-[#0a2418]" />
        </div>

        {/* Hover shimmer */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(57,211,83,0.15), transparent 60%)' }}
        />

        <div className="relative z-10 p-7">
          {/* Stars + badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.06, type: 'spring' }}>
                  <Star size={15} className="text-[#39d353] fill-[#39d353]" />
                </motion.div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-[#39d353] tracking-wider uppercase bg-[#39d353]/10 border border-[#39d353]/25 px-2.5 py-0.5 rounded-full">
              5.0 ★
            </span>
          </div>

          <Quote size={22} className="text-[#39d353]/25 mb-3" />
          <p className="text-white/90 text-[15px] leading-relaxed mb-5 font-medium italic">
            "{review.quote}"
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {review.tags.map(tag => (
              <span key={tag} className="text-[10px] text-[#39d353]/70 bg-[#39d353]/8 px-2 py-0.5 rounded-full border border-[#39d353]/15">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#39d353]/15">
            <div className="w-9 h-9 rounded-full bg-[#39d353]/15 flex items-center justify-center text-lg border border-[#39d353]/25">
              {review.flag}
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">{review.name}</p>
              <p className="text-[#39d353]/50 text-xs">{review.role}</p>
            </div>
            <BadgeCheck size={17} className="text-[#39d353]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── White Review Card ────────────────────────────────────────────────────────
const WhiteCard = ({ review, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -8,
        rotateY: -2,
        boxShadow: '0 20px 60px rgba(33, 150, 243, 0.15)',
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group relative break-inside-avoid mb-6 cursor-default"
    >
      <div className="relative bg-white rounded-2xl border border-brand-border p-7 overflow-hidden">
        {/* Hover shimmer */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(33,150,243,0.06), transparent 60%)' }}
        />

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.06, type: 'spring' }}>
                  <Star size={15} className="text-amber-400 fill-amber-400" />
                </motion.div>
              ))}
            </div>
            <Quote size={26} className="text-brand-tint fill-brand-tint" />
          </div>

          <p className="text-brand-gray text-[15px] leading-relaxed mb-5 italic">
            "{review.quote}"
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {review.tags.map(tag => (
              <span key={tag} className="text-[10px] text-brand-blue bg-brand-tint px-2 py-0.5 rounded-full border border-brand-border">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-lg shadow-sm">
              {review.flag}
            </div>
            <div className="flex-1">
              <p className="text-brand-dark font-bold text-sm">{review.name}</p>
              <p className="text-brand-gray text-xs">{review.role}</p>
            </div>
            <BadgeCheck size={17} className="text-brand-blue" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
const AnimatedStat = ({ icon: Icon, value, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 bg-white border border-brand-border px-5 py-3.5 rounded-2xl shadow-card hover:shadow-brand-lg transition-shadow duration-300"
    >
      <div className="w-10 h-10 bg-brand-tint rounded-xl flex items-center justify-center">
        <Icon size={18} className="text-brand-blue" />
      </div>
      <div className="text-left">
        <p className="text-brand-dark font-bold text-2xl leading-none font-jakarta">{value}</p>
        <p className="text-brand-gray text-xs mt-1">{label}</p>
      </div>
    </motion.div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const Reviews = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const greenReviews = allReviews.filter(r => r.isGreen);
  const whiteReviews = allReviews.filter(r => !r.isGreen);

  return (
    <>
      <Helmet>
        <title>Client Reviews | AZync Solutions — Trusted Worldwide</title>
        <meta name="description" content="Read verified 5-star reviews from AZync Solutions' global clients. Real feedback from clients across the world." />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="pt-36 pb-24 bg-brand-light relative overflow-hidden">
        {/* Parallax bg blobs */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gradient-soft rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gradient-soft rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
            >
              <Badge className="mb-6">
                <Globe2 size={14} className="inline mr-1.5 -mt-0.5" />
                Clients from Across the Globe
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold text-brand-dark mb-6 leading-tight">
              Trusted by Clients{' '}
              <br className="hidden md:block" />
              <span className="text-brand-blue">Worldwide</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-14"
            >
              Every review is 100% real and verified — directly from our satisfied clients around the world.
            </motion.p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedStat icon={Star}   value="5.0"  label="Avg. Rating"  delay={0.3} />
              <AnimatedStat icon={Award}  value="100%" label="Job Success"   delay={0.4} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP + DESCRIPTION ────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <Badge className="mb-4">Our Global Reach</Badge>
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-brand-dark mb-5">
                Delivering Excellence{' '}
                <span className="text-brand-blue">Across Borders</span>
              </h2>
              <p className="text-brand-gray text-base leading-relaxed mb-6">
                From our headquarters in Pakistan, we've partnered with clients across
                North America, Europe, the Caribbean, and beyond, building software
                solutions that transcend time zones and cultures.
              </p>
              <p className="text-brand-gray text-base leading-relaxed mb-8">
                Our team delivers AI-powered solutions, web applications, and automation
                systems to businesses of every size, from scrappy startups to established enterprises.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:underline"
              >
                Join our global family <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Right map */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
              className="relative rounded-2xl overflow-hidden shadow-brand-lg"
            >
              <WorldMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GREEN REVIEWS (First) ────────────────────────────── */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gradient-soft rounded-full blur-[150px] pointer-events-none opacity-50" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              Client <span className="text-brand-blue">Success Stories</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {greenReviews.map((review, i) => (
              <GreenCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHITE REVIEWS ────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              More Happy <span className="text-brand-blue">Clients</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full" />
          </motion.div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
            {whiteReviews.map((review, i) => (
              <WhiteCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gradient-soft blur-[120px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-gradient-soft blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-5">
              Ready to Be Our Next{' '}
              <span className="text-brand-blue">Happy Client?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Let's build something great together. Get in touch today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gradient text-white font-bold px-8 py-4 rounded-xl shadow-brand hover:shadow-brand-lg transition-all"
              >
                Start a Project <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/hire-us"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/15 transition-all"
              >
                Hire Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keyframe for green card border animation */}
      <style>{`
        @keyframes borderShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </>
  );
};

export default Reviews;
