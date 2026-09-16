import type { Education } from '@/types';

export const educations: Education[] = [
  {
    id: 'debrecen',
    institution: 'University of Debrecen',
    degree: "Master's",
    field: 'Engineering Management',
    location: 'Debrecen, Hungary',
    startYear: 2019,
    endYear: 2021,
  },
  {
    id: 'ufv',
    institution: 'Universidade Federal de Viçosa',
    degree: "Bachelor's",
    field: 'Production Engineering',
    location: 'Viçosa, MG, Brazil',
    startYear: 2010,
    endYear: 2017,
  },
  {
    id: 'asu',
    institution: 'Arizona State University',
    degree: 'Exchange',
    field: 'Industrial Engineering',
    subtitle: 'Exchange program',
    location: 'Phoenix, AZ, USA',
    startYear: 2014,
    endYear: 2014,
  },
  {
    id: 'rutgers',
    institution: 'Rutgers University',
    degree: 'Language program',
    field: 'American Language Studies (PALS-NB)',
    location: 'New Brunswick, NJ, USA',
    startYear: 2013,
    endYear: 2014,
  },
];
