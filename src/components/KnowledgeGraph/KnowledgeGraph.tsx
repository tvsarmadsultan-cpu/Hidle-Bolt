@@ .. @@
       {/* Graph Container */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-auto" style={{ minHeight: '600px' }}>
+      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-auto">
         {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '600px' }}>
+        <svg className="absolute inset-0 w-full h-[800px] pointer-events-none">
           {getConnectionLines()}
         </svg>
 
@@ .. @@
         {/* Empty State */}
         {filteredNodes.length === 0 && (
)
}
-          <div className="absolute inset-0 flex items-center justify-center">
+          <div className="absolute inset-0 flex items-center justify-center h-full">
             <div className="text-center">
               <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
               <p className="text-gray-500">No concepts found</p>