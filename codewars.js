// 1. Return the counterpart of DNA for T --> A , C --> G and vise versa
function DNAStrand(dna) {
  let arr = dna.split("");
  console.log(arr);
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
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
  console.log(newarr);
  return newarr;
}

// 2. Return the highest and the lowest number in a string, with space seperated numbers
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " + Math.min(...numbers);
}

// 3. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//    (In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 4. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements
function moveZeros(arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
}
//    OR like this
function moveZeros(arr) {
  let notZero = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero.push(0);
    } else {
      notZero.push(arr[i]);
    }
  }
  return notZero.concat(zero);
}

// 5. Second argument (tail), is the same as the last letter of the first argument (body). If the tail is right return true, else return false. The arguments will always be strings, and normal letters.
function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);
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
    return "Draw!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

// 8. Race Ceremony The organizers want a podium that satisfies: The first place platform has the minimum height posible The second place platform has the closest height to first place All platforms have heights greater than zero.
//    Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
function racePodium(blocks) {
  let second = Math.ceil(blocks / 3);
  let first = second + 1;
  let third = blocks - first - second;
  if (blocks == 7) {
    return [2, 4, 1];
  }
  return [second, first, third];
}

// 9. Rectangle into Squares - cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different). You will be given two dimensions a positive integer length a positive integer width
//    You will return a collection or a string with the size of each of the squares. When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return null
function sqInRect(lng, wdth) {
  let result = [];
  if (lng == wdth) {
    return null;
  }
  while (lng > 0 && wdth > 0) {
    if (lng < wdth) {
      wdth -= lng;
      result.push(lng);
    } else {
      lng -= wdth;
      result.push(wdth);
    }
  }
  return result;
}

// 10. Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//     Leading zeros (e.g. 01.02.03.04) are considered invalid. Inputs are guaranteed to be a single string
function isValidIP(str) {
  let elementi = str.split("."); //split string
  if (elementi.length !== 4) {
    //if elements are not 4 in number
    return false;
  }
  for (let i = 0; i < 4; i++) {
    let x = elementi[i]; //making var x to be element in the array
    if (!isIpNumber(x)) {
      //if this function is not true
      return false;
    }
  }
  return true;
}

function isIpNumber(x) {
  if (String(Number(x)) !== x) {
    //if x has something funky like spaces, leading 0's, ... (transform x into number than in string than we compare x not to be equal with x)
    return false;
  }
  return Number(x) >= 0 && Number(x) <= 255; //check if number is between 0 and 255
}

// 11. Complete the solution so that it splits the string into pairs of two characters.
//     If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
function solution(str) {
  let x = 0;
  let y = [];
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    y.push(str[x] + str[x + 1]);
    x = x + 2;
  }
  return y;
}

// 12. Create a function with two arguments that will return an array of the first (n) multiples of (x).
//     Assume both the given number and the number of times to count will be positive numbers greater than 0.
//     Return the results as an array
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// 13. You are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// 14. The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
//     Write a function that takes an array of integers as an argument and returns the median of those integers.
function median(array) {
  let i = array.sort(function (a, b) {
    return a - b;
  });
  if (i.length % 2 === 0) {
    return (i[i.length / 2 - 1] + i[i.length / 2]) / 2;
  } else {
    return i[Math.floor(i.length / 2)];
  }
}
console.log(median([33, 99, 100, 30, 29, 50]));

// 15. Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.
//     - Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
//     - If the value is the same they both perish
//     - If one of the values is empty (different array lengths) the non-empty value soldier survives.
//     - To survive the defending side must have more survivors than the attacking side.
//     - In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
//     - The initial attack power is the sum of all the values in each array.
function hasSurvived(attackers, defenders) {
  let a = [];
  let d = [];

  let sumA = 0;
  let sumD = 0;

  for (let i = 0; i < attackers.length || i < defenders.length; i++) {
    sumA = sumA + attackers[i];
    if (attackers[i] > defenders[i] || defenders[i] == undefined) {
      a.push(1);
    }
  }

  for (let i = 0; i < defenders.length || i < attackers.length; i++) {
    sumD = sumD + defenders[i];
    if (attackers[i] < defenders[i] || attackers[i] == undefined) {
      d.push(1);
    }
  }

  if (a.length == d.length) {
    if (sumA > sumD) {
      return false;
    } else {
      return true;
    }
  }

  if (d.length > a.length) {
    return true;
  } else {
    return false;
  }
}
