


function mergedSortedArrays(array1, array2){

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j= 1;

    //avoid the extra effort 
    if(array1.length ===0 ){
        return array1;
    }
    if(array2.length ===0){
        return array2;
    }
    console.log('Executed',array1Item,array2Item)

    while(array1Item || array2Item){
        console.log(array1Item,array2Item);
        if(!array2Item || array1Item<array2Item){
            mergedArray.push(array1Item);
            array1Item= array1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item= array2[j];
            j++;
        }

    }

    return mergedArray;

}


const array1 = [1,2,2,3,5,9,11,19,20];
const array2 = [4,5, 6,7,8,10,12];
console.log(mergedSortedArrays(array1,array2));

/**
 * This solution works if both the arrays has duplicates.
 * This will not work if the arrays are not sorted.
 */