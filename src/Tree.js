import React, { useState } from "react";

export default function TreeView({ nodes }) {
  return (
    <ul style={{ width: "50%", padding: "0", margin: "0" }}>
      {nodes.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </ul>
  );
}

function TreeNode({ node }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div style={{ display: "inline-block" }} onClick={handleToggle}>
        {node.children && <span>{isExpanded ? "v " : "> "}</span>}
        {node.label}
      </div>
      {node.children && isExpanded && <TreeView nodes={node.children} />}
    </li>
  );
}
