# Data Structures: Collection of values 

1. Arrays 
2. Hash Tables
3. Linked Lists
4. Stacks 
5. Queues
6. Trees
7. Graphs
8. Tries 


## What is Data Structures:

Collection of values, it might have relations and can apply functions. Each data structure is different, what it can do and what it is best used for
Data structure is to organize the data, we can put in and retrieve from it. Data Structures used to minimize the process of storing and retrieve data 


## Operations on Data Structures:

1. insertion 
2. deletion 
3. traversal -> iterate each element 
4. searching -> lookup
5. sorting 
6. access -> how we are going to access 

## 1. Arrays

Arrays stores values in sequence

1. **Arrays operations**
   - lookup -> O(1)
   - push -> O(1)
   - insert -> O(n)
   - delete -> O(n) 

```
const strings = ['a','b','c','d'];
strings.push('e'); // add item to last  of array -> O(1)
strings.pop(); // remove the last item -> O(1)
strings.unshift('x'); // add x to the beginning of array and time complexity O(n) as add 'x' in beginning of array and move index of other elements

strings.splice(2,0,'alien'); // O(n)

```

2. **Dynamic Arrays** -> Size is not fixed 

Dynamic array allows to copy existed array and add the new element to be added 



1. **Dynamic Operations** 
    - lookup -> O(1)
    - append* -> O(n) -> Dynamic array copies existing array by iterating it and append new item to the last -> so O(n)
    - insert -> O(n)
    - delete -> O(n)

## 2. Hash Table 

Hash Table allows us to store data key value pairs. Hash Table uses Hash function to store the key and value. With limited memory and using hash function, hash collisions can happen that me in the same memory reference two key value pairs will get stored which leads to linked list 

1) https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12311440#overview
2) https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

Time Complexity of Hash Table is O(n) -> due to Hash Collisions 

### Hash Collisions can be solved by many methods, 1 is linked list 

## Object vs Map vs Set

1. Object allows only string as key and value can be anything
2. Object won't maintain insertion order 
3. Map allows functions as key or any data type
4. Map maintain insertion order 
5. Set only stores keys which is unique 


## Linked Lists 

1. Linked List maintain the order
2. Reference: https://visualgo.net/en/list?slide=1










## References:

1. https://en.wikipedia.org/wiki/List_of_data_structures
