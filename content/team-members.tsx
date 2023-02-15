import { StaticImageData } from 'next/image';

import brett from '@/public/team/brett.png';
import cam from '@/public/team/cameron.png';
import terrisa from '@/public/team/terrisa.png';
import eric from '@/public/team/eric.png';
import alex from '@/public/team/alex.png';

export interface TeamMember {
  advisor: boolean;
  name: string;
  title: string;
  image: StaticImageData;
  degree: string;
  description: string;
  linkedin: string;
  twitter: string;
}

const teamArray = [
  {
    advisor: false,
    name: 'Brett Cornick',
    title: 'Founder & CEO/CTO',
    image: brett,
    degree: 'MSc Computational Materials Science',
    description:
      'Brett is a designer, developer, and technical project leader that has spent most of his career at early-stage deep-tech start-ups and research organizations.',
    linkedin: 'https://www.linkedin.com/in/brettcornick/',
    twitter: 'https://twitter.com/brett_cornick',
  },
  {
    advisor: false,
    name: 'Cameron Nili',
    title: 'Founder & COO',
    image: cam,
    degree: 'BS Business Administration',
    description:
      'Cameron is a strategic thinker with years of experience designing and implementing AI- and blockchain-based systems for Fortune 500 companies.',
    linkedin: 'https://www.linkedin.com/in/cam-nili/',
    twitter: 'https://twitter.com/krypto_kam_',
  },
  {
    advisor: true,
    name: 'Terrisa Duenas, PhD',
    title: 'Advisor - Science & Academia',
    image: terrisa,
    degree: 'PhD Mechanical Engineering',
    description: 'Current: Founder & CEO at ESTE Leverage',
    linkedin: 'https://www.linkedin.com/in/terrisaduenas/',
    twitter: '',
  },
  {
    advisor: true,
    name: 'Eric Muckley, PhD',
    title: 'Advisor - System Design',
    image: eric,
    degree: 'PhD Energy Science and Engineering',
    description: 'Current: Research Scientist at Citrine Informatics',
    linkedin: 'https://www.linkedin.com/in/eric-muckley/',
    twitter: '',
  },
  {
    advisor: true,
    name: 'Alex Sosnowski',
    title: 'Advisor - Token Design',
    image: alex,
    degree: 'BS Business Administration',
    description: 'Current: Senior PM at Coinbase Cloud',
    linkedin: 'https://www.linkedin.com/in/alexander-sosnowski/',
    twitter: '',
  },
];

export default teamArray;
