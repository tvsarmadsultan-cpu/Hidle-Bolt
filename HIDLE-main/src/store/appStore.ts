import { create } from 'zustand';
import { ConceptNode, LearningContent } from '../types/curriculum';

interface AppState {
  selectedNode: ConceptNode | null;
  hoveredNode: ConceptNode | null;
  searchQuery: string;
  currentContent: LearningContent | null;
  
  // Actions
  setSelectedNode: (node: ConceptNode | null) => void;
  setHoveredNode: (node: ConceptNode | null) => void;
  setSearchQuery: (query: string) => void;
  setCurrentContent: (content: LearningContent | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedNode: null,
  hoveredNode: null,
  searchQuery: '',
  currentContent: null,
  
  setSelectedNode: (node) => set({ selectedNode: node }),
  setHoveredNode: (node) => set({ hoveredNode: node }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentContent: (content) => set({ currentContent: content })
}));