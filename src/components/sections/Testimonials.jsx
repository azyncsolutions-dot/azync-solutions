import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, BadgeCheck } from 'lucide-react';

// ─── Real Client Reviews ─────────────────────────────────────────────────────
const greenReviews = [
  {
    id: 'g1',
    quote: "Excellent Work! The freelancer delivered an outstanding AI voice agent solution for our food business. They successfully set up the voice agent and the results were beyond expectations.",
    name: "Upwork Client",
    role: "AI Voice Agent Project",
    flag: "🌍",
    isGreen: true,
  },
  {
    id: 'g2',
    quote: "I had the pleasure of working with Ali on building an AI automation system for our business, and I can wholeheartedly recommend him. The collaboration felt smooth and reliable from start to finish.",
    name: "Upwork Client",
    role: "AI Automation System",
    flag: "🌍",
    isGreen: true,
  },
];

const whiteReviews = [
  {
    id: 'w1',
    quote: "One of my fav person to work with. Attention to detail goes above and beyond. He always wants to make sure the client is being taken care of the right way. Really appreciate that, thank you for all that you do.",
    name: "mandywilliams",
    role: "Repeat Client · United States",
    flag: "🇺🇸",
    isGreen: false,
  },
  {
    id: 'w2',
    quote: "Wow is all I can say. Great at what he does. Go above and beyond. Do whatever it takes to get the job completed correctly. I will make sure to use him for most of my projects. Attention to detail is top-notch.",
    name: "mandywilliams",
    role: "Repeat Client · United States",
    flag: "🇺🇸",
    isGreen: false,
  },
  {
    id: 'w3',
    quote: "Absolutely phenomenal experience! The work exceeded my expectations in every way. The AI-generated text to video prompts were professional, precise and incredibly detailed. I highly recommend Zain for anyone looking for exceptional work.",
    name: "lucialucci",
    role: "Canada",
    flag: "🇨🇦",
    isGreen: false,
  },
  {
    id: 'w4',
    quote: "Seller was amazing! This was exactly what I was looking for. He was very responsive and understanding to my needs.",
    name: "solo24",
    role: "United States",
    flag: "🇺🇸",
    isGreen: false,
  },
  {
    id: 'w5',
    quote: "This man is awesome! He helped me with my complicated project and solved the issue! I really recommend you buying his gigs, he was truly into the project and basically saved the whole startup!",
    name: "keewlnek",
    role: "Poland",
    flag: "🇵🇱",
    isGreen: false,
  },
  {
    id: 'w6',
    quote: "I am very happy with this Seller's work! Highly recommend him! He does very good work at a reasonable price and delivery is fast. Thanks a lot!",
    name: "desperado23",
    role: "Repeat Client · Trinidad and Tobago",
    flag: "🇹🇹",
    isGreen: false,
  },
  {
    id: 'w7',
    quote: "Great work, professionally done on time! Plan to engage him more for future projects.",
    name: "Upwork Client",
    role: "Custom AI Agent & Workflow Automation",
    flag: "⭐",
    isGreen: false,
  },
  {
    id: 'w8',
    quote: "Throughout the entire project, he communicated clearly and proactively, kept us updated every step of the way, and acted quickly whenever action was needed. Ali is your guy.",
    name: "Upwork Client",
    role: "Notion CRM + Automations (Make / Zapier)",
    flag: "⭐",
    isGreen: false,
  },
];

// ─── Green Card (Upwork-style) ────────────────────────────────────────────────
const GreenCard = ({ review }) => (
  <motion.div
    whileHover={{ scale: 1.04, rotateY: 4, rotateX: -3 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    style={{ transformStyle: 'preserve-3d', perspective: 800 }}
    className="relative flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden mx-4 cursor-default"
  >
    {/* Glowing border */}
    <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-[#39d353] via-[#238636] to-[#0d6624]">
      <div className="h-full w-full rounded-2xl bg-[#0a2418]" />
    </div>

    {/* Animated green glow */}
    <motion.div
      className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 bg-[#39d353]/30 z-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />

    <div className="relative z-10 p-7 flex flex-col gap-4">
      {/* Header: Stars + Upwork badge */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-[#39d353] fill-[#39d353]" />
          ))}
        </div>
        <span className="text-[10px] font-bold tracking-widest text-[#39d353] uppercase bg-[#39d353]/10 px-2 py-1 rounded-full border border-[#39d353]/30">
          Upwork ✓
        </span>
      </div>

      {/* Quote */}
      <p className="text-white/90 text-sm leading-relaxed italic flex-grow">
        "{review.quote}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#39d353]/20">
        <div className="w-9 h-9 rounded-full bg-[#39d353]/20 border border-[#39d353]/40 flex items-center justify-center text-lg">
          {review.flag}
        </div>
        <div>
          <p className="text-white font-bold text-sm">{review.name}</p>
          <p className="text-[#39d353]/80 text-xs">{review.role}</p>
        </div>
        <BadgeCheck size={18} className="ml-auto text-[#39d353]" />
      </div>
    </div>
  </motion.div>
);

// ─── White Card ───────────────────────────────────────────────────────────────
const WhiteCard = ({ review }) => (
  <motion.div
    whileHover={{ scale: 1.04, rotateY: -4, rotateX: 3 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    style={{ transformStyle: 'preserve-3d', perspective: 800 }}
    className="relative flex-shrink-0 w-[320px] md:w-[380px] mx-4 cursor-default"
  >
    {/* Blue glow on hover */}
    <motion.div
      className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 bg-blue-400/20 z-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />

    <div className="relative z-10 bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-100">
      {/* Stars */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <Quote size={28} className="text-blue-100 fill-blue-100" />
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-sm leading-relaxed italic flex-grow">
        "{review.quote}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg shadow">
          {review.flag}
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.role}</p>
        </div>
        <BadgeCheck size={18} className="ml-auto text-blue-500" />
      </div>
    </div>
  </motion.div>
);

// ─── Infinite Marquee Row ─────────────────────────────────────────────────────
const MarqueeRow = ({ reviews, direction = 'left', CardComponent, speed = 40 }) => {
  const doubled = [...reviews, ...reviews, ...reviews];
  const totalWidth = doubled.length * (380 + 32); // card width + mx-4*2
  const duration = totalWidth / speed;

  return (
    <div className="overflow-hidden py-3 group">
      <motion.div
        className="flex"
        animate={{ x: direction === 'left' ? [-totalWidth / 3, 0] : [0, -totalWidth / 3] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
        style={{ width: `${totalWidth}px` }}
      >
        {doubled.map((review, i) => (
          <CardComponent key={`${review.id}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute bottom-[-80px] right-[10%] w-[400px] h-[400px] rounded-full bg-[#39d353]/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
              ⭐ 5.0 · Verified Upwork Reviews
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-gray-900 mb-4">
              Clients Love <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Work</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Real reviews from real clients. Every word is directly from our Upwork profile.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-8 mt-8 flex-wrap"
          >
            {[
              { value: '5.0', label: 'Average Rating' },
              { value: '100%', label: 'Job Success' },
              { value: '40+', label: 'Projects Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-jakarta font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 1 — Green Upwork cards scrolling left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <MarqueeRow reviews={greenReviews} direction="left" CardComponent={GreenCard} speed={30} />
        </motion.div>

        {/* Row 2 — White cards scrolling right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <MarqueeRow reviews={whiteReviews} direction="right" CardComponent={WhiteCard} speed={35} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
