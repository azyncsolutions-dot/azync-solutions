import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PhoneCall, Cpu, CheckCircle2, ShieldCheck, Zap, Play, Clock, Flame, UserCheck } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import whatsappVideo from '../assets/WhatsApp Video 2026-10-09 at 9.45.35 PM.mp4';

const steps = [
  {
    step: '01',
    title: 'Instant 24/7 Call Answering',
    desc: 'Riley answers inbound calls instantly on the first ring, eliminating hold times and missed phone calls after hours or during peak dispatch surges.'
  },
  {
    step: '02',
    title: 'AI-Powered Triage & Diagnosis',
    desc: 'Powered by voice AI, Riley asks smart diagnostic questions, determines if an HVAC issue is a critical emergency (e.g. heating outage in winter), and collects caller location.'
  },
  {
    step: '03',
    title: 'Automated Dispatch & Escalation',
    desc: 'Logs appointment requests into your CRM/schedule and immediately alerts on-call technicians via SMS/email with a full summary transcript.'
  }
];

const features = [
  { icon: Clock, title: '24/7 After-Hours Answering', desc: 'Never lose another $1,000+ HVAC repair lead to voicemail or a competitor when your office is closed.' },
  { icon: Cpu, title: 'Advanced Voice AI', desc: 'Understands complex speech, accent variations, and contractor jargon naturally without rigid phone trees.' },
  { icon: Flame, title: 'Emergency HVAC Triage', desc: 'Identifies urgent system breakdowns vs routine maintenance calls and escalates accordingly.' },
  { icon: ShieldCheck, title: 'Zero Hold Times', desc: 'Handles simultaneous concurrent calls effortlessly during weather spikes or peak dispatch hours.' },
  { icon: Zap, title: 'Instant Job Summaries', desc: 'Generates structured job tickets and sends SMS alerts directly to your technicians or dispatchers.' },
  { icon: UserCheck, title: 'CRM & Calendar Integration', desc: 'Syncs lead data directly into your existing dispatch software, CRM, or scheduling calendar.' }
];

const Riley = () => {
  return (
    <>
      <Helmet>
        <title>Riley | AI Voice Receptionist for HVAC Businesses</title>
        <meta name="description" content="Riley is an AI voice receptionist for HVAC and service businesses. Stop missing calls and capture after-hours leads 24/7." />
        <link rel="canonical" href="https://www.azyncsolutions.com/riley" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6">
              <PhoneCall size={14} className="inline mr-1.5 -mt-0.5" />
              24/7 AI Voice Receptionist
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-bold text-brand-dark mb-6 leading-tight">
              Riley: AI Voice Receptionist for <br className="hidden md:block" />
              <span className="text-gradient">HVAC & Service Businesses</span>
            </h1>
            <p className="text-brand-gray text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Never miss a high-value emergency service call again. Riley answers 24/7, triages caller requests, and dispatches jobs automatically — powered by state-of-the-art voice AI.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button to="/contact" variant="primary">Book a Call</Button>
              <a href="https://www.upwork.com/freelancers/alis775?mp_source=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-inter font-medium rounded-[10px] transition-all duration-300 ease-out border-2 border-brand-border bg-white text-brand-dark hover:border-brand-blue py-3 px-6 text-sm">
                Hire Us on Upwork
              </a>
            </div>
          </motion.div>

          {/* Video Player Section */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-brand-border shadow-brand-lg bg-black relative flex flex-col">
            <div className="relative aspect-video w-full">
              <video 
                controls 
                preload="metadata"
                src={whatsappVideo} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="bg-brand-dark px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0">
                  <Play size={20} className="fill-brand-blue ml-0.5" />
                </div>
                <div>
                  <h4 className="font-jakarta font-bold text-white text-sm">AI Voice Receptionist Schedules & Transfers Calls — 24/7 HVAC Intake</h4>
                  <p className="text-white/60 text-xs">Live Voice AI Product Demonstration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <Card className="bg-red-50/50 border-red-100 p-8 md:p-10">
              <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">The Problem</Badge>
              <h3 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">
                Missed Calls = Lost HVAC Revenue
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                HVAC contractors lose up to 30% of high-margin emergency jobs simply because inbound calls go to voicemail after 5:00 PM or during peak summer/winter call spikes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Homeowners call the next contractor if no one answers immediately.</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Human answering services are expensive and lack technical HVAC knowledge.</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Traditional phone trees frustrate callers with rigid voice menus.</li>
              </ul>
            </Card>

            {/* Solution */}
            <Card className="bg-brand-tint border-brand-border p-8 md:p-10">
              <Badge className="mb-4">The Solution</Badge>
              <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-4">
                Riley: 24/7 AI Voice Receptionist
              </h3>
              <p className="text-brand-gray text-base leading-relaxed mb-4">
                Riley engages callers like an experienced front-desk receptionist. It understands HVAC problems, triages emergency service calls, gathers job site details, and schedules callbacks instantly.
              </p>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Speaks naturally with human-like conversational voice AI.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Differentiates AC no-cool emergencies from routine maintenance.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Direct notification via SMS to on-call technicians.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works (3 Steps) */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Workflow</Badge>
            <h2 className="text-3xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              How Riley Works in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <Card className="h-full">
                  <div className="text-4xl font-jakarta font-extrabold text-brand-blue/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-jakarta font-bold text-brand-dark mb-3">{item.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Capabilities</Badge>
            <h2 className="text-3xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              Built Specifically for Home Service Providers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat) => {
              const IconComp = feat.icon;
              return (
                <Card key={feat.title} className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-jakarta font-bold text-brand-dark mb-2">{feat.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{feat.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-jakarta font-bold mb-6">
            Ready to deploy Riley for your business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a call with co-founders Ali & Zain to watch a live demonstration and integrate Riley into your phone system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary">Book a Call</Button>
            <a href="https://www.upwork.com/freelancers/alis775?mp_source=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-inter font-medium rounded-[10px] transition-all duration-300 ease-out border-2 border-white/20 bg-transparent text-white hover:bg-white/10 py-3 px-6 text-sm">Hire Us on Upwork</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Riley;
