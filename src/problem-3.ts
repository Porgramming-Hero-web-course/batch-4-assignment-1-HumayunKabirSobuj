
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