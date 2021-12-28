class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        this.val = val;
        if(!this.head) {
            this.head = val;
            this.tail = val;
        }else{
            this.next = val;
            this.tail = val;
        }
        this.length++;
    }
}

