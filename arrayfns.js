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

// Time Complexity: O(n^2) NOTE: After building out the Unique Characters function, I've realized that I could reduce the time complexity of this function, but I'm gonna leave it how it is

// UNIQUE CHARACTERS

let uniqueChar = (word) => {
    let unique = true
    let stringArr = word.split("")
    console.log(stringArr)
    for(let i = 0; i < stringArr.length - 1; i++){
        if(stringArr[i] === stringArr[i + 1]){
            unique = false
        }
    }
    return unique
}

console.log(uniqueChar("shoe"))

// Time Complexity: O(n)

// PANGRAM SENTENCE

let pangram = (string) => {
    const alphabet =["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
    let stringArr = string.split("")
    // unfinished
}