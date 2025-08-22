import { ConceptNode, LearningContent, StudentProgress } from '../types/curriculum';

export const conceptNodes: ConceptNode[] = [
  // Subject level (large nodes) - Top row
  {
    id: 'math',
    name: 'Mathematics',
    shortName: 'Math',
    description: 'Explore numbers, patterns, and logical reasoning',
    color: 'bg-blue-500',
    darkColor: '#1e40af',
    size: 'large',
    position: { x: 150, y: 80 },
    type: 'subject',
    children: ['algebra', 'geometry', 'calculus', 'statistics'],
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
    position: { x: 150, y: 200 },
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
    position: { x: 150, y: 320 },
    type: 'subject',
    children: ['grammar', 'literature', 'writing'],
    progress: 72,
    status: 'progressing'
  },
  {
    id: 'history',
    name: 'History',
    shortName: 'History',
    description: 'Learn about past events and their impact on the present',
    color: 'bg-amber-500',
    darkColor: '#92400e',
    size: 'large',
    position: { x: 150, y: 440 },
    type: 'subject',
    children: ['world-history', 'singapore-history'],
    progress: 38,
    status: 'started'
  },

  // Math topics (medium nodes) - Second column
  {
    id: 'algebra',
    name: 'Algebra',
    shortName: 'Algebra',
    description: 'Work with variables, equations, and mathematical relationships',
    color: 'bg-blue-400',
    darkColor: '#2563eb',
    size: 'medium',
    position: { x: 320, y: 40 },
    type: 'topic',
    parent: 'math',
    children: ['linear-eq', 'quadratic-eq', 'polynomials'],
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
    position: { x: 320, y: 100 },
    type: 'topic',
    parent: 'math',
    children: ['triangles', 'circles', 'coordinate-geometry'],
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
    position: { x: 320, y: 160 },
    type: 'topic',
    parent: 'math',
    children: ['limits', 'derivatives', 'integrals'],
    progress: 24,
    status: 'started'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    shortName: 'Stats',
    description: 'Analyze data and understand probability',
    color: 'bg-blue-400',
    darkColor: '#2563eb',
    size: 'medium',
    position: { x: 320, y: 220 },
    type: 'topic',
    parent: 'math',
    children: ['probability', 'data-analysis'],
    progress: 41,
    status: 'progressing'
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
    position: { x: 320, y: 280 },
    type: 'topic',
    parent: 'science',
    children: ['mechanics', 'waves', 'electricity'],
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
    position: { x: 320, y: 340 },
    type: 'topic',
    parent: 'science',
    children: ['atomic-structure', 'chemical-bonding', 'reactions'],
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
    position: { x: 320, y: 400 },
    type: 'topic',
    parent: 'science',
    children: ['cell-biology', 'genetics', 'ecology'],
    progress: 33,
    status: 'started'
  },

  // English topics (medium nodes)
  {
    id: 'grammar',
    name: 'Grammar',
    shortName: 'Grammar',
    description: 'Master the rules and structure of language',
    color: 'bg-purple-400',
    darkColor: '#7c3aed',
    size: 'medium',
    position: { x: 320, y: 460 },
    type: 'topic',
    parent: 'english',
    children: ['parts-of-speech', 'sentence-structure'],
    progress: 78,
    status: 'progressing'
  },
  {
    id: 'literature',
    name: 'Literature',
    shortName: 'Literature',
    description: 'Analyze and appreciate literary works',
    color: 'bg-purple-400',
    darkColor: '#7c3aed',
    size: 'medium',
    position: { x: 320, y: 520 },
    type: 'topic',
    parent: 'english',
    children: ['poetry', 'prose', 'drama'],
    progress: 55,
    status: 'progressing'
  },
  {
    id: 'writing',
    name: 'Writing',
    shortName: 'Writing',
    description: 'Develop effective communication skills',
    color: 'bg-purple-400',
    darkColor: '#7c3aed',
    size: 'medium',
    position: { x: 320, y: 580 },
    type: 'topic',
    parent: 'english',
    children: ['essays', 'creative-writing'],
    progress: 67,
    status: 'progressing'
  },

  // History topics (medium nodes)
  {
    id: 'world-history',
    name: 'World History',
    shortName: 'World Hist',
    description: 'Explore major events in global history',
    color: 'bg-amber-400',
    darkColor: '#d97706',
    size: 'medium',
    position: { x: 320, y: 640 },
    type: 'topic',
    parent: 'history',
    children: ['ancient-civilizations', 'modern-history'],
    progress: 42,
    status: 'started'
  },
  {
    id: 'singapore-history',
    name: 'Singapore History',
    shortName: 'SG History',
    description: 'Learn about Singapore\'s development and heritage',
    color: 'bg-amber-400',
    darkColor: '#d97706',
    size: 'medium',
    position: { x: 320, y: 700 },
    type: 'topic',
    parent: 'history',
    children: ['colonial-period', 'independence'],
    progress: 34,
    status: 'started'
  },

  // Algebra concepts (small nodes) - Third column
  {
    id: 'linear-eq',
    name: 'Linear Equations',
    shortName: 'Linear Eq',
    description: 'Solve equations with variables to the first power',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 20 },
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
    position: { x: 480, y: 60 },
    type: 'concept',
    parent: 'algebra',
    progress: 67,
    status: 'progressing'
  },
  {
    id: 'polynomials',
    name: 'Polynomials',
    shortName: 'Polynomials',
    description: 'Work with expressions with multiple terms',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 100 },
    type: 'concept',
    parent: 'algebra',
    progress: 45,
    status: 'started'
  },

  // Geometry concepts (small nodes)
  {
    id: 'triangles',
    name: 'Triangles',
    shortName: 'Triangles',
    description: 'Properties and theorems of triangles',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 140 },
    type: 'concept',
    parent: 'geometry',
    progress: 73,
    status: 'progressing'
  },
  {
    id: 'circles',
    name: 'Circles',
    shortName: 'Circles',
    description: 'Properties of circles and circular geometry',
    color: 'bg-blue-300',
    darkColor: '#3b82f6',
    size: 'small',
    position: { x: 480, y: 180 },
    type: 'concept',
    parent: 'geometry',
    progress: 51,
    status: 'progressing'
  },

  // Physics concepts (small nodes)
  {
    id: 'mechanics',
    name: 'Mechanics',
    shortName: 'Mechanics',
    description: 'Motion, forces, and energy',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 260 },
    type: 'concept',
    parent: 'physics',
    progress: 64,
    status: 'progressing'
  },
  {
    id: 'waves',
    name: 'Waves',
    shortName: 'Waves',
    description: 'Wave properties and behavior',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 300 },
    type: 'concept',
    parent: 'physics',
    progress: 38,
    status: 'started'
  },
  {
    id: 'electricity',
    name: 'Electricity',
    shortName: 'Electricity',
    description: 'Electric circuits and current',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 340 },
    type: 'concept',
    parent: 'physics',
    progress: 72,
    status: 'progressing'
  },

  // Chemistry concepts (small nodes)
  {
    id: 'atomic-structure',
    name: 'Atomic Structure',
    shortName: 'Atoms',
    description: 'Structure of atoms and elements',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 380 },
    type: 'concept',
    parent: 'chemistry',
    progress: 56,
    status: 'progressing'
  },
  {
    id: 'chemical-bonding',
    name: 'Chemical Bonding',
    shortName: 'Bonding',
    description: 'How atoms bond to form compounds',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 420 },
    type: 'concept',
    parent: 'chemistry',
    progress: 29,
    status: 'started'
  },

  // Biology concepts (small nodes)
  {
    id: 'cell-biology',
    name: 'Cell Biology',
    shortName: 'Cells',
    description: 'Structure and function of cells',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 460 },
    type: 'concept',
    parent: 'biology',
    progress: 41,
    status: 'started'
  },
  {
    id: 'genetics',
    name: 'Genetics',
    shortName: 'Genetics',
    description: 'Heredity and genetic variation',
    color: 'bg-green-300',
    darkColor: '#22c55e',
    size: 'small',
    position: { x: 480, y: 500 },
    type: 'concept',
    parent: 'biology',
    progress: 18,
    status: 'started'
  },

  // English concepts (small nodes)
  {
    id: 'parts-of-speech',
    name: 'Parts of Speech',
    shortName: 'Parts',
    description: 'Nouns, verbs, adjectives, and more',
    color: 'bg-purple-300',
    darkColor: '#a855f7',
    size: 'small',
    position: { x: 480, y: 540 },
    type: 'concept',
    parent: 'grammar',
    progress: 84,
    status: 'mastered'
  },
  {
    id: 'sentence-structure',
    name: 'Sentence Structure',
    shortName: 'Sentences',
    description: 'How to build effective sentences',
    color: 'bg-purple-300',
    darkColor: '#a855f7',
    size: 'small',
    position: { x: 480, y: 580 },
    type: 'concept',
    parent: 'grammar',
    progress: 71,
    status: 'progressing'
  },

  // Literature concepts (small nodes)
  {
    id: 'poetry',
    name: 'Poetry',
    shortName: 'Poetry',
    description: 'Analysis of poems and poetic devices',
    color: 'bg-purple-300',
    darkColor: '#a855f7',
    size: 'small',
    position: { x: 480, y: 620 },
    type: 'concept',
    parent: 'literature',
    progress: 63,
    status: 'progressing'
  },
  {
    id: 'prose',
    name: 'Prose',
    shortName: 'Prose',
    description: 'Novels, short stories, and essays',
    color: 'bg-purple-300',
    darkColor: '#a855f7',
    size: 'small',
    position: { x: 480, y: 660 },
    type: 'concept',
    parent: 'literature',
    progress: 47,
    status: 'started'
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
  },
  {
    id: 'mechanics-content',
    nodeId: 'mechanics',
    title: 'Understanding Mechanics',
    description: 'Mechanics is the branch of physics that deals with motion and forces acting on objects.',
    keyPoints: [
      'Newton\'s three laws of motion govern all mechanical systems',
      'Force equals mass times acceleration (F = ma)',
      'Energy can be kinetic (motion) or potential (stored)',
      'Momentum is conserved in isolated systems'
    ],
    activities: [
      { id: 'mech-1', title: 'Newton\'s Laws Explained', type: 'video', duration: 12, completed: true },
      { id: 'mech-2', title: 'Force and Motion Problems', type: 'reading', duration: 18, completed: false },
      { id: 'mech-3', title: 'Energy Conservation Quiz', type: 'quiz', duration: 15, completed: false },
      { id: 'mech-4', title: 'Virtual Physics Lab', type: 'simulation', duration: 25, completed: false }
    ],
    estimatedTime: 70,
    difficulty: 'intermediate'
  },
  {
    id: 'grammar-content',
    nodeId: 'grammar',
    title: 'English Grammar Fundamentals',
    description: 'Master the building blocks of effective communication through proper grammar usage.',
    keyPoints: [
      'Parts of speech form the foundation of language',
      'Sentence structure determines clarity of meaning',
      'Proper punctuation guides reader understanding',
      'Grammar rules help create professional communication'
    ],
    activities: [
      { id: 'gram-1', title: 'Parts of Speech Overview', type: 'video', duration: 10, completed: true },
      { id: 'gram-2', title: 'Sentence Construction', type: 'reading', duration: 15, completed: true },
      { id: 'gram-3', title: 'Grammar Practice Quiz', type: 'quiz', duration: 20, completed: false },
      { id: 'gram-4', title: 'Writing Exercise', type: 'simulation', duration: 30, completed: false }
    ],
    estimatedTime: 75,
    difficulty: 'beginner'
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
  },
  {
    nodeId: 'mechanics',
    progress: 64,
    status: 'progressing',
    timeSpent: 87,
    lastAccessed: new Date('2024-01-11'),
    completedActivities: ['mech-1']
  },
  {
    nodeId: 'grammar',
    progress: 78,
    status: 'progressing',
    timeSpent: 102,
    lastAccessed: new Date('2024-01-10'),
    completedActivities: ['gram-1', 'gram-2']
  },
  {
    nodeId: 'parts-of-speech',
    progress: 84,
    status: 'mastered',
    timeSpent: 65,
    lastAccessed: new Date('2024-01-09'),
    completedActivities: []
  },
  {
    nodeId: 'triangles',
    progress: 73,
    status: 'progressing',
    timeSpent: 78,
    lastAccessed: new Date('2024-01-08'),
    completedActivities: []
  }
];