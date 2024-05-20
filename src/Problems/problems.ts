// src/data/problems.ts
import WordSearch from './WordSearch2/WordSearch2';
import TwoSum from './TwoSum/TwoSum';

export interface Problem {
    id: number;
    name: string;
    titleSlug: string;
    url?:string;
    description?: string;
    solution_code_text?: string;
    solution_code?: Function;
    explanation?: string;
    test_cases?: {
        name: string;
        input: any;
        expected_output: any;
    }[];
    category?: string;
    difficulty?: string;
    tags?: string[];
    hints?: string[];
    difficultyRating?: number;
    topics?: string[];
    companies?: string[];
    similarProblems?: number[];
    submissionStatistics?: {
        totalSubmissions: number;
        acceptedSubmissions: number;
        acceptanceRate: number;
    };
    component?: React.ComponentType;
}

const problems: Problem[] = [
    {
        id: 123,
        name: "Word Search [Available]",
        titleSlug: "123-word-search",
        component: WordSearch,
        category: "Graphs",
        difficulty: "Medium",
    },
    {
        id: 456,
        name: "2Sum [Available]",
        titleSlug: "456-2sum",
        component: TwoSum,
        category: "Arrays",
        difficulty: "Easy",
    },

    {
        id: 2,
        name: "Add Two Numbers",
        titleSlug: "add-two-numbers",
        url: "https://leetcode.com/problems/add-two-numbers/",
        description: `
    # Add Two Numbers
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    
    ## Example
    \`\`\`
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807
    \`\`\`
    
    ## Constraints
    - The number of nodes in each linked list is in the range [1, 100].
    - 0 <= Node.val <= 9
    - It is guaranteed that the list represents a number that does not have leading zeros.
    `,
        solution_code_text: `
    /**
     * Definition for singly-linked list.
     * class ListNode {
     *     val: number
     *     next: ListNode | null
     *     constructor(val?: number, next?: ListNode | null) {
     *         this.val = (val === undefined ? 0 : val)
     *         this.next = (next === undefined ? null : next)
     *     }
     * }
     */
    
    /**
     * Adds two numbers represented as linked lists.
     * @param l1 - The first linked list.
     * @param l2 - The second linked list.
     * @returns The sum as a linked list.
     */
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummyHead = new ListNode(0);
        let p = l1, q = l2, curr = dummyHead;
        let carry = 0;
        while (p !== null || q !== null) {
            let x = (p !== null) ? p.val : 0;
            let y = (q !== null) ? q.val : 0;
            let sum = carry + x + y;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (p !== null) p = p.next;
            if (q !== null) q = q.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
    `,
        // solution_code: function addTwoNumbers(l1, l2) {
        //     let dummyHead = new ListNode(0);
        //     let p = l1, q = l2, curr = dummyHead;
        //     let carry = 0;
        //     while (p !== null || q !== null) {
        //         let x = (p !== null) ? p.val : 0;
        //         let y = (q !== null) ? q.val : 0;
        //         let sum = carry + x + y;
        //         carry = Math.floor(sum / 10);
        //         curr.next = new ListNode(sum % 10);
        //         curr = curr.next;
        //         if (p !== null) p = p.next;
        //         if (q !== null) q = q.next;
        //     }
        //     if (carry > 0) {
        //         curr.next = new ListNode(carry);
        //     }
        //     return dummyHead.next;
        // },
        explanation: `
    1. **Initialize a dummy head and pointers for both lists:**
       \`\`\`typescript
       let dummyHead = new ListNode(0);
       let p = l1, q = l2, curr = dummyHead;
       \`\`\`
    2. **Initialize a carry variable:**
       \`\`\`typescript
       let carry = 0;
       \`\`\`
    3. **Iterate through both lists:**
       \`\`\`typescript
       while (p !== null || q !== null) {
       \`\`\`
    4. **Calculate the sum and carry:**
       \`\`\`typescript
       let x = (p !== null) ? p.val : 0;
       let y = (q !== null) ? q.val : 0;
       let sum = carry + x + y;
       carry = Math.floor(sum / 10);
       \`\`\`
    5. **Create a new node for the sum and move the pointers:**
       \`\`\`typescript
       curr.next = new ListNode(sum % 10);
       curr = curr.next;
       if (p !== null) p = p.next;
       if (q !== null) q = q.next;
       \`\`\`
    6. **Check for remaining carry:**
       \`\`\`typescript
       if (carry > 0) {
           curr.next = new ListNode(carry);
       }
       \`\`\`
    `,
        test_cases: [
            {
                name: "Example test case",
                input: { l1: [2, 4, 3], l2: [5, 6, 4] },
                expected_output: [7, 0, 8],
            },
            {
                name: "Additional test case",
                input: { l1: [9, 9, 9, 9, 9], l2: [9, 9, 9, 9] },
                expected_output: [8, 9, 9, 9, 0, 1],
            }
        ],
        category: "Linked Lists",
        difficulty: "Medium",
        tags: ["Linked List", "Math"],
        hints: [
            "Think about how you would add two numbers manually, digit by digit, starting from the rightmost digits.",
            "Consider using a dummy head to simplify the code."
        ],
        difficultyRating: 3, // Assuming a scale of 1 to 5
        topics: ["Linked Lists", "Math"],
        companies: ["Google", "Microsoft", "Amazon"],
        similarProblems: [445, 67], // Example similar problem IDs
        submissionStatistics: {
            totalSubmissions: 2500000,
            acceptedSubmissions: 1300000,
            acceptanceRate: 52 // Percentage
        }
    },
    {
        id: 3,
        name: "Maximum Subarray",
        titleSlug: "maximum-subarray",
        url: "https://leetcode.com/problems/maximum-subarray/",
        description: `
    # Maximum Subarray
    Given an integer array \`nums\`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    
    ## Example
    \`\`\`
    Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    Output: 6
    Explanation: The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.
    \`\`\`
    
    ## Constraints
    - 1 <= nums.length <= 3 * 10^4
    - -10^5 <= nums[i] <= 10^5
    `,
        solution_code_text: `
    /**
     * Finds the contiguous subarray with the largest sum.
     * @param nums - The array of integers.
     * @returns The largest sum of any contiguous subarray.
     */
    function maxSubArray(nums: number[]): number {
        let maxSum = nums[0];
        let currentSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
    `,
        // solution_code: function maxSubArray(nums) {
        //   let maxSum = nums[0];
        //   let currentSum = nums[0];
        //   for (let i = 1; i < nums.length; i++) {
        //     currentSum = Math.max(nums[i], currentSum + nums[i]);
        //     maxSum = Math.max(maxSum, currentSum);
        //   }
        //   return maxSum;
        // },
        explanation: `
    1. **Initialize variables for maximum sum and current sum:**
       \`\`\`typescript
       let maxSum = nums[0];
       let currentSum = nums[0];
       \`\`\`
    2. **Iterate through the array starting from the second element:**
       \`\`\`typescript
       for (let i = 1; i < nums.length; i++) {
       \`\`\`
    3. **Calculate the current sum for the current element or extend the current subarray:**
       \`\`\`typescript
       currentSum = Math.max(nums[i], currentSum + nums[i]);
       \`\`\`
    4. **Update the maximum sum if necessary:**
       \`\`\`typescript
       maxSum = Math.max(maxSum, currentSum);
       \`\`\`
    5. **Return the maximum sum:**
       \`\`\`typescript
       return maxSum;
       \`\`\`
    `,
        test_cases: [
          {
            name: "Example test case",
            input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
            expected_output: 6,
          },
          {
            name: "Additional test case",
            input: { nums: [1, 2, 3, 4, 5] },
            expected_output: 15,
          }
        ],
        category: "Arrays",
        difficulty: "Easy",
        tags: ["Array", "Dynamic Programming"],
        hints: [
          "Try to think of a solution that uses a single pass through the array.",
          "Consider using dynamic programming to keep track of the maximum sum subarray seen so far."
        ],
        difficultyRating: 1, // Assuming a scale of 1 to 5
        topics: ["Arrays", "Dynamic Programming"],
        companies: ["Google", "Amazon", "Microsoft"],
        similarProblems: [53, 152], // Example similar problem IDs
        submissionStatistics: {
          totalSubmissions: 3500000,
          acceptedSubmissions: 2600000,
          acceptanceRate: 74.29 // Percentage
        }
      },
      {
        id: 4,
        name: "Single Number",
        titleSlug: "single-number",
        url: "https://leetcode.com/problems/single-number/",
        description: `
    # Single Number
    Given a non-empty array of integers \`nums\`, every element appears twice except for one. Find that single one.
    
    You must implement a solution with a linear runtime complexity and use only constant extra space.
    
    ## Example
    \`\`\`
    Input: nums = [2, 2, 1]
    Output: 1
    
    Input: nums = [4, 1, 2, 1, 2]
    Output: 4
    \`\`\`
    
    ## Constraints
    - 1 <= nums.length <= 3 * 10^4
    - -3 * 10^4 <= nums[i] <= 3 * 10^4
    - Each element in the array appears twice except for one element which appears only once.
    `,
        solution_code_text: `
    /**
     * Finds the single number in the array.
     * @param nums - The array of integers.
     * @returns The single number.
     */
    function singleNumber(nums: number[]): number {
        let result = 0;
        for (const num of nums) {
            result ^= num;
        }
        return result;
    }
    `,
        // solution_code: function singleNumber(nums) {
        //   let result = 0;
        //   for (const num of nums) {
        //       result ^= num;
        //   }
        //   return result;
        // },
        explanation: `
    1. **Initialize a variable to store the result:**
       \`\`\`typescript
       let result = 0;
       \`\`\`
    2. **Iterate through the array and perform bitwise XOR operation with each element:**
       \`\`\`typescript
       for (const num of nums) {
           result ^= num;
       }
       \`\`\`
    3. **Return the result, which will be the single number:**
       \`\`\`typescript
       return result;
       \`\`\`
    `,
        test_cases: [
          {
            name: "Example test case 1",
            input: { nums: [2, 2, 1] },
            expected_output: 1,
          },
          {
            name: "Example test case 2",
            input: { nums: [4, 1, 2, 1, 2] },
            expected_output: 4,
          },
          {
            name: "Test case with negative numbers",
            input: { nums: [1, 1, -1] },
            expected_output: -1,
          },
          {
            name: "Test case with all negative numbers",
            input: { nums: [-2, -2, -1, -1, -3] },
            expected_output: -3,
          },
          {
            name: "Test case with multiple duplicates",
            input: { nums: [1, 1, 2, 2, 3, 3, 4, 5, 5] },
            expected_output: 4,
          },
          {
            name: "Test case with large input",
            input: { nums: Array.from({ length: 10000 }, (_, i) => i + 1).concat(Array.from({ length: 9999 }, (_, i) => i + 1)) },
            expected_output: 10000,
          }
        ],
        category: "Arrays",
        difficulty: "Easy",
        tags: ["Bit Manipulation", "Hash Table"],
        hints: [
          "Try to think of a solution using bitwise XOR operation.",
          "Consider using a set to keep track of numbers that have been seen."
        ],
        difficultyRating: 1, // Assuming a scale of 1 to 5
        topics: ["Bit Manipulation", "Hash Tables"],
        companies: ["Google", "Amazon", "Microsoft"],
        similarProblems: [136, 137], // Example similar problem IDs
        submissionStatistics: {
          totalSubmissions: 3900000,
          acceptedSubmissions: 3000000,
          acceptanceRate: 76.92 // Percentage
        }
      },
      {
        id: 7,
        name: "Reverse Integer",
        titleSlug: "reverse-integer",
        url: "https://leetcode.com/problems/reverse-integer/",
        description: `
    # Reverse Integer
    Given a signed 32-bit integer \`x\`, return \`x\` with its digits reversed. If reversing \`x\` causes the value to go outside the signed 32-bit integer range \[-2^31, 2^31 - 1\], then return 0.
    
    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
    
    ## Example
    \`\`\`
    Input: x = 123
    Output: 321
    
    Input: x = -123
    Output: -321
    
    Input: x = 120
    Output: 21
    \`\`\`
    
    ## Constraints
    - -2^31 <= x <= 2^31 - 1
    `,
        solution_code_text: `
    /**
     * Reverses the digits of an integer.
     * @param x - The integer to be reversed.
     * @returns The reversed integer.
     */
    function reverse(x: number): number {
        let result = 0;
        while (x !== 0) {
            let digit = x % 10;
            x = Math.trunc(x / 10);
            if (result > Math.trunc((2**31 - 1 - digit) / 10) || result < Math.trunc((-2**31 - digit) / 10)) {
                return 0;
            }
            result = result * 10 + digit;
        }
        return result;
    }
    `,
        // solution_code: function reverse(x) {
        //   let result = 0;
        //   while (x !== 0) {
        //       let digit = x % 10;
        //       x = Math.trunc(x / 10);
        //       if (result > Math.trunc((2**31 - 1 - digit) / 10) || result < Math.trunc((-2**31 - digit) / 10)) {
        //           return 0;
        //       }
        //       result = result * 10 + digit;
        //   }
        //   return result;
        // },
        explanation: `
    1. **Initialize a variable to store the result:**
       \`\`\`typescript
       let result = 0;
       \`\`\`
    2. **Iterate through the digits of the input integer:**
       \`\`\`typescript
       while (x !== 0) {
       \`\`\`
    3. **Extract the last digit and update the input integer:**
       \`\`\`typescript
       let digit = x % 10;
       x = Math.trunc(x / 10);
       \`\`\`
    4. **Check for overflow before updating the result:**
       \`\`\`typescript
       if (result > Math.trunc((2**31 - 1 - digit) / 10) || result < Math.trunc((-2**31 - digit) / 10)) {
           return 0;
       }
       \`\`\`
    5. **Update the result with the extracted digit:**
       \`\`\`typescript
       result = result * 10 + digit;
       \`\`\`
    6. **Return the result:**
       \`\`\`typescript
       return result;
       \`\`\`
    `,
        test_cases: [
          {
            name: "Example test case 1",
            input: { x: 123 },
            expected_output: 321,
          },
          {
            name: "Example test case 2",
            input: { x: -123 },
            expected_output: -321,
          },
          {
            name: "Example test case 3",
            input: { x: 120 },
            expected_output: 21,
          },
          {
            name: "Test case with zero",
            input: { x: 0 },
            expected_output: 0,
          },
          {
            name: "Test case with negative number ending with zero",
            input: { x: -120 },
            expected_output: -21,
          },
          {
            name: "Test case with overflow",
            input: { x: 1534236469 },
            expected_output: 0,
          }
        ],
        category: "Math",
        difficulty: "Easy",
        tags: ["Math"],
        hints: [
          "Try to solve the problem without converting the integer to a string.",
          "Consider handling overflow cases separately."
        ],
        difficultyRating: 1, // Assuming a scale of 1 to 5
        topics: ["Math"],
        companies: ["Google", "Amazon", "Microsoft"],
        similarProblems: [8, 190], // Example similar problem IDs
        submissionStatistics: {
          totalSubmissions: 4300000,
          acceptedSubmissions: 3100000,
          acceptanceRate: 72.09 // Percentage
        }
      },
      {
        id: 11,
        name: "Container With Most Water",
        titleSlug: "container-with-most-water",
        url: "https://leetcode.com/problems/container-with-most-water/",
        description: `
    # Container With Most Water
    Given n non-negative integers \`a1, a2, ..., an\`, where each represents a point at coordinate \`(i, ai)\`. \`n\` vertical lines are drawn such that the two endpoints of the line \`i\` is at \`(i, ai)\` and \`(i, 0)\`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
    
    Notice that you may not slant the container.
    
    ## Example
    \`\`\`
    Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1, 8, 6, 2, 5, 4, 8, 3, 7]. In this case, the max area of water (blue section) the container can contain is 49.
    \`\`\`
    
    ## Constraints
    - n == height.length
    - 2 <= n <= 10^5
    - 0 <= height[i] <= 10^4
    `,
        solution_code_text: `
    /**
     * Finds the maximum area of water that can be contained by the given vertical lines.
     * @param height - The array representing the heights of the vertical lines.
     * @returns The maximum area of water.
     */
    function maxArea(height: number[]): number {
        let maxArea = 0;
        let left = 0;
        let right = height.length - 1;
        
        while (left < right) {
            const area = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
    `,
        // solution_code: function maxArea(height) {
        //   let maxArea = 0;
        //   let left = 0;
        //   let right = height.length - 1;
          
        //   while (left < right) {
        //       const area = Math.min(height[left], height[right]) * (right - left);
        //       maxArea = Math.max(maxArea, area);
        //       if (height[left] < height[right]) {
        //           left++;
        //       } else {
        //           right--;
        //       }
        //   }
          
        //   return maxArea;
        // },
        explanation: `
    1. **Initialize variables for maximum area, left pointer, and right pointer:**
       \`\`\`typescript
       let maxArea = 0;
       let left = 0;
       let right = height.length - 1;
       \`\`\`
    2. **Iterate through the array using two pointers:**
       \`\`\`typescript
       while (left < right) {
       \`\`\`
    3. **Calculate the area formed by the current two pointers:**
       \`\`\`typescript
       const area = Math.min(height[left], height[right]) * (right - left);
       \`\`\`
    4. **Update the maximum area if necessary:**
       \`\`\`typescript
       maxArea = Math.max(maxArea, area);
       \`\`\`
    5. **Move the pointer with the smaller height towards the center:**
       \`\`\`typescript
       if (height[left] < height[right]) {
           left++;
       } else {
           right--;
       }
       \`\`\`
    6. **Return the maximum area:**
       \`\`\`typescript
       return maxArea;
       \`\`\`
    `,
        test_cases: [
          {
            name: "Example test case",
            input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
            expected_output: 49,
          },
          {
            name: "Test case with smaller height at the ends",
            input: { height: [1, 2, 3, 4, 5, 6, 7, 8, 1] },
            expected_output: 8,
          },
          {
            name: "Test case with all heights equal",
            input: { height: [3, 3, 3, 3, 3, 3] },
            expected_output: 15,
          },
          {
            name: "Test case with increasing heights",
            input: { height: [1, 2, 3, 4, 5] },
            expected_output: 6,
          },
          {
            name: "Test case with decreasing heights",
            input: { height: [5, 4, 3, 2, 1] },
            expected_output: 6,
          }
        ],
        category: "Arrays",
        difficulty: "Medium",
        tags: ["Two Pointers", "Array"],
        hints: [
          "Try to optimize the brute force approach by using two pointers.",
          "Think about how to move the pointers to maximize the area."
        ],
        difficultyRating: 3, // Assuming a scale of 1 to 5
        topics: ["Two Pointers", "Array"],
        companies: ["Google", "Facebook", "Amazon"],
        similarProblems: [42, 11], // Example similar problem IDs
        submissionStatistics: {
          totalSubmissions: 2100000,
          acceptedSubmissions: 1380000,
          acceptanceRate: 65.71 // Percentage
        }
      }
];

export default problems;
