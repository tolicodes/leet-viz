const testCases = [
  {
    name: "Basic Functionality",
    board: [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    words: ["oath", "pea", "eat", "rain"],
    output: ["eat", "oath"], // The order in the output does not matter
  },
  {
    name: "Small Board",
    board: [
      ["a", "b"],
      ["c", "d"],
    ],
    words: ["abcb"],
    output: [], // No word can be formed
  },
  {
    name: "Words Not Present",
    board: [
      ["a", "b"],
      ["c", "d"],
    ],
    words: ["abc", "abcd"],
    output: ["abc"], // Only 'abc' can be formed
  },
  {
    name: "Reusing a Letter Cell",
    board: [
      ["a", "b"],
      ["c", "d"],
    ],
    words: ["abcd", "abdc", "acbd", "adcb"],
    output: [], // Cells cannot be reused in a single word
  },
  {
    name: "All Directions",
    board: [
      ["o", "a", "b", "n"],
      ["o", "t", "a", "e"],
      ["a", "h", "k", "r"],
      ["a", "f", "l", "v"],
    ],
    words: ["oath", "pea", "eat", "rain", "oak", "oathk", "oathf"],
    output: ["oath", "oak", "eat"], // Words found in various directions
  },
  {
    name: "Single Letter Board",
    board: [["a"]],
    words: ["a"],
    output: ["a"], // Board and word list consist of a single letter
  },
];

export default testCases;
