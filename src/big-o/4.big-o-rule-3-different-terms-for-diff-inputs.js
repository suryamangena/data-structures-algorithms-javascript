function compressBoxesTwice(boxes1, boxes2){
    for(let box of boxes1){ // O(a)
        console.log(box);
    }

    for(let box of boxes2){
        console.log(box); // O(b)
    }
}

/*
In Big O -> n is arbitrary 
So use different terms of different inputs, in the above case for boxes1 -> use a , boxes2 -> use b
bigO = O(a+b)
*/

//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {// O(n)
    for (let j = 0; j < array.length; j++) { // O(n)
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

/*
In the above example, for nested loops we use multiplication
Big O = O(n*n)=O(n2)

As per rule3, for different input use different terms,

function compressBoxesTwice(boxes1, boxes2){
    for(let box of boxes1){ // O(a)
     for(let box of boxes2){
        console.log(box); // O(b)
    }
    }

   
}

Let assume nested in compressBoxes with different inputs
BigO: O(a*b)

Note: If loops follows sequential indentation, then use addition, if loops use nested indentation, then use multiplication 

*/