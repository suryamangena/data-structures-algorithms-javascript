class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            previous: null,
        }
        this.tail = this.head;
        this.length = 1;
    }


    append(value){
        const newNode = { 
            value: value,
            next: null,
            previous: null,
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = { 
            value: value,
            next: null,
            previous: null,
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;

    }

    insert(index,value){
        const newNode = { 
            value: value,
            next: null,
            previous: null,
        }
       let leader=  this.traverseToIndex(index-1);
       const follower = leader.next;
       leader.next = newNode;
       newNode.previous = leader;
       newNode.next = follower;
       follower.previous = newNode;
       this.length++;
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

    printList(){
        const newArray = [];
        let currentNode = this.head;
        while(currentNode!==null){
            newArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return newArray;
    }


    remove(index){
         const leader = this.traverseToIndex(index-1);
         const follower = leader.next;
         leader.next = follower.next;
         follower.previous = leader;
         this.length--;
         return this;
    }

  



}

const dLinkedList = new DoublyLinkedList(10);

dLinkedList.append(5);
dLinkedList.append(11);
dLinkedList.append(15);
dLinkedList.insert(2,99);
dLinkedList.insert(3,100);
dLinkedList.remove(2)
console.log(dLinkedList);
console.log(dLinkedList.printList())