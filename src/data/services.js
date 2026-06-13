import { Code, Smartphone, BrainCircuit, PenTool, Webhook, Briefcase } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom React & full-stack web applications built for speed, scalability, and SEO.',
    icon: Code,
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile experiences for iOS and Android that users love.',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'Firebase']
  },
  {
    id: 3,
    title: 'AI & ML Solutions',
    description: 'Integrate intelligent automation, chatbots, and predictive algorithms into your business.',
    icon: BrainCircuit,
    tags: ['Python', 'TensorFlow', 'OpenAI', 'NLP']
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces crafted with modern design systems and user research.',
    icon: PenTool,
    tags: ['Figma', 'Prototyping', 'Wireframing']
  },
  {
    id: 5,
    title: 'API Development & Integration',
    description: 'Robust REST and GraphQL APIs to connect your services and third-party platforms.',
    icon: Webhook,
    tags: ['REST', 'GraphQL', 'Express', 'MongoDB']
  },
  {
    id: 6,
    title: 'Tech Consulting',
    description: 'Expert technical strategy, code audits, and architecture planning for startups.',
    icon: Briefcase,
    tags: ['Architecture', 'Strategy', 'Audits']
  }
];
