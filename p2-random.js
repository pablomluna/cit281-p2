/*
    CIT 281 Project 2
    Name: Pablo Manriquez
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);


// Returns a single, random, lowercase letter
function getRandomLetter() {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i = 1; i ++) {
        return (abc.charAt(Math.floor(Math.random() * abc.length)))
    }
}

console.log(getRandomLetter());

// Returns the random length of a string
function getRandomString(minLength, maxLength) {
    let result = "";
    for (let i = 0; i < getRandomInteger(10, 20); i ++) {
        result += " "
    }
    return result.length
}
console.log(getRandomString());

//Return a string in ascending order
function getSortedString(string) {
    return (string.split("").sort()).join("")
}

console.log(getSortedString("xpacd"));