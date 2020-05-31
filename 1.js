function isValidSubsequence(array, sequence) {

    let sequenceIndex = 0;

    for (index in array) {
        if (sequenceIndex === sequence.length) break;
        if (array[index] === sequence[sequenceIndex]) sequenceIndex++;
    }

    return sequenceIndex === sequence.length;
}
