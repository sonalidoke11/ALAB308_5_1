// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.




// 1 ) Take an array of numbers and return the sum.
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnSum(array) {
    let sum = 0;
    for (let i in array) {
        if (array[i] % 2 != 0) {
            sum += array[i];
        }
    }

    console.log(`Sum of given array is = ${sum}`)
}

console.log(" ")
console.log('Given Array is : numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]')
returnSum(numArray);



// 2) Take an array of numbers and return the average.

let numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnAverage(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let average = (sum/array.length)

    console.log(`Average of given array is = ${average}`)
}

console.log(" ")
console.log('Given Array is : numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]')
returnAverage(numArray2);

// 3) Take an array of strings and return the longest string.

let stringArray =['abcdefg', 'abc', 'abcdef', 'abcdefghi', 'a']

function longestString() {
    let longestString = "";
    for (let i = 0; i < stringArray.length; i++) {
        if (
            typeof stringArray[i] === "string" &&
            stringArray[i].length > longestString.length
        ) {
            longestString = stringArray[i];
        }
    }
    return longestString;
}

let longestStringIs = longestString(stringArray)
console.log(" ")
console.log("Given Array is : stringArray = ['abcdefg', 'abc', 'abcdef', 'abcdefghi', 'a']")
console.log(`Average of given array is = ${longestStringIs}`)


// 4) Take an array of strings, and a number and return an array of the strings that are longer than the given number.

let stringArray1 =[['abcdefg', 'abc', 'abcdef', 'abcdefghi', 'a', 'ab'],3]


function compareString(array) {
    let num = array[1]   
    let stringLength = [];    
    for (let i = 0; i < array[0].length; i++) {                
        if (array[0][i].length > num ) {
            stringLength.push(" " +array[0][i]+ " ") ;
        }
    }
    return stringLength;
}

let compareStringArray = compareString(stringArray1)
console.log(" ")
console.log("Given Array is : stringArray1 = ['abcdefg', 'abc', 'abcdef', 'abcdefghi', 'a', 'ab']")
console.log(`Strings in array greater than given number (3) is = ${compareStringArray}`)