import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraphNode } from './GraphNode';
import { ConceptNode } from '../../types/curriculum';
import { useAppStore } from '../../store/appStore';
import { Search, Zap, Target, BookOpen } from 'lucide-react';

interface KnowledgeGraphProps {
  nodes: ConceptNode[];
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ nodes }) => {
  const { 
    selectedNode, 
    hoveredNode, 
    searchQuery,
    setSelectedNode, 
    setHoveredNode, 
    setSearchQuery 
  } = useAppStore();

  const [filteredNodes, setFilteredNodes] = useState(nodes);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredNodes(nodes);
    } else {
      const filtered = nodes.filter(node =>
        node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNodes(filtered);
    }
  }, [searchQuery, nodes]);

  const handleNodeClick = (node: ConceptNode) => {
    setSelectedNode(node);
  };

  const handleNodeHover = (node: ConceptNode | null) => {
    setHoveredNode(node);
  };

  const getConnectionLines = () => {
    const lines: JSX.Element[] = [];
    
    nodes.forEach(node => {
      if (node.parent) {
        const parentNode = nodes.find(n => n.id === node.parent);
        if (parentNode) {
          lines.push(
            <motion.line
              key={`${node.id}-${parentNode.id}`}
              x1={parentNode.position.x}
              y1={parentNode.position.y}
              x2={node.position.x}
              y2={node.position.y}
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          );
        }
      }
    });
    
    return lines;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" />
            Knowledge Graph
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Target className="w-4 h-4" />
            <span>{nodes.length} concepts</span>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="search"
            placeholder="Search concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Graph Container */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {getConnectionLines()}
        </svg>

        {/* Nodes */}
        <AnimatePresence>
          {filteredNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GraphNode
                node={node}
                isActive={selectedNode?.id === node.id}
                isHovered={hoveredNode?.id === node.id}
                onClick={handleNodeClick}
                onHover={handleNodeHover}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Hover Tooltip */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-xs"
              style={{
                left: hoveredNode.position.x + 50,
                top: hoveredNode.position.y - 20
              }}
            >
              <h4 className="font-semibold text-gray-900 mb-1">{hoveredNode.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{hoveredNode.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className={`px-2 py-1 rounded-full ${
                  hoveredNode.status === 'mastered' ? 'bg-green-100 text-green-700' :
                  hoveredNode.status === 'progressing' ? 'bg-blue-100 text-blue-700' :
                  hoveredNode.status === 'started' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {hoveredNode.status?.replace('-', ' ') || 'not started'}
                </span>
                {hoveredNode.progress && (
                  <span>{hoveredNode.progress}% complete</span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredNodes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No concepts found</p>
              <p className="text-sm text-gray-400">Try a different search term</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};