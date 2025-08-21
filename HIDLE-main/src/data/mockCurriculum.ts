import { GraphData, StudentProgress, LearningContent, UserNote, LearningPath } from '../types/curriculum';

export const mockGraphData: GraphData = {
  nodes: [
    // Subjects (macro level)
    { id: "mathematics", name: "Mathematics", type: "subject", color: "#2563eb", description: "Mathematical concepts and problem solving" },
    { id: "physics", name: "Physics", type: "subject", color: "#dc2626", description: "Physical sciences and natural phenomena" },
    { id: "chemistry", name: "Chemistry", type: "subject", color: "#059669", description: "Chemical reactions and molecular structures" },
    { id: "biology", name: "Biology", type: "subject", color: "#7c3aed", description: "Life sciences and biological systems" },
    { id: "english", name: "English Language", type: "subject", color: "#ea580c", description: "Language arts and communication" },
    { id: "geography", name: "Geography", type: "subject", color: "#0891b2", description: "Earth sciences and human geography" },
    
    // Mathematics Topics (meso level)
    { id: "algebra", name: "Algebra", type: "topic", subject: "mathematics", description: "Algebraic expressions and equations" },
    { id: "geometry", name: "Geometry", type: "topic", subject: "mathematics", description: "Shapes, space, and measurement" },
    { id: "calculus", name: "Calculus", type: "topic", subject: "mathematics", description: "Rates of change and accumulation" },
    { id: "statistics", name: "Statistics", type: "topic", subject: "mathematics", description: "Data analysis and probability" },
    
    // Physics Topics (meso level)
    { id: "mechanics", name: "Mechanics", type: "topic", subject: "physics", description: "Motion and forces" },
    { id: "thermodynamics", name: "Thermodynamics", type: "topic", subject: "physics", description: "Heat and energy transfer" },
    { id: "waves", name: "Waves & Optics", type: "topic", subject: "physics", description: "Wave phenomena and light" },
    { id: "electricity", name: "Electricity", type: "topic", subject: "physics", description: "Electric circuits and magnetism" },
    
    // Chemistry Topics (meso level)
    { id: "atomic_structure", name: "Atomic Structure", type: "topic", subject: "chemistry", description: "Atoms and periodic table" },
    { id: "chemical_bonding", name: "Chemical Bonding", type: "topic", subject: "chemistry", description: "How atoms bond together" },
    { id: "reactions", name: "Chemical Reactions", type: "topic", subject: "chemistry", description: "Types and rates of reactions" },
    
    // Algebra Concepts (micro level)
    { id: "linear_equations", name: "Linear Equations", type: "concept", topic: "algebra", description: "Solving equations of the form ax + b = c" },
    { id: "quadratic_equations", name: "Quadratic Equations", type: "concept", topic: "algebra", description: "Equations with degree 2 polynomials" },
    { id: "systems_equations", name: "Systems of Equations", type: "concept", topic: "algebra", description: "Solving multiple equations simultaneously" },
    { id: "inequalities", name: "Inequalities", type: "concept", topic: "algebra", description: "Mathematical relationships using <, >, ≤, ≥" },
    
    // Calculus Concepts (micro level)
    { id: "limits", name: "Limits", type: "concept", topic: "calculus", description: "Approaching values in functions" },
    { id: "derivatives", name: "Derivatives", type: "concept", topic: "calculus", description: "Rate of change of functions" },
    { id: "integrals", name: "Integrals", type: "concept", topic: "calculus", description: "Accumulation and area under curves" },
    
    // Mechanics Concepts (micro level)
    { id: "newtons_laws", name: "Newton's Laws", type: "concept", topic: "mechanics", description: "Fundamental laws of motion" },
    { id: "projectile_motion", name: "Projectile Motion", type: "concept", topic: "mechanics", description: "Motion under gravity" },
    { id: "energy_momentum", name: "Energy & Momentum", type: "concept", topic: "mechanics", description: "Conservation principles" },
    
    // Chemistry Concepts (micro level)
    { id: "electron_config", name: "Electron Configuration", type: "concept", topic: "atomic_structure", description: "How electrons are arranged in atoms" },
    { id: "periodic_trends", name: "Periodic Trends", type: "concept", topic: "atomic_structure", description: "Patterns in the periodic table" },
    { id: "ionic_bonding", name: "Ionic Bonding", type: "concept", topic: "chemical_bonding", description: "Bonds formed by electron transfer" },
    { id: "covalent_bonding", name: "Covalent Bonding", type: "concept", topic: "chemical_bonding", description: "Bonds formed by electron sharing" }
  ],
  edges: [
    // Subject to topic relationships
    { source: "mathematics", target: "algebra", type: "related" },
    { source: "mathematics", target: "geometry", type: "related" },
    { source: "mathematics", target: "calculus", type: "related" },
    { source: "mathematics", target: "statistics", type: "related" },
    { source: "physics", target: "mechanics", type: "related" },
    { source: "physics", target: "thermodynamics", type: "related" },
    { source: "physics", target: "waves", type: "related" },
    { source: "physics", target: "electricity", type: "related" },
    { source: "chemistry", target: "atomic_structure", type: "related" },
    { source: "chemistry", target: "chemical_bonding", type: "related" },
    { source: "chemistry", target: "reactions", type: "related" },
    
    // Topic to concept relationships
    { source: "algebra", target: "linear_equations", type: "related" },
    { source: "algebra", target: "quadratic_equations", type: "related" },
    { source: "algebra", target: "systems_equations", type: "related" },
    { source: "algebra", target: "inequalities", type: "related" },
    { source: "calculus", target: "limits", type: "related" },
    { source: "calculus", target: "derivatives", type: "related" },
    { source: "calculus", target: "integrals", type: "related" },
    { source: "mechanics", target: "newtons_laws", type: "related" },
    { source: "mechanics", target: "projectile_motion", type: "related" },
    { source: "mechanics", target: "energy_momentum", type: "related" },
    { source: "atomic_structure", target: "electron_config", type: "related" },
    { source: "atomic_structure", target: "periodic_trends", type: "related" },
    { source: "chemical_bonding", target: "ionic_bonding", type: "related" },
    { source: "chemical_bonding", target: "covalent_bonding", type: "related" },
    
    // Prerequisite relationships
    { source: "linear_equations", target: "quadratic_equations", type: "prerequisite" },
    { source: "linear_equations", target: "systems_equations", type: "prerequisite" },
    { source: "quadratic_equations", target: "inequalities", type: "builds_on" },
    { source: "algebra", target: "calculus", type: "prerequisite" },
    { source: "limits", target: "derivatives", type: "prerequisite" },
    { source: "derivatives", target: "integrals", type: "prerequisite" },
    { source: "electron_config", target: "periodic_trends", type: "builds_on" },
    { source: "atomic_structure", target: "chemical_bonding", type: "prerequisite" },
    { source: "ionic_bonding", target: "covalent_bonding", type: "related" },
    
    // Cross-subject relationships
    { source: "derivatives", target: "newtons_laws", type: "cross_subject" },
    { source: "quadratic_equations", target: "projectile_motion", type: "cross_subject" },
    { source: "statistics", target: "chemistry", type: "cross_subject" },
    { source: "energy_momentum", target: "chemical_bonding", type: "cross_subject" }
  ]
};

export const mockStudentProgress: StudentProgress[] = [
  { conceptId: "linear_equations", masteryLevel: 0.85, timeSpent: 45, lastAccessed: new Date('2024-01-15'), attempts: 3, completed: true },
  { conceptId: "quadratic_equations", masteryLevel: 0.62, timeSpent: 38, lastAccessed: new Date('2024-01-14'), attempts: 2, completed: false },
  { conceptId: "systems_equations", masteryLevel: 0.34, timeSpent: 22, lastAccessed: new Date('2024-01-13'), attempts: 1, completed: false },
  { conceptId: "newtons_laws", masteryLevel: 0.71, timeSpent: 52, lastAccessed: new Date('2024-01-12'), attempts: 2, completed: false },
  { conceptId: "electron_config", masteryLevel: 0.89, timeSpent: 41, lastAccessed: new Date('2024-01-11'), attempts: 4, completed: true },
  { conceptId: "derivatives", masteryLevel: 0.45, timeSpent: 29, lastAccessed: new Date('2024-01-10'), attempts: 1, completed: false },
  { conceptId: "ionic_bonding", masteryLevel: 0.78, timeSpent: 35, lastAccessed: new Date('2024-01-09'), attempts: 3, completed: true }
];

export const mockLearningContent: LearningContent[] = [
  {
    id: "linear_eq_intro",
    conceptId: "linear_equations",
    title: "Introduction to Linear Equations",
    type: "article",
    content: "Linear equations are mathematical statements that show the relationship between variables using a straight line when graphed. The general form is ax + b = c, where 'a', 'b', and 'c' are constants and 'x' is the variable we want to solve for.\n\nKey characteristics:\n• The highest power of the variable is 1\n• The graph is always a straight line\n• There is typically one unique solution\n\nExample: 2x + 5 = 13\nTo solve: 2x = 13 - 5 = 8, therefore x = 4",
    duration: 15,
    difficulty: "beginner"
  },
  {
    id: "quad_eq_overview",
    conceptId: "quadratic_equations",
    title: "Understanding Quadratic Equations",
    type: "article",
    content: "Quadratic equations are polynomial equations of degree 2, typically written in the form ax² + bx + c = 0, where 'a' ≠ 0.\n\nSolution methods:\n• Factoring\n• Completing the square\n• Quadratic formula: x = (-b ± √(b²-4ac)) / 2a\n\nThe discriminant (b²-4ac) tells us:\n• If > 0: two real solutions\n• If = 0: one repeated solution\n• If < 0: no real solutions\n\nExample: x² - 5x + 6 = 0\nFactoring: (x-2)(x-3) = 0\nSolutions: x = 2 or x = 3",
    duration: 20,
    difficulty: "intermediate"
  },
  {
    id: "newtons_first_law",
    conceptId: "newtons_laws",
    title: "Newton's First Law of Motion",
    type: "video",
    content: "Newton's First Law states that an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an unbalanced force.\n\nThis law is also known as the Law of Inertia. Inertia is the tendency of objects to resist changes in their state of motion.\n\nReal-world examples:\n• A ball rolling on a smooth surface will continue rolling until friction slows it down\n• Passengers in a car lurch forward when the car suddenly stops\n• A book on a table remains at rest until someone applies a force to move it",
    duration: 12,
    difficulty: "beginner"
  }
];

export const mockUserNotes: UserNote[] = [
  {
    id: "note1",
    conceptId: "quadratic_equations",
    content: "Remember: The quadratic formula works for all quadratic equations, even when factoring is difficult. Practice discriminant calculations!",
    timestamp: new Date('2024-01-14'),
    tags: ["formula", "important"]
  },
  {
    id: "note2", 
    conceptId: "newtons_laws",
    content: "Think of inertia like being lazy - objects don't want to change what they're doing unless forced to!",
    timestamp: new Date('2024-01-12'),
    tags: ["analogy", "memory-aid"]
  }
];

export const mockLearningPaths: LearningPath[] = [
  {
    id: "algebra_foundations",
    name: "Algebra Foundations",
    concepts: ["linear_equations", "quadratic_equations", "systems_equations", "inequalities"],
    progress: 0.47,
    estimatedDuration: 120
  },
  {
    id: "intro_physics",
    name: "Introduction to Physics",
    concepts: ["newtons_laws", "projectile_motion", "energy_momentum"],
    progress: 0.24,
    estimatedDuration: 90
  }
];