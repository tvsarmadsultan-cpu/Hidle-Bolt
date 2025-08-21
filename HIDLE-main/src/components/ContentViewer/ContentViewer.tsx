import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/appStore';
import { LearningContent } from '../../types/curriculum';
import { 
  BookOpen, 
  Play, 
  FileText, 
  Zap, 
  Clock, 
  Target,
  CheckCircle2,
  Circle,
  Star,
  TrendingUp
} from 'lucide-react';

interface ContentViewerProps {
  content?: LearningContent | null;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ content }) => {
  const { selectedNode, currentContent } = useAppStore();

  const displayContent = content || currentContent;

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'quiz': return <Target className="w-4 h-4" />;
      case 'simulation': return <Zap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!selectedNode) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Ready to Learn?
          </h3>
          <p className="text-gray-600 mb-6">
            Click on any concept in the knowledge graph to start your learning journey. 
            Each topic is designed to build your understanding step by step.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Interactive Content</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>Track Progress</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!displayContent) {
    return (
      <div className="h-full bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-full flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${selectedNode.color}`}
                style={{
                  background: `linear-gradient(135deg, ${selectedNode.color.replace('bg-', '')}, ${selectedNode.darkColor})`
                }}
              >
                {selectedNode.shortName.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedNode.name}</h1>
                <p className="text-gray-600">{selectedNode.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedNode.type === 'subject' ? 'bg-blue-100 text-blue-800' :
                selectedNode.type === 'topic' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {selectedNode.type.charAt(0).toUpperCase() + selectedNode.type.slice(1)}
              </span>
              
              {selectedNode.progress && (
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${selectedNode.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {selectedNode.progress}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Content Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                Learning materials for {selectedNode.name} are being prepared. 
                Check back soon for interactive lessons, videos, and practice exercises!
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Get Notified
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white overflow-hidden">
      <motion.div
        key={displayContent.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="h-full flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{displayContent.title}</h1>
              <p className="text-gray-600">{displayContent.description}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{displayContent.estimatedTime} min</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(displayContent.difficulty)}`}>
                {displayContent.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Learning Points</h3>
              <div className="grid gap-3">
                {displayContent.keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Activities</h3>
              <div className="space-y-3">
                {displayContent.activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      activity.completed
                        ? 'bg-green-50 border-green-200 hover:border-green-300'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          activity.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{activity.title}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-gray-500 capitalize">{activity.type}</span>
                            <span className="text-sm text-gray-500">{activity.duration} min</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {activity.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Start Learning
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                Save for Later
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              {displayContent.activities.filter(a => a.completed).length} of {displayContent.activities.length} activities completed
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};