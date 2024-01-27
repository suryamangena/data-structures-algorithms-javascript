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