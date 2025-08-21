import { ConceptNode, LearningContent, StudentProgress } from '../types/curriculum';

export const conceptNodes: ConceptNode[] = [
  // Subject level (large nodes)
  {
    id: 'math',
    name: 'Mathematics',
    shortName: 'Math',
    description: 'Explore numbers, patterns, and logical reasoning',
    color: 'bg-blue-500',
    darkColor: '#1e40af',
    size: 'large',
    position: { x: 150, y: 120 },
    type: 'subject',
    children: ['algebra', 'geometry', 'calculus'],
    progress: 68,
    status: 'progressing'
  },
  {
    id: 'science',
    name: 'Science',
    shortName: 'Science',
    description: 'Discover how the world works through observation and experimentation',
    color: 'bg-green-500',
    darkColor: '#166534',
    size: 'large',
    position: { x: 150, y: 280 },
    type: 'subject',
    children: ['physics', 'chemistry', 'biology'],
    progress: 45,
    status: 'progressing'
  },
  {
    id: 'english',
    name: 'English Language',
    shortName: 'English',
    description: 'Master communication, literature, and language skills',
    color: 'bg-purple-500',
    darkColor: '#7c2d12',
    size: 'large',
    position: { x: 150, y: 440 },
    type: 'subject',
    children: ['grammar', 'literature', 'writing'],
    progress: 72,
    status: 'progressing'
  },

  // Math topics (medium nodes)
  {
    id: 'algebra',
    name: 'Algebra',
    shortName: 'Algebra',
    description: 'Work with variables, equations, and mathematical relationships',
    color: 'bg-blue-400',
    darkColor: '#2563eb',
    size: 'medium',
    position: { x: 320, y: 80 },
    type: 'topic',
    parent: 'math',
    children: ['linear-eq', 'quadratic-eq'],
    progress: 85,
    status: 'mastered'
  },
  {
    id: 'geometry',
    name: 'Geometry',
    shortName: 'Geometry',
    description: 'Study shapes, space, and spatial relationships',
    color: 'bg-blue-400',
    darkColor: '#2563eb',
    size: 'medium',
    position: { x: 320, y: 140 },
    type: 'topic',
    parent: 'math',
    progress: 62,
    status: 'progressing'
  },
  {
    id: 'calculus',
    name: 'Calculus',
    shortName: 'Calculus',
    description: 'Explore rates of change and accumulation',
    color: 'bg-blue-400',
    darkColor: '#2563eb',
    size: 'medium',
    position: { x: 320, y: 200 },
    type: 'topic',
    parent: 'math',
    progress: 24,
    status: 'started'
  },

  // Science topics (medium nodes)
  {
    id: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    description: 'Understand matter, energy, and the fundamental forces',
    color: 'bg-green-400',
    darkColor: '#16a34a',
    size: 'medium',
    position: { x: 320, y: 240 },
    type: 'topic',
    parent: 'science',
    progress: 58,
    status: 'progressing'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    description: 'Explore atoms, molecules, and chemical reactions',
    color: 'bg-green-400',
    darkColor: '#16a34a',
    size: 'medium',
    position: { x: 320, y: 300 },
    type: 'topic',
    parent: 'science',
    progress: 41,
    status: 'progressing'
  },
  {
    id: 'biology',
    name: 'Biology',
    shortName: 'Biology',
    description: 'Study living organisms and life processes',
    color: 'bg-green-400',
    darkColor: '#16a34a',
    size: 'medium',
    position: { x: 320, y: 360 },
    type: 'topic',
    parent: 'science',
    progress: 33,
    status: 'started'
  },

  // Algebra concepts (small nodes)
  {
    id: 'linear-eq',
    name: 'Linear Equations',
    shortName: 'Linear Eq',
    description: 'Solve equations with variables to the first power',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 60 },
    type: 'concept',
    parent: 'algebra',
    progress: 92,
    status: 'mastered'
  },
  {
    id: 'quadratic-eq',
    name: 'Quadratic Equations',
    shortName: 'Quadratic',
    description: 'Work with equations involving squared variables',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 100 },
    type: 'concept',
    parent: 'algebra',
    progress: 67,
    status: 'progressing'
  }
];

export const learningContent: LearningContent[] = [
  {
    id: 'algebra-content',
    nodeId: 'algebra',
    title: 'Master Algebraic Thinking',
    description: 'Algebra is the language of mathematics that helps us solve real-world problems using variables and equations.',
    keyPoints: [
      'Variables represent unknown quantities',
      'Equations show relationships between quantities',
      'Solving equations reveals the value of unknowns',
      'Algebraic thinking applies to many real situations'
    ],
    activities: [
      { id: 'alg-1', title: 'Introduction to Variables', type: 'video', duration: 8, completed: true },
      { id: 'alg-2', title: 'Solving Basic Equations', type: 'reading', duration: 12, completed: true },
      { id: 'alg-3', title: 'Practice Problems', type: 'quiz', duration: 15, completed: false },
      { id: 'alg-4', title: 'Real-World Applications', type: 'simulation', duration: 20, completed: false }
    ],
    estimatedTime: 55,
    difficulty: 'intermediate'
  },
  {
    id: 'linear-eq-content',
    nodeId: 'linear-eq',
    title: 'Linear Equations Mastery',
    description: 'Linear equations are the foundation of algebra. Master these to unlock more advanced mathematical concepts.',
    keyPoints: [
      'Linear equations have variables to the first power only',
      'The graph of a linear equation is always a straight line',
      'Use inverse operations to solve for the variable',
      'Check your solution by substituting back into the original equation'
    ],
    activities: [
      { id: 'lin-1', title: 'What are Linear Equations?', type: 'video', duration: 6, completed: true },
      { id: 'lin-2', title: 'Solving One-Step Equations', type: 'reading', duration: 10, completed: true },
      { id: 'lin-3', title: 'Multi-Step Equations', type: 'quiz', duration: 18, completed: true },
      { id: 'lin-4', title: 'Word Problems', type: 'simulation', duration: 25, completed: false }
    ],
    estimatedTime: 59,
    difficulty: 'beginner'
  },
  {
    id: 'physics-content',
    nodeId: 'physics',
    title: 'Explore the Physical World',
    description: 'Physics helps us understand how things move, why they move, and the forces that govern our universe.',
    keyPoints: [
      'Motion can be described using position, velocity, and acceleration',
      'Forces cause changes in motion',
      'Energy is conserved but can change forms',
      'Physics principles apply from atoms to galaxies'
    ],
    activities: [
      { id: 'phy-1', title: 'Introduction to Motion', type: 'video', duration: 10, completed: true },
      { id: 'phy-2', title: 'Forces and Newton\'s Laws', type: 'reading', duration: 15, completed: true },
      { id: 'phy-3', title: 'Motion Calculations', type: 'quiz', duration: 20, completed: false },
      { id: 'phy-4', title: 'Virtual Lab: Projectile Motion', type: 'simulation', duration: 30, completed: false }
    ],
    estimatedTime: 75,
    difficulty: 'intermediate'
  }
];

export const studentProgress: StudentProgress[] = [
  {
    nodeId: 'algebra',
    progress: 85,
    status: 'mastered',
    timeSpent: 180,
    lastAccessed: new Date('2024-01-15'),
    completedActivities: ['alg-1', 'alg-2']
  },
  {
    nodeId: 'linear-eq',
    progress: 92,
    status: 'mastered',
    timeSpent: 120,
    lastAccessed: new Date('2024-01-14'),
    completedActivities: ['lin-1', 'lin-2', 'lin-3']
  },
  {
    nodeId: 'quadratic-eq',
    progress: 67,
    status: 'progressing',
    timeSpent: 95,
    lastAccessed: new Date('2024-01-13'),
    completedActivities: []
  },
  {
    nodeId: 'physics',
    progress: 58,
    status: 'progressing',
    timeSpent: 145,
    lastAccessed: new Date('2024-01-12'),
    completedActivities: ['phy-1', 'phy-2']
  }
];