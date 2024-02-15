function reverse(value){
    let reverseStr ='' ;
    for(let i = value.length-1; i>=0; i--){
        reverseStr = reverseStr+value[i];
    }
    return reverseStr;
}

console.log('Reverse String', reverse('This is surya'));