// src/hooks/useWordSearchResults.tsx
import { useMemo } from 'react';
import { Trie, dfs } from "../../DataStructures/Trie";
import testCases from "./wordSearch2Cases";

interface TestCase {
    name: string;
    board: string[][];
    words: string[];
    output: string[];
}

interface Result {
    trie: Trie;
    name: string;
    board: string[][];
    words: string[];
    output: string[];
    result: string[];
    isSuccess: boolean;
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = makeTrie(words);
    const foundWords = new Set<string>(); // Use a set to avoid duplicates.
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, trie.root, i, j, "", foundWords); // Start DFS from each cell.
        }
    }

    return Array.from(foundWords); // Convert the set of words to an array.
}

const makeTrie = (words: string[]): Trie => {
    const trie = new Trie();
    words.forEach((word) => trie.insert(word)); // Build the Trie from the given words.
    return trie;
}

const useWordSearchResults = (): Result[] => {
    return useMemo(() => {
        return testCases.map((testCase: TestCase) => {
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
    }, []);
};

export default useWordSearchResults;
