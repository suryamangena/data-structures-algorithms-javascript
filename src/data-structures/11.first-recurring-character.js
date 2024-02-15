/**
 * Given an array [2,5,1,2,3,5,1,2,4]
 * It should return 2 
 */

function firstRecurringCharacter(array1){
    const map = new Map();
    for(const element of array1){
        let count = 0;
        if(map.get(element)){
            count = map.get(element);
        }
        count = count+1;
        map.set(element,count);
        if(count>1){
            return element;
        }
    }
    return undefined;
}


function firstRecurringCharacterObject(array1){
    const map = {};
    for(let i = 0; i<array1.length; i++){
        if(map[array1[i]]!==undefined){
            return array1[i];
        }else{
            map[array1[i]] = i;
        }
    }
    return undefined;
}


console.log(firstRecurringCharacterObject([6,0,-1,3,5,1,2,4]));