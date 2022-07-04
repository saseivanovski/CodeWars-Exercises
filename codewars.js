// return the counterpart of DNA for T --> A , C --> G and vise versa
function DNAStrand(dna){
  let arr = dna.split("")
  console.log(arr)
  let newarr = []
  for(var i=0;i<arr.length;i++){
    if(arr[i] == "A"){
      newarr.push("T")
    } else if (arr[i] == "T"){
      newarr.push("A")
    } else if (arr[i] == "C"){
      newarr.push("G")
    } else if (arr[i] == "G"){
      newarr.push("C")
    }
  }
  console.log(newarr)
  return newarr
}


// return the highest and the lowest number in a string, with space seperated numbers
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers) + " " +  Math.min(...numbers)
}


//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a,b,c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}


//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements
function moveZeros(arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

  