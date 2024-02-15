

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length=1;

    console.log('Executed')
    }


    append(value){
        const newNode = {
            value: value,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null,
        }
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this;
    }

    insert(index, value){
       const newNode = {value: value, next: null};
       let leader =  this.traverseToIndex(index-1);
      // console.log('leader', leader);
       let headPointer = leader.next;
        leader.next = newNode;
        newNode.next = headPointer;

        this.length++;
        this;
    }

    remove(index){
        let leader = this.traverseToIndex(index-1);
        let unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;

    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter!==index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;

    }

    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        console.log('first', first)
        console.log('second', second)
        while(second){
            const temp = second.next;
            console.log('temp', temp)
            second.next = first;
            console.log('second.next', second.next);
            first = second;
            console.log('first', first);
            second = temp;
            console.log('second', second);
        }
        this.head.next = null;
        this.head = first;

        return this.printList();
    }


    printList(){
        const newArray = [];
        let currentNode = this.head;
        while(currentNode!==null){
            newArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return newArray;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.append(21);
myLinkedList.append(25);
//myLinkedList.insert(3,99)
//console.log(myLinkedList.printList());
//myLinkedList.remove(3)
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.reverse())