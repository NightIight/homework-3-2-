function capsLock(str) {
    return str
        .split(' ')
        .map(function (word) {
            let upWord = word.toUpperCase()

            if (word === upWord) {
                return word.toLowerCase()
            } else if (word === upWord[0].toLowerCase() + upWord.slice(1)) {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
            return word
        })
        .join(' ')
}

const capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];

// testing
capsLockTests.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult

    let result = capsLock(workingItem)

    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})