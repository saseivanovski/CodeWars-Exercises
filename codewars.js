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

  DNAStrand("CGACGATCAGTA")