// 1. return the counterpart of DNA for T --> A , C --> G and vise versa
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


// 2. return the highest and the lowest number in a string, with space seperated numbers
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
}


// 3. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}


// 4. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements
function moveZeros(arr) {
  return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}
//OR like this
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
//You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
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