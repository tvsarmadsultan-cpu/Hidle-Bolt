import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Star, 
  CheckCircle2, 
  AlertCircle,
  BookMarked,
  Brain,
  Award,
  Calendar
} from 'lucide-react';
import { StudentProgress } from '../../types/curriculum';

interface LearningWorkspaceProps {
  progress: StudentProgress[];
}

export const LearningWorkspace: React.FC<LearningWorkspaceProps> = ({ progress }) => {
  const [activeTab, setActiveTab] = useState<'progress' | 'goals' | 'achievements'>('progress');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mastered': return 'text-green-600 bg-green-100';
      case 'progressing': return 'text-blue-600 bg-blue-100';
      case 'started': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mastered': return <CheckCircle2 className="w-4 h-4" />;
      case 'progressing': return <TrendingUp className="w-4 h-4" />;
      case 'started': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0);
  const masteredCount = progress.filter(p => p.status === 'mastered').length;
  const averageProgress = progress.reduce((sum, p) => sum + p.progress, 0) / progress.length;

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-purple-500" />
          My Learning Workspace
        </h2>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-blue-600">{Math.round(averageProgress)}%</div>
            <div className="text-xs text-blue-600">Overall Progress</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-green-600">{masteredCount}</div>
            <div className="text-xs text-green-600">Concepts Mastered</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'progress', label: 'Progress', icon: TrendingUp },
            { id: 'goals', label: 'Goals', icon: Target },
            { id: 'achievements', label: 'Awards', icon: Award }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-md text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-3 h-3" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'progress' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Recent Activity */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {progress
                  .sort((a, b) => new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime())
                  .slice(0, 4)
                  .map((item, index) => (
                    <motion.div
                      key={item.nodeId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.nodeId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                item.status === 'mastered' ? 'bg-green-500' :
                                item.status === 'progressing' ? 'bg-blue-500' : 'bg-yellow-500'
                              }`}
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 font-medium">
                            {item.progress}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Study Time */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Study Time This Week</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-purple-600">
                    {Math.floor(totalTimeSpent / 60)}h {totalTimeSpent % 60}m
                  </span>
                  <div className="text-right">
                    <div className="text-xs text-purple-600">Daily Average</div>
                    <div className="text-sm font-medium text-purple-700">
                      {Math.round(totalTimeSpent / 7)}m
                    </div>
                  </div>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${Math.min((totalTimeSpent / 300) * 100, 100)}%` }}
                  />
                </div>
                <div className="text-xs text-purple-600 mt-1">
                  Goal: 5 hours per week
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'goals' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Current Goals</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Master Quadratic Equations</span>
                  </div>
                  <p className="text-sm text-blue-700 mb-3">
                    Complete all practice problems and achieve 85% mastery
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">Progress: 67%</span>
                    <span className="text-blue-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: This week
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-900">Physics Fundamentals</span>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    Understand motion, forces, and energy concepts
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">Progress: 58%</span>
                    <span className="text-green-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: Next week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Recommended Next Steps</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Star className="w-4 h-4 text-yellow-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-900">Review Linear Equations</p>
                    <p className="text-xs text-yellow-700">Strengthen foundation before advanced topics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <BookMarked className="w-4 h-4 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-900">Start Calculus Basics</p>
                    <p className="text-xs text-purple-700">Based on your algebra progress</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">Algebra Master</p>
                    <p className="text-xs text-yellow-700">Completed all algebra fundamentals</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Quick Learner</p>
                    <p className="text-xs text-blue-700">Mastered 3 concepts this week</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Consistent Learner</p>
                    <p className="text-xs text-green-700">7-day learning streak</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Next Milestone</h3>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-900">Math Champion</p>
                    <p className="text-xs text-purple-700">Master 10 math concepts</p>
                  </div>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${(masteredCount / 10) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-purple-600">
                  {masteredCount}/10 concepts mastered
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};