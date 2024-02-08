//

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "Invalid Array";
    }
  
    let newArray = [];
    for (let arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        newArray.push(arr); 
      }
    }
    return newArray;
  }

console.log(deleteInvalids([1, 2, 4, NaN, undefined, {name : "ss"}])) ;
