# Big O: Used for Scalable 

## Types:

1. Linear Time 
2. Constant Time

## Rules:

1. **Worst Case** : Always calculate for worst case -> Assume element is last element in an array
```
const findHorse = ((animals)=>{
    for(let animal of animals){
        if(animal=='horse'){
            console.log('Found Horse');
            break;
        }

    }
});

findHorse(['fish','cat','dog','horse']); // always calculate for worst case, having the target horse element as last element

```

2. **Remove Constants**: 
```
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]); // Printing Half of the Elements with in the input  // O(n/2)
        index++; // O(n/2)
    }

    for (var i = 0; i < 100; i++) { // O(100)
        console.log('hi'); // printing 100 times O(100)
    }
}

/*
 Result BigO=  O(1)+O(1)+O(1)+O(n/2)+ O(n/2)+O(n/2)+O(100)+(100)
BigO = O(203+3n/2) = O(n) // As removed constants 
 */

let n = 0;

while (n < 3) {
  n++;
}

while (n < 5) {
    n++;
  }
  

/*
BigO = O(n/3)+O(n/5) = O(n)
*/
```

3. **Different terms for inputs**:
```
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

/*
Question: What if the loops are nested.

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

In the above example, for nested loops we use multiplication
Big O = O(n*n)=O(n^2)  -> Quadratically means variable raised power of 2

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

``` 

4. **Drop Non Dominants** -> Drop Non Dominants have only Dominants in Big O 
```
Eg: 
function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) { // O(n)
      console.log(number);
    });
  
    console.log("and these are their sums:");
    numbers.forEach(function(firstNumber) { // O(n)
      numbers.forEach(function(secondNumber) { // O(n)
        console.log(firstNumber + secondNumber);
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)

  /*
Big O = O(n)+O(n*n) = O(n+n^2) = O(n^2)-> Drop non dominants
Eg: consider n= 5, then O(n+n^2) => O(5+5^2) = Here 5^2 = 25, 25 is dominant, so O(n^2);


Eg: O(x^2+3x+100+x/2) 
Consider with x = 5 , then O(5^2+3*5+100+5/2)-> here 3*5+100 is dominant one for case of 5.
But we always consider for worst case, consider x = 500 , then O(500^2+3*500+100+500/2)-> here dominant is 500^2 = 250000, so BigO = O(x^2)
  */
```

## Big O Cheat Sheet: 

1. O(1) Constant – no loops
2. O(log N) Logarithmic – usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear – for loops, while loops through n items
3. O(n log(n)) Log Linear – usually sorting operations
4. O(n^2) Quadratic – every element in a collection needs to be compared to ever other element. Two nested loops
5. O(2^n) Exponential – recursive algorithms that solves a problem of size N
6. O(n!) Factorial – you are adding a loop for every element

#### Note: 
1. **Iterating through half a collection is still O(n)**
2. **Two separate collections: O(a * b)**

## What Can Cause Time in a Function? Operations (+, -, *, /)

1. Comparisons (<, >, ==)
2. Looping (for, while)
3. Outside Function call (function())

## Rule Book

1. Rule 1: Always worst Case
2. Rule 2: Remove Constants Rule 3:
3. a. Different inputs should have different variables: O(a + b)
   b. A and B arrays nested would be: O(a * b)
4. +(addition) for steps in order
5. *(multiplication) for nested steps
6. Rule 4: Drop Non-dominant terms


## What Causes Space Complexity?
1. Variables
2. Data Structures
3. Function Call
4. Allocations

## BigO CheatSheet: https://www.bigocheatsheet.com/


