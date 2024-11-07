// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;

const countWordOccurrences = (sentence: string, word: string) => {
    let count = 0;
    const splitSentence = sentence.split(' ');
    // console.log(splitSentence)
    for (let singleWord of splitSentence) {
        if (singleWord === word) {
            count = count + 1
        }
    }
    return count;
}

// console.log(countWordOccurrences("I love typescript", "typescript"))