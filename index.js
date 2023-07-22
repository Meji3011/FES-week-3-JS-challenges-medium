// This is the medium difficulty challenges for JS,
// All test console.log outputs are commented out,
// uncomment it to verify the results.

// Q1. False or Truthy?
// Given two values, return the first one if it is falsy,
// otherwise return the second one.

// we can convert it to its boolean value by using !

function truthyOrFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

// If !elem1 is true, then it means it's originally falsy, so
// we return elem1.

// console.log(truthyOrFalsy(0, 500))
// console.log(truthyOrFalsy(false, 100))

// Q2. Given an array, return its length.

function arrLength(arr1) {
  return arr1.length;
}

// console.log(arrLength([1, 2, 3]))
// console.log(arrLength([5, 0, -4, 1]))
// console.log(arrLength([]))

// Q3. Given an array, return the last element of the array.

function lastElementOfArray(arr2) {
  if (arr2.length > 0) {
    return arr2[arr2.length - 1];
  }
  return null;
}

// console.log(lastElementOfArray([1,2,3]))
// console.log(lastElementOfArray([5, 0, -4, 1]))
// console.log(lastElementOfArray([]))

// Q4. Find the sum of an array.

function sumOfArray(arr3) {
  let arrSum = 0;
  for (let i = 0; i < arr3.length; i++) {
    arrSum += arr3[i];
  }
  return arrSum;
}

// console.log(sumOfArray([2,2,2]))
// console.log(sumOfArray([100,200,500]))
// console.log(sumOfArray([0,-5,-10]))

// Add up the numbers from a single number, i.e. if the
// input is 4, we want the sum of 1 + 2 + 3 + 4 = 10.

function progressiveSum(num1) {
  let pSum = 0;
  for (let i = num1; i > 0; i--) {
    pSum += i;
  }
  return pSum;
}

// console.log(progressiveSum(3))
// console.log(progressiveSum(4))
// console.log(progressiveSum(100))
// console.log(progressiveSum(600))

// Q6. given a number in seconds, return this number in mm:ss format.

function calcTime(sec1) {
  if (sec1 / 60 < 10) {
    if (sec1 % 60 < 10) {
      return "0" + String(Math.floor(sec1 / 60)) + ":0" + String(sec1 % 60);
    }
    return "0" + String(Math.floor(sec1 / 60)) + ":" + String(sec1 % 60);
  } else if (sec1 % 60 < 10) {
    return String(Math.floor(sec1 / 60)) + ":0" + String(sec1 % 60);
  }
  return String(Math.floor(sec1 / 60)) + ":" + String(sec1 % 60);
}

function calcTimeAlt(sec2) {
  let timerMinutes = Math.floor(sec2 / 60);
  let timerSeconds = sec2 % 60;

  if (String(timerMinutes).length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  if (String(timerSeconds).length === 1) {
    timerSeconds = "0" + timerSeconds;
  }

  return timerMinutes + ":" + timerSeconds;
}

// The Alt version is the one shown in David's video, it looks cleaner
// than my solution, but both does the job.

// console.log(calcTimeAlt(60))
// console.log(calcTimeAlt(50))
// console.log(calcTimeAlt(500))
// console.log(calcTimeAlt(599))
// console.log(calcTimeAlt(5999))

// Q7. Find the largest number in an array

// I decided to set an object to store the max value and
// gave it the value of the first element in the array instead
// of 0, since the array could be full of negative numbers.
// Then we just compare the maxArr with each element in the
// array, updating it when we find a new larger number.

function getMaxArr(arr1) {
  let maxArr = arr1[0];
  for (i = 1; i < arr1.length; i++) {
    if (maxArr < arr1[i]) {
      maxArr = arr1[i];
    }
  }
  return maxArr;
}

// console.log(getMaxArr([5,100,0]))
// console.log(getMaxArr([12, 10, -20]))
// console.log(getMaxArr([-300, -100, -200]))

// Q8. Reverse a string using 3 methods:
// 1. use an incrementing for loop
// 2. a decrementing for loop
// 3. Use the array reverse property.

function reverseStringIncrementing(string1) {
  newStr1 = "";
  for (i = 0; i < string1.length; i++) {
    newStr1 = string1[i] + newStr1;
  }
  return newStr1;
}

function reverseStringDecrementing(string2) {
  newStr2 = "";
  for (i = string2.length - 1; i >= 0; i--) {
    newStr2 += string2[i];
  }
  return newStr2;
}

function reverseStringArrRev(string3) {
  newArr = [];
  for (i = 0; i < string3.length; i++) {
    newArr.push(string3[i]);
  }
  newStr = newArr.reverse().join("");
  return newStr;
}

// Define an array to store all the letters, then we use
// reverse() on the array to reverse the order.
// We then need to define a new variable to store the array
// that we're using join() on.

function reverseStringBest(string4) {
  return string4.split("").reverse().join("");
}

// Best solution, you can split the string into an array,
// reverse it, and use join to conver the array back to
// a string.

// console.log(reverseStringIncrementing("abc"));
// console.log(reverseStringIncrementing("David"));
// console.log(reverseStringIncrementing("This is cool"));

// console.log(reverseStringDecrementing("abc"));
// console.log(reverseStringDecrementing("David"));
// console.log(reverseStringDecrementing("This is cool"));

// console.log(reverseStringArrRev("abc"));
// console.log(reverseStringArrRev("David"));
// console.log(reverseStringArrRev("This is cool"));

// console.log(reverseStringBest("abc"));
// console.log(reverseStringBest("David"));
// console.log(reverseStringBest("This is cool"));

// Q9. Turn every element in an array into 0
// 1. For Loop
// 2. Array 'Fill'
// 3. Array 'map'

function convertArrToZerosForLoop (arr4) {
    for (i = 0; i < arr4.length; i++) {
        arr4[i] = 0;
    }
    return arr4;
}
// This mutates the orignal array, so just make a new
// array if you don't want to alter the original one.

function convertArrToZerosFill (arr4) {
    return arr4.fill(0);
}
// fill() changes all elements to the argument specified.
// If you want to use fill() to make a new array. Look below.
function convertArrToZerosFillNewArr (arr4) {
    return new Array(arr4.length).fill(0);
}

function convertArrToZerosMapNewArr (arr4) {
    let newArr = arr4.map(function(element) {
        return element * 0;
    });
    return newArr;
}
// map() can also alternate the original array. Show below.
function convertArrToZerosMap (arr4) {
    return arr4.map(elem => 0)
}

// console.log(convertArrToZerosForLoop([5,100,0]))
// console.log(convertArrToZerosForLoop([12]))
// console.log(convertArrToZerosForLoop([1,2,3,4,5]))

// console.log(convertArrToZerosFill([5,100,0]))
// console.log(convertArrToZerosFill([12]))
// console.log(convertArrToZerosFill([1,2,3,4,5]))

// console.log(convertArrToZerosFillNewArr([5,100,0]))
// console.log(convertArrToZerosFillNewArr([12]))
// console.log(convertArrToZerosFillNewArr([1,2,3,4,5]))

// console.log(convertArrToZerosMapNewArr([5,100,0]))
// console.log(convertArrToZerosMapNewArr([12]))
// console.log(convertArrToZerosMapNewArr([1,2,3,4,5]))

// console.log(convertArrToZerosMap([5,100,0]))
// console.log(convertArrToZerosMap([12]))
// console.log(convertArrToZerosMap([1,2,3,4,5]))

// Q10. Filter out all the apples
// Given an array of fruits, if it is an apple remove it from the
// Array.
// 1. For Loop
// 2. Filter()

function removeApplesForLoop (arr5) {
    newArr = []
    for (i = 0; i < arr5.length; i++) {
        if (arr5[i] !== 'Apple') {
            newArr.push(arr5[i])
        }
    }
    return newArr;
}
// Splice is not good as it removes elements from the array, causing
// skips to happen.

function removeApplesFilterNewArr (arr5) {
    newArr = arr5.filter(elem => elem !== 'Apple')
    return newArr;
}
// This function creates a new array that filters every element
// that is 'Apple'. You can also just filter through the original
// array, show below.
function removeApplesFilter (arr5) {
    return arr5.filter(elem => elem !== 'Apple')
}

// console.log(removeApplesForLoop(['Banana','Apple','Orange','Apple']))
// console.log(removeApplesForLoop(['Tamato','Orange','Banana']))
// console.log(removeApplesForLoop(['Banana','Orange','Apple']))

// console.log(removeApplesFilter(['Banana','Apple','Orange','Apple']))
// console.log(removeApplesFilter(['Tamato','Orange','Banana']))
// console.log(removeApplesFilter(['Banana','Orange','Apple']))

// Q11. Filter out all the falsy values
// 1. For Loop
// 2. Filter()

function filterOutFalsyForLoop (arr6) {
    newArr = []
    for (i = 0; i < arr6.length; i++) {
        if (!!arr6[i] === true) {
            newArr.push(arr6[i])
        }
    }
    return newArr;
}

function filterOutFalsyFilter (arr6) {
    return arr6.filter(elem => !!elem === true)
}

// console.log(filterOutFalsyForLoop(["", [] , 0 , null , undefined ,"0"]))
// console.log(filterOutFalsyForLoop(['Tomato', 'Orange', 'Banana', false]))

// console.log(filterOutFalsyFilter(["", [] , 0 , null , undefined ,"0"]))
// console.log(filterOutFalsyFilter(['Tomato', 'Orange', 'Banana', false]))

// Q12. Truthy to true, Falsy to false
// 1. For loop
// 2. Map()

function convertToBooleanForLoop (arr7) {
    for (i = 0; i < arr7.length; i++) {
        arr7[i] = !!arr7[i]
    }
    return arr7
}

function convertToBooleanMap (arr7) {
    return arr7.map(elem => !!elem)
}

console.log(convertToBooleanForLoop([500,0,'David','',[]]))

console.log(convertToBooleanMap([500,0,'David','',[]]))

