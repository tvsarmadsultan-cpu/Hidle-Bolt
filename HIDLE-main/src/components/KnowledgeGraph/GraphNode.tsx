import React from 'react';
import { motion } from 'framer-motion';
import { ConceptNode } from '../../types/curriculum';
import { CheckCircle2, Clock, Play } from 'lucide-react';

interface GraphNodeProps {
  node: ConceptNode;
  isActive: boolean;
  isHovered: boolean;
  onClick: (node: ConceptNode) => void;
  onHover: (node: ConceptNode | null) => void;
}

export const GraphNode: React.FC<GraphNodeProps> = ({
  node,
  isActive,
  isHovered,
  onClick,
  onHover
}) => {
  const getNodeSize = () => {
    switch (node.size) {
      case 'large': return 'w-20 h-20 text-sm';
      case 'medium': return 'w-16 h-16 text-xs';
      case 'small': return 'w-12 h-12 text-xs';
      default: return 'w-16 h-16 text-xs';
    }
  };

  const getStatusIcon = () => {
    if (node.status === 'mastered') {
      return <CheckCircle2 className="w-4 h-4 text-white absolute -top-1 -right-1" />;
    }
    if (node.status === 'progressing') {
      return <Clock className="w-4 h-4 text-white absolute -top-1 -right-1" />;
    }
    if (node.status === 'started') {
      return <Play className="w-3 h-3 text-white absolute -top-1 -right-1" />;
    }
    return null;
  };

  const getProgressRing = () => {
    if (!node.progress) return null;
    
    const circumference = 2 * Math.PI * 30;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (node.progress / 100) * circumference;

    return (
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="absolute" style={{ left: node.position.x - 40, top: node.position.y - 40 }}>
      <motion.div
        className={`${getNodeSize()} rounded-full flex items-center justify-center text-white font-semibold cursor-pointer shadow-lg relative ${node.color} ${
          isActive ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
        }`}
        style={{
          background: `linear-gradient(135deg, ${node.color.replace('bg-', '')}, ${node.darkColor})`
        }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isActive 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 4px rgba(59, 130, 246, 0.5)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
        onClick={() => onClick(node)}
        onMouseEnter={() => onHover(node)}
        onMouseLeave={() => onHover(null)}
      >
        {getProgressRing()}
        <span className="text-center leading-tight z-10 relative">
          {node.shortName}
        </span>
        {getStatusIcon()}
      </motion.div>
      
      {/* Progress percentage */}
      {node.progress && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
            {node.progress}%
          </span>
        </div>
      )}
    </div>
  );
};