//Singly Linked List
class Node {

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){ //when an instance of the LinkedList class is invoked this constructor executes this block of code.
        this.head = null;
        this.length = 0;

    }

    getLength(){
        return this.length;
    }

    insertFirst(data) {
        let next = this.head;
        this.head = new Node(data, next);
        this.length++;
        return this.head;
        }

        insertAtIdx(data, idx){
        if(idx !== 0 && idx !== this.length && this.length > 1){
            let currentNode = this.head;
            let count = 0; //currentNode is on index 0, and is the head.
            for(var i = 1; i<idx-1; i++){ // iterates until we reach index.
                count++ // continuing from 0 to 1, 2,....
                currentNode = currentNode.next;// iterating from node, not idx.
            }
            let prevNode = currentNode;
            let nextNode = prevNode.next;
            let newNode = new Node(data, nextNode);

            prevNode.next = newNode;
            this.length ++;
            return newNode;
        }
    }

    insertLast(data){
        let currentNode = this.head;
        if(currentNode){
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(data);
        }
        else{
            this.head = new Node(data);
        }
        this.length++;
        return this.head;
    }

    deleteFirst(){
        let deletedNode= this.head;
        let nextNode = deletedNode.next;
        this.head = nextNode;
        this.length--;

        return deletedNode;
    }

    deleteAtIdx(idx){
        let deletedNode = null;

        if(idx !== this.length-1){
            let currentNode = this.head;
            let count = 0;
        while(count !== idx-1){
            count ++;
            currentNode = currentNode.next;
        }
        let prevNode = currentNode;
        deletedNode = prevNode.next;
        let nextNode = deletedNode.next;

        prevNode.next = nextNode;
        }
        else {
            return ("Node doesn't exist!");
        }
        this.length --;
        return deletedNode;
    }

    deleteLast(){
        let currentNode = this.head;
        let nextNode = currentNode.next;

        while(nextNode.next){
            currentNode = nextNode;
            nextNode = currentNode.next;
        }
        let deletedNode = nextNode;
        currentNode.next = null;
        this.length--;

        return deletedNode;
    }
    printData(){
            let current = this.head;
            while(current){
                console.log(current.data);
                current = current.next;
            }
    }
}


ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertAtIdx(44,2);
ll.deleteAtIdx(3);
ll.insertLast(22);
ll.insertFirst(33);
ll.deleteFirst();
ll.deleteLast();

ll.printData();
console.log(ll);
