// #6 (6) top gninnipS My sdroW!
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// My Solution

// TOP SOLUTION(S)


//#5 (7) Decending Order
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// My Solution
function descendingOrder(n){
  let ans = n.toString().split('')
  let res = []
  for(let i=0; i<ans.length; i++){
    let a = parseInt(ans[i])
    res.push(a)
  }
  for(let j=res.length; j>0; j--){
    for(let i=0; i<res.length; i++){
      if(res[i] < res[i+1]){
        [res[i], res[i+1]] = [res[i+1], res[i]]
      }
    }
  }
  let x = res.join('')
  return parseInt(x)
}

// TOP SOLUTIONS
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// #4 (7) Is it Negative Zero -(0)
// Write a function that returns true if the input number is -0 and false otherwise

// My Solution
function isNegativeZero(n) {
  if(n !== 0) { 
    return false
  } else { 
    if(1/n == Infinity) {
      return false
    } else {
     return true
    }
  }
}

// TOP SOLUTION(S)
const isNegativeZero = n => Object.is(n, -0);

function isNegativeZero(n) {
  return 1/Math.sign(n)===-Infinity;
}

// #3 (7) Disemvowel Trolls
// Your task is to write a function that takes a string and return a new string with all vowels removed. Note: for this kata y isn't considered a vowel.

//My Solution
function disemvowel(str) {
  return str.split('').filter(letter => letter !== 'a' && 
    letter !== 'e' && 
    letter !== 'i' && 
    letter !== 'o' && 
    letter !== 'u' && 
    letter !== 'A' && 
    letter !== 'E' && 
    letter !== 'I' && 
    letter !== 'O' && 
    letter !== 'U' ).join('');
}

// TOP SOLUTION(S)
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

// #2 (6) Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// My Solution
function createPhoneNumber(numbers) {
  
  let ans = "("
  for(i=0; i<3; i++){
    ans += numbers[i]
  }
  ans += ") "
  ans += numbers[3]
  ans += numbers[4]
  ans += numbers[5]
  ans += "-"
  ans += numbers[6]
  ans += numbers[7]
  ans += numbers[8]
  ans += numbers[9]
  return ans
}

// TOP SOLUTION(S)
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }

  return format;
} 

// #1 (7) You're a Square
// Given an integral number, determine if it's a square number:
// My Solution

// TOP SOLUTION(S)
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));
