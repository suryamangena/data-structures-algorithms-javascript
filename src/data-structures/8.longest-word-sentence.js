/**
 * Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
 */


function LongestWord(sen) { 

    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
  
    const newWordArray = sen.split(" ");
    let longest = "";
    newWordArray.forEach((eachItem)=>{
      if(eachItem.length > longest.length){
        longest= eachItem;
      }
    })
  
    // code goes here  
    return longest; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));