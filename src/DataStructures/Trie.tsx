/**
 * Represents a single node in the Trie data structure, which stores characters of words.
 */
export class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word - The word to insert into the trie.
   */
  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children[char]) {
        // If the character does not exist, create a new TrieNode.
        currentNode.children[char] = new TrieNode();
      }
      // Move to the next node in the trie.
      currentNode = currentNode.children[char];
    }
    // Mark the end of a word.
    currentNode.isEndOfWord = true;
  }
}

/**
 * Performs DFS from the given cell, exploring all potential words.
 * @param {string[][]} board - The game board.
 * @param {TrieNode} node - The current trie node (starting with root).
 * @param {number} i - Current row index in the board.
 * @param {number} j - Current column index in the board.
 * @param {string} path - The current path (word) being formed.
 * @param {Set<string>} result - A set to accumulate the words found.
 */
export function dfs(
  board: string[][],
  node: TrieNode,
  i: number,
  j: number,
  path: string,
  result: Set<string>
): void {
  // Check if current position is out of bounds
  const isRowOutOfBounds = i < 0 || i >= board.length;
  const isColumnOutOfBounds = j < 0 || j >= board[0].length;
  if (isRowOutOfBounds || isColumnOutOfBounds) return;

  // used to mark a character as visited
  const VISITED_CHAR = "*";

  const char = board[i][j];
  // If the cell has already been visited or the trie does not contain the char, return.
  if (char === VISITED_CHAR || !node.children[char]) return;

  const nextNode = node.children[char];
  const newPath = path + char;

  // we reached the end of the word!! Match
  if (nextNode.isEndOfWord) {
    result.add(newPath);
  }

  // Mark the cell as visited by replacing with a placeholder.
  board[i][j] = VISITED_CHAR;
  
  // Explore all adjacent cells.
  dfs(board, nextNode, i + 1, j, newPath, result);
  dfs(board, nextNode, i - 1, j, newPath, result);
  dfs(board, nextNode, i, j + 1, newPath, result);
  dfs(board, nextNode, i, j - 1, newPath, result);
  
  // Restore the cell's original value.
  board[i][j] = char;
}
