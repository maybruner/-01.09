//----------------------------- Question 1 -----------------------------//
// You are given an array of strings, and a character from the alphabet a,b,c,d,e...
// return a new array -> result
// the function will check each string in the strings array and add the index to result in case that the word
// contains the provided character
// example: the character is "o", in the strings array elements - "one" and "two" contain the character,
// and their indexes will be added to the result array

const strings = ["one", "two", "three"];
function findWordsContaining(words, character) {
  const result = [];
  for (let index = 0; index < words.length; index++) {
    if (words[index].indexOf(character) != -1)
      result.push(words[index].indexOf(character));
  }

  return result;
}
console.log(findWordsContaining(strings, "o"));

//----------------------------- Question 2 -----------------------------//
// לא עברנו בשיעור, יש צורך להרחיב לבד
// You are provided with a matrix array ( array, with elements that are arrays מערך דו מימדי ),
// Your task is to find the average number between all of the arrays.
// Hint: two loops.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];
/// Find the average between all of the elements of the array and sub arrays
function findAverage(matrix) {
  let sum;
  let sumtotal = 0;
  let count = 0;
  for (let index = 0; index < matrix.length; index++) {
    sum = 0;
    for (let i = 0; i < matrix[index].length; i++) sum += matrix[index][i];
    console.log(" המומצע של השורה הוא" + sum / matrix[index].length);
    sumtotal += sum;
    count += matrix[index].length;
  }
  console.log(" ממוצע המטריצה הוא " + sumtotal / count);
}

findAverage(matrix);

//----------------------------- Question 3 -----------------------------//
// Write a function that will accept an 2 arrays as parameters
// and will return a new result array, that contain the elements that appear in both arrays
// make sure to only add the element to the result array once
// example : arr1 = [1,2,3,1], arr2 = [1,5,2] => result = [1,2]
// wrong implementation : arr1 = [1,2,3,1], arr2 = [1,5,2] => result = [1,1,2] element appears more than once in the result array

function similarityCheck(arr1, arr2) {
  const result = [];
  for (let index = 0; index < arr1.length; index++)
    for (let index2 = 0; index2 < arr2.length; index2++)
      if (arr1[index] == arr2[index2])
        if (result.indexOf(arr1[index]) == -1) result.push(arr1[index]);

  return result;
}
console.log(similarityCheck([1, 2, 3, 1], [1, 5, 2]));

//----------------------------- Question 4 -----------------------------//
// Write a function that accept two parameters, an array of numbers and a number
// the function will return the number of times the number appeared in the array

function countInstances(arr, number) {
  let count = 0
  for (let index = 0; index < arr.length; index++)
    if (number == arr[index])
    count++
  return count;
}
console.log (countInstances([1,2,3,2,4,2], 2))

//----------------------------- Question 5 -----------------------------//
// Write a function that loop over an array
// if the index is even, change the element to index
// example: arr = ["a","b","v","d","s","h"] => result = [0,"b",2,"d",4,"h"]

function replaceIndex(arr) {
  let result = [] 
  for (let index = 0; index < arr.length; index++)
    if (index%2 ==0)
      result.push(index)
    else result.push(arr[index])
  return result;
}
console.log (replaceIndex(['A',25,7,8,9,2,3,4,5]))

//----------------------------- Question 6: Challenge -----------------------------//
// Write a function that will iterate (loop over) an arr of characters,
// the function will return a new array in the following pattern
// if the character in arr is lowercase add "L" to the result array
// if the character in arr is uppercase add "U" to the result array
// example: arr = ["a","B","C","d","e","F"] => result = ["L","U","U","L","L","U"]

function checkCasing(arr) {
  let result = []
  for (let index = 0; index < arr.length; index++)
    if (arr[index]== arr[index].toLowerCase())
    result.push ('L')
  else result.push ('U')  
  return result;
}
console.log (checkCasing(["a","B","C","d","e","F"]))

//----------------------------- Question 7 -----------------------------//
// Write a function that will accept an array of 8 numbers as a parameter
// the function will console.log() the numbers that are divisible by 3
// it will also print their indexes
// if there are none, console.log("There are no numbers that meet the requirement")

function findDivisible(arr) {
 let count = 0
 for (let index = 0; index < arr.length; index++)
  if (arr[index] %3==0) {
    console.log (arr[index]+" in index: "+index)
    count++
  } 
  if (count == 0)
    console.log ("There are no numbers that meet the requirement")
}
findDivisible([3,8,9,21,5,7,6,0])