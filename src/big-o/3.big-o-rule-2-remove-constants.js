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


