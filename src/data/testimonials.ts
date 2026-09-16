import type { Testimonial } from '@/types';
import bryan from '@/assets/avatars/bryan-cassady.jpg';
import aija from '@/assets/avatars/aija-peltola.jpg';
import felipe from '@/assets/avatars/felipe-pedroni.jpg';
import filippo from '@/assets/avatars/filippo-pavone.jpg';
import pedro from '@/assets/avatars/pedro-duarte.jpg';
import ranjit from '@/assets/avatars/ranjit-bhinge.jpg';

// Quotes are the authors' own words and are kept verbatim.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Bryan Cassady',
    company: 'Global Entrepreneurship Alliance',
    photo: bryan,
    linkedinUrl: 'https://www.linkedin.com/in/bryancassady/',
    rating: 5,
    text: "As the Director of the Global Entrepreneurship Alliance, I'm proud to recommend Douglas Gouveia. If you are looking for a good developer and someone able to manage projects so they get done, he is someone I can strongly recommend. Over the last 2 years Douglas worked almost 18 months. The work he finished is impressive. Douglas consistently surprised me with his tenacity, and willingness to do whatever it takes to get something done. He was professional and always a good team player. What I especially liked about Douglas is his willingness to take responsibility when things went wrong or needed to be improved. He is someone a company, a team can count on.",
    date: 'Jan 2023',
  },
  {
    id: 't2',
    author: 'Aija Peltola',
    company: 'Simplified',
    photo: aija,
    linkedinUrl: 'https://www.linkedin.com/in/aijapeltola/',
    rating: 5,
    text: "I can warmly recommend Douglas for software projects especially built with Bubble.io. The biggest strength of Douglas is his deep technical and business logic understanding. He works very hard to make sure the software is done by the best of his abilities. Douglas is also a fast learner and is constantly improving his skills. We in Finland work with trust and honesty, and Douglas has for sure proven his reliability.",
    date: 'Jun 2023',
  },
  {
    id: 't3',
    author: 'Felipe Thomaz Pedroni',
    company: 'Bivrost',
    photo: felipe,
    linkedinUrl: 'https://www.linkedin.com/in/felipethomazpedroni/',
    rating: 5,
    text: "I had the opportunity to work with Douglas on a relatively complex project involving full-stack development, payment API integrations, and non-trivial business logic. I can say with confidence that he is the type of developer who truly solves problems. Douglas possesses a trait worth more than any specific tech stack: autonomy. He doesn't just execute tasks — he understands the problem as a whole, asks the right questions, proposes improvements, and follows through until he finds a solid solution. Another strong suit is his product-minded thinking and critical sense. He doesn't simply bow to pressure for deliveries that lack a technical foundation. I have also seen him take over problematic systems and bring order to the house. In short, Douglas is a developer with an ownership mentality, strong execution capabilities, and a rare combination of autonomy, product vision, and technical resilience.",
    date: 'Jan 2024',
  },
  {
    id: 't4',
    author: 'Filippo Pavone',
    company: 'Sales ABX',
    photo: filippo,
    linkedinUrl: 'https://www.linkedin.com/in/filippo-pavone/',
    rating: 5,
    text: "I had the pleasure of working with Douglas for over eight months on a highly complex project, and throughout that time he consistently demonstrated a high level of professionalism. He was reliable with timelines, communicated clearly, and applied thoughtful, effective techniques to solve challenging problems. Douglas handled both the backend and frontend development of the platform using Bubble, while also optimizing performance using Supabase. The end result was a robust sales tool designed to help users research accounts efficiently, and his contribution was instrumental in bringing it to life.",
    date: 'May 2025',
  },
  {
    id: 't5',
    author: 'Pedro Duarte',
    company: 'Befree Academy',
    photo: pedro,
    linkedinUrl: 'https://www.linkedin.com/in/pedrocastroduarte/',
    rating: 5,
    text: "Working with Douglas was a game-changer for our platform's development. As a Certified Senior Bubble Developer, he handles intricate code-like logic and custom states that most developers find daunting. He moved us from a simple MVP to a high-performance system capable of handling thousands of users without breaking a sweat. His UI/UX design competency ensured that the final product was not only functional but also intuitive and highly responsive.",
    date: 'Jan 2026',
  },
  {
    id: 't6',
    author: 'Ranjit Bhinge',
    company: 'Blur Studio',
    photo: ranjit,
    linkedinUrl: 'https://www.linkedin.com/in/ranjitbhinge/',
    rating: 5,
    text: "Douglas worked with Blur Studio as a Bubble developer and Operations Manager. He played a crucial role in setting up processes for managing operations, executing on large projects and making sure we had meaningful checkpoints to manage each of them well. He was also instrumental in executing on several projects himself using tools like Bubble and Lovable to help founders create, validate and launch startups with web and mobile apps. He showed great promise and has constantly been pushing himself to learn, grow and improve his skills with nocode, AI and project management.",
    date: 'Jan 2026',
  },
];
