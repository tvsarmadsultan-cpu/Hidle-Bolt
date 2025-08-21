export interface ConceptNode {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  darkColor: string;
  size: 'large' | 'medium' | 'small';
  position: { x: number; y: number };
  parent?: string;
  children?: string[];
  type: 'subject' | 'topic' | 'concept';
  progress?: number;
  status?: 'not-started' | 'started' | 'progressing' | 'mastered';
}

export interface LearningContent {
  id: string;
  nodeId: string;
  title: string;
  description: string;
  keyPoints: string[];
  activities: Activity[];
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Activity {
  id: string;
  title: string;
  type: 'reading' | 'video' | 'quiz' | 'simulation';
  duration: number;
  completed: boolean;
}

export interface StudentProgress {
  nodeId: string;
  progress: number;
  status: 'not-started' | 'started' | 'progressing' | 'mastered';
  timeSpent: number;
  lastAccessed: Date;
  completedActivities: string[];
}