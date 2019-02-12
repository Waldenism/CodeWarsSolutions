//#9 (6) Give Me diamond
// print diamonds given n
// n = 3
//    *
//   ***
//    *
// n = 5
//     *
//    ***
//   *****
//    ***
//     *

//My Solution
function diamond(n){
// n = 5
  let arc = [] // [1, 3, 5, 3, 1]
  let spaces = [] // [2, 1, 0, 1, 2]
  let asterisks = [] // same shape as arc
  let ans = [] // [ [], [], [], [], [] ]
  if(n % 2 == 0) {return null}
  else if(n < 1) {return null}
  else {
  // build arc
    for(let i=1; i<=n; i++){
      arc.push(i)
      i++
    }
    for(let i=n-2; i >= 1; i--){
      arc.push(i)
      i--
    }
    console.log(arc)
    
  // build spaces
    for(let i=0; i<arc.length; i++){
      let spaceCount = (n - arc[i]) / 2
       //sC is space count place holder
      function buildSpaces(sC){
        let s = ''
        for(let j=sC; j>0; j--){
          s += ' '
        }  
        return s
      }
      spaces.push(buildSpaces(spaceCount))
    }
    console.log(spaces)
    
  // build asterisks
    for(let i=0; i<arc.length; i++){
      function buildAsterisks(aC){
        let a = ''
        for(let j=aC; j>0; j--){
          a += "*"
        }
        a += '\n'
        return a
      }
      asterisks.push(buildAsterisks(arc[i]))
    }
    console.log(asterisks)
    
  // build ans array
    for(let i=0; i<n; i++){
      ans.push(spaces[i] + asterisks[i])
    }
    
    let answer = ans.join('')
    console.log(answer)
    return answer

  } 
} 

//   n=3                                                 ' *\n' + '***\n' + ' *\n'
//   n=5                                    '  *\n' + ' ***\n' + '*****\n' + ' ***\n' + '  *\n'
//   n=7  '   *\n' + '  ***\n' + ' *****\n' + '*******\n' + ' *****\n' + '  ***\n' + '   *\n'
//   n=9 '    *\n' + '   ***\n' + '  *****\n' + ' *******\n' + '*********\n' + ' *******\n' + '  *****\n' + '   ***\n' + '    *\n'

// console.log(3 , " *\n***\n *\n")
// console.log(5 , '  *\n ***\n*****\n ***\n  *\n')
// console.log(7 , '   *\n  ***\n *****\n*******\n *****\n  ***\n   *')
// console.log(9 , '    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *')
// console.log(11 , '     *\n    ***\n   *****\n  *******\n *********\n***********\n *********\n  *******\n   *****\n    ***\n     *\n')


// Top Solution(s)

function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}//z.

function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }

function diamond(n){
  if (n < 0 || !(n % 2)) return null; 
  const middleIndex = Math.floor(n / 2);
  
  return Array.apply(null, {length: n})
      .map((el, index) => {
        const indentation = Math.abs(index - middleIndex);
        const numberOfAsterisks = n - indentation * 2;
        return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
      })
      .join('\n') + '\n';
}



//#8 (6) Roman Numeral Decoder
// Convert a string with roman numerals and convert to numeric decimal number
// My Solution
function solution(roman){
  const romanNumerals = {
    M : 1000,
    D : 500, 
    C : 100,
    L : 50,
    X : 10,
    V : 5,
    I : 1
  }
  let numeric = 0
  let letters = roman.split('')
  for(let i=0; i<letters.length; i++){
    if(romanNumerals[letters[i]] < romanNumerals[letters[i+1]]){
      numeric += romanNumerals[letters[i+1]] - romanNumerals[letters[i]]
      i++
    } else {
      numeric += romanNumerals[letters[i]]
    }
  }
  return numeric
}


//TOP SOLUTIONS
function solution(roman){
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++){
    if(data[numbers[i]] < data[numbers[i+1]]){
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }
  return sum;
}


// #7 (6) Tribonacci
// write a function that adds the previous 3 numbers to get the next number in the sequence. Though the function can be seeded with a signature 

// My Solution
function tribonacci(signature,n){
  let ans = []
  if (n == 0) { return ans }
  if (n == 1) { return [signature[0]] }
  if (n == 2) { return [signature[0] , signature[1]] }
  if (n == 3) { return [signature[0] , signature[1] , signature[2]] }
  for(let i=0; i < signature.length; i++){
    ans.push(signature[i])
  }
  for(let i=0; i<n-3; i++){
    let index = (ans[i] + ans[i+1] + ans[i+2]) 
    ans.push(index)
  }
//   console.log(ans)
  return ans
}

// TOP SOLUTION
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
function tribonacci(s,n){
  var arr = [];
  for(var i=0; i<n; i++) {
    arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}


// #6 (6) stop gninnipS My sdroW!
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// My Solution
function spinWords(string){
  let a = string.split(' ')
  
  for(let i=0; i < a.length; i++) {
    if(a[i].length >= 5){
      a[i] = a[i].split('').reverse().join('')
    }
  }
  return a.join(' ')
}

// TOP SOLUTION(S)
  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }

  {
    function spinWords(str){
      return str.split(' ').map(spinSingleWord).join(' ');
    }

    function spinSingleWord(word){
      return word.length>4 ? word.split('').reverse().join('') : word;
    }
  }

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
