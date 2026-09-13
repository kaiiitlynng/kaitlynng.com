export interface Project {
  id: string
  number: string
  title: string
  isPlaceholder?: boolean
  tags: string[]
  year: string
  description: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'ellumigen',
    number: '01',
    title: 'Ellumigen: AI Genomic Analysis',
    tags: ['AI', 'Genomics', 'Product'],
    year: '2026',
    description: 'Description of project goes here.',
  },
  {
    id: 'lkr',
    number: '02',
    title: 'Local Knee Rehab (LKR)',
    tags: ['Hardware', 'Health'],
    year: '2026',
    description: 'Description of project goes here.',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'PROJECT',
    isPlaceholder: true,
    tags: [],
    year: '',
    description: 'Coming soon.',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'PROJECT',
    isPlaceholder: true,
    tags: [],
    year: '',
    description: 'Coming soon.',
  },
]
