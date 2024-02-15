# JavaScript Classes

1. **Reference type**
```
var object1 = {value: 10};
var object2 = object1;
var object3= {value:10};

object1 === object2 > O/P: true as object1, object2 referring to same reference storage
object3 === object1 -> O/P: false as object1, object3 referring to different reference storage
```

2. **Context vs Scope**
```
```

3. **Instantiation**
```
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    
    introduce() {
        console.log(`Hi I a, ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }
    play() {
        console.log(`Wee I'm a {this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn','Dark Magic');
```

