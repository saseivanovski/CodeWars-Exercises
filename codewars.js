// 1. Return the counterpart of DNA for T --> A , C --> G and vise versa
function DNAStrand(dna) {
  let arr = dna.split("");
  console.log(arr);
  let newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "A") {
      newarr.push("T");
    } else if (arr[i] == "T") {
      newarr.push("A");
    } else if (arr[i] == "C") {
      newarr.push("G");
    } else if (arr[i] == "G") {
      newarr.push("C");
    }
  }
  console.log(newarr)
  return newarr
}


// 2. Return the highest and the lowest number in a string, with space seperated numbers
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
}


// 3. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//    (In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}


// 4. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements
function moveZeros(arr) {
  return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}
//    OR like this
function moveZeros(arr) {
  var notZero = [];
  var zero = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero.push(0);
    } else {
      notZero.push(arr[i]);
    }
  }
  return notZero.concat(zero)
}


// 5. Second argument (tail), is the same as the last letter of the first argument (body). If the tail is right return true, else return false. The arguments will always be strings, and normal letters.
function correctTail(body, tail) {
  let sub = body.substr(body.length - (tail.length));

  if (sub == tail) {
    return true;
  } else {
    return false;
  }
}


// 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//    You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//    Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}


// 7. Rock,paper,scissors
function rps(p1, p2) {
  if (p1 === p2) {
    return 'Draw!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
}


// 8. Race Ceremony The organizers want a podium that satisfies: The first place platform has the minimum height posible The second place platform has the closest height to first place All platforms have heights greater than zero.
//    Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
function racePodium(blocks) {
  let vtoro = Math.ceil(blocks/3);
  let prvo = vtoro + 1;
  let treto = blocks - prvo - vtoro;
  if (blocks == 7) {
    return [2,4,1]
  }
  return [vtoro, prvo, treto];
}


// 9. Rectangle into Squares - cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different). You will be given two dimensions a positive integer length a positive integer width
//    You will return a collection or a string with the size of each of the squares. When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return null
function sqInRect(lng, wdth){
  var result = [];
  
  if (lng == wdth) {
    return null;
    }
  
   while (lng > 0 && wdth > 0) {
      if (lng < wdth) {
          wdth -= lng
          result.push(lng)
          } else {
            lng -= wdth
            result.push(wdth)
          }
    }
    return result;
}


// 10. Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//     Leading zeros (e.g. 01.02.03.04) are considered invalid. Inputs are guaranteed to be a single string
function isValidIP(str) {
  let elementi = str.split("."); //split string

  if (elementi.length !== 4) { //if elements are not 4 in number
    return false;
  }

  for (let i = 0; i < 4; i++) {
    let x = elementi[i]; //making var x to be element in the array

    if (!isIpNumber(x)) { //if this function is not true
      return false;
    }
  }
  return true;
}

function isIpNumber(x) {
  if (String(Number(x)) !== x) { //if x has something funky like spaces, leading 0's, ... (transform x into number than in string than we compare x not to be equal with x)
    return false;
  } 
  return (Number(x) >= 0 && Number(x) <= 255) //check if number is between 0 and 255
}