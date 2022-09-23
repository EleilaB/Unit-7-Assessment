// SUM ZERO

let numArr = [-1, 0, 1, 2]

let sumZero = (arr) => {
    let numZero = false
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                numZero = true
            }
        }
    }
    return numZero
}

console.log(sumZero(numArr))

// Time Complexity: O(n^2)

// UNIQUE CHARACTERS

let uniqueChar = (word) => {
    let unique = true
    let stringArr = word.split("")
    console.log(stringArr)
    for(let i = 0; i < stringArr.length - 1; i++){
        for(let j = i + 1; j < stringArr.length; j++){
            if(stringArr[i] === stringArr[j]){
                unique = false
            }
        }
    }
    return unique
}

console.log(uniqueChar("fire"))

// Time Complexity: O(n^2)

// PANGRAM SENTENCE

let pangram = (string) => {
    let letterCount = 0
    const alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let lowerString = string.toLowerCase()
    let stringArr = lowerString.split("")
    for(let i = 0; i < alphabet.length; i++){
        for(let j = 0; j < stringArr.length; j++){
            if(alphabet[i] === stringArr[j]){
                letterCount += 1
                break;
            }
        }
    }
    console.log(`letter count: ${letterCount}`)
    if(letterCount === 26){
        console.log(`String is a pangram!`)
        return true
    }
    else {
        console.log(`String is not a pangram`)
        return false
    }
}

pangram(`The quick brown fox jumps over the lazy dog.`)

// Time Complexity: O(n)

// LONGEST WORD

let words = [`jupiter`, `cars`, `firetruck`, `this`, `is`, `late`]

let findLongestWord = (wordArr) => {
    let longestWord = 0
    for(let i = 0; i < wordArr.length; i++){
        let currWord = wordArr[i].split("")
        if(currWord.length > longestWord){
            longestWord = currWord.length
        }
    }
    return longestWord
}

console.log(findLongestWord(words))

// Time Complexity: O(n)