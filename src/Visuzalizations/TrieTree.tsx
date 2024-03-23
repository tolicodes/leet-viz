import React, { useEffect, useLayoutEffect, useState } from "react";
import Tree from "react-d3-tree";
import { Trie, TrieNode } from "../Structures/Trie"; // Make sure to adjust the import path as necessary

// Define the structure of a tree node for react-d3-tree
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

// Props for the TrieVisualization component, expecting a Trie instance
interface TrieVisualizationProps {
  trie: Trie;
}

/**
 * Converts a TrieNode to a TreeNode structure compatible with react-d3-tree.
 * @param node The current TrieNode being processed.
 * @param parentNode The parent TrieNode, null if `node` is the root.
 * @param edgeLabel The character (edge) leading to the current TrieNode.
 * @returns A TreeNode structure representing the current TrieNode.
 */
const convertTrieToTreeData = (
  node: TrieNode | null,
  parentNode: TrieNode | null = null,
  edgeLabel: string = ""
): TreeNode | null => {
  // If the node is null, return immediately
  if (!node) return null;

  // Construct the current TreeNode with its name and whether it marks the end of a word
  const currentNode: TreeNode = {
    name: parentNode ? edgeLabel : "Root", // Root for the trie's root node, otherwise the edge label
    children: [], // Initialize children array which will hold any child TreeNodes
  };

  // Recursively convert each child TrieNode into a TreeNode and add it to the children array
  Object.keys(node.children).forEach((char) => {
    const childNode = convertTrieToTreeData(node.children[char], node, char);
    if (childNode) {
      currentNode.children!.push(childNode);
    }
  });

  // If the node has no children, delete the empty children array to clean up the structure
  if (currentNode.children && currentNode.children.length === 0) {
    delete currentNode.children;
  }

  return currentNode;
};

/**
 * React component for visualizing a Trie structure using react-d3-tree.
 * @param trie The Trie instance to visualize.
 */
const TrieVisualization: React.FC<TrieVisualizationProps> = ({ trie }) => {
  const [treeData, setTreeData] = useState<TreeNode[]>([]); // State to hold the tree data

  // Effect hook to convert the trie to tree data when the component mounts or the trie changes
  useEffect(() => {
    if (trie && trie.root) {
      const data = convertTrieToTreeData(trie.root);
      setTreeData(data ? [data] : []); // Set the tree data, ensuring it's an array
    }
  }, [trie]);

  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    // Convert trie to tree data logic remains the same

    // Ensure the container is fully rendered before calculating dimensions
    const dimensions = document
      .getElementById("treeWrapper")
      ?.getBoundingClientRect();
    if (dimensions) {
      setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 4, // Adjust based on your needs
      });
    }
  }, [trie]); // Dependencies remain the same

  // Render the Tree component with the tree data
  return (
    <div id="treeWrapper" style={{ width: "70%", height: "100vh", margin: '0 auto' }}>
      {treeData.length > 0 && (
        <Tree
          data={treeData}
          orientation="vertical"
          nodeSize={{ x: 100, y: 100 }} // Smaller values = more compact
          translate={translate}
        />
      )}
    </div>
  );
};

export default TrieVisualization;
