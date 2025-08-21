import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { KnowledgeGraph } from '../KnowledgeGraph/KnowledgeGraph';
import { ContentViewer } from '../ContentViewer/ContentViewer';
import { LearningWorkspace } from '../LearningWorkspace/LearningWorkspace';
import { useAppStore } from '../../store/appStore';
import { conceptNodes, learningContent, studentProgress } from '../../data/mockData';
import { Home, Settings, HelpCircle, User, Bell } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { selectedNode, setCurrentContent } = useAppStore();

  useEffect(() => {
    if (selectedNode) {
      const content = learningContent.find(c => c.nodeId === selectedNode.id);
      setCurrentContent(content || null);
    }
  }, [selectedNode, setCurrentContent]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HIDLE</h1>
                <p className="text-sm text-gray-500">Student Learning Cockpit</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-1 ml-8">
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg text-sm font-medium transition-colors">
                <Home className="w-4 h-4" />
                Dashboard
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                <HelpCircle className="w-4 h-4" />
                Help
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
                <p className="text-xs text-gray-500">Secondary 3 • Singapore</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Knowledge Graph */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          className="bg-white border-r border-gray-200 flex-shrink-0"
        >
          <KnowledgeGraph nodes={conceptNodes} />
        </motion.div>

        {/* Center Panel - Content Viewer */}
        <div className="flex-1 p-6">
          <ContentViewer />
        </div>

        {/* Right Panel - Learning Workspace */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 288, opacity: 1 }}
          className="bg-white border-l border-gray-200 flex-shrink-0"
        >
          <LearningWorkspace progress={studentProgress} />
        </motion.div>
      </div>
    </div>
  );
};