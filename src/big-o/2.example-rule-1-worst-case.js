const findHorse = ((animals)=>{
    for(let animal of animals){
        if(animal=='horse'){
            console.log('Found Horse');
            break;
        }

    }
});

findHorse(['fish','cat','dog','horse']); // always calculate for worst case, having the target horse element as last element
