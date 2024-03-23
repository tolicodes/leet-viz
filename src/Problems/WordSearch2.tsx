import testCases from "./wordSearch2Cases";
import { Trie, dfs } from "../Structures/Trie";
import Grid from '../Visuzalizations/Grid';
import TrieVisualization from "../Visuzalizations/TrieTree";


/**
 * Finds all words on the board that are present in the given list of words.
 * Utilizes a Trie to store the list of words for efficient prefix searching,
 * and performs DFS starting from each cell to explore possible word constructions.
 * @param board The game board represented as a 2D array of characters.
 * @param words The list of words to find on the board.
 * @returns The list of found words without duplicates.
 */
function findWords(board: string[][], words: string[]): string[] {
  const trie = makeTrie(words);
  const foundWords  = new Set<string>(); // Use a set to avoid duplicates.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, trie.root, i, j, "", foundWords); // Start DFS from each cell.
    }
  }

  return Array.from(foundWords); // Convert the set of words to an array.
}

const makeTrie = (words: string[]) : Trie=> {
  const trie = new Trie();
  words.forEach((word) => trie.insert(word)); // Build the Trie from the given words.
  return trie;
}

const WordSearch2 = () => {
  // Map each test case to a result object containing the name, board, words, expected output, and actual result
  const results = testCases.map((testCase) => {
    const { name, board, words, output } = testCase;
    const result = findWords(board, words);
    const trie = makeTrie(words);

    return {
      trie,
      name,
      board,
      words,
      output,
      result,
      isSuccess: JSON.stringify(result.sort()) === JSON.stringify(output.sort()), // Sort for comparison
    };
  });

  return (
    <div>
      {results.map((result, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{result.name}</h3>
          <p><strong>Words:</strong> {result.words.join(', ')}</p>
          <p><strong>Expected Output:</strong> {result.output.join(', ')}</p>
          <p><strong>Actual Result:</strong> {result.result.join(', ')}</p>
          <p><strong>Status:</strong> {result.isSuccess ? 'Success' : 'Fail'}</p>
          <Grid grid={result.board} />
          <TrieVisualization trie={result.trie} />
        </div>
      ))}
    </div>
  );
};

export default WordSearch2;