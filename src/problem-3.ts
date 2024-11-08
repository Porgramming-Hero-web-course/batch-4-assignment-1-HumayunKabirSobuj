
const countWordOccurrences = (sentence: string, word: string) => {
    let count = 0;
    const splitSentence = sentence.split(' ');
    for (let singleWord of splitSentence) {
        if (singleWord === word) {
            count = count + 1
        }
    }
    return count;
}

