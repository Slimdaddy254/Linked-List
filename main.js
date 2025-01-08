class Node{
    constructor(value){
        this.value = value;
        this.next = null; //reference to next node, null by default
    }
}
class LinkedList{
    constructor(){
        this.headNode = null; // initialize empty list with no head node
    }

    append(value){
        const newNode = new Node(value);

        //if list is empty , make new node the head node
        if(!this.headNode){
            this.headNode = newNode;
            return this.headNode;
        }
        let currentNode = this.headNode;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this.headNode;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.headNode; // point new node to current head
        this.headNode = newNode; // make new node the head
        return this.headNode;
    }

    get size(){
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode){
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    get head(){
        return this.headNode;
    }
    get tail(){
        if(!this.headNode) return null;
        let currentNode = this.headNode;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    at(index){
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode){
            if(count === index){
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }
    pop(){
        if(!this.headNode) return null;
        if(!this.headNode.next){
            const node = this.headNode;
            this.headNode = null;
            return node;
        }
        let currentNode = this.headNode;
        let prevNode = this.headNode;
        while(currentNode.next){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        return currentNode;
    }
    contains(value){
        let currentNode = this.headNode;
        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    find(value){
        let currentNode = this.headNode;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    toString(){
        let currentNode = this.headNode;
        let str = '';
        while(currentNode){
            str += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        return str + 'null';
    }
    insertAt(index, value){
        if(index === 0){
            this.prepend(value);
            return this.headNode;
        }
        const newNode = new Node(value);
        let count = 0;
        let currentNode = this.headNode;
        let prevNode = this.headNode;
        while(currentNode){
            if(count === index){
                newNode.next = currentNode;
                prevNode.next = newNode;
                return this.headNode;
            }
            count++;
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
    removeAt(index){
        if(index === 0){
            this.headNode = this.headNode.next;
            return this.headNode;
        }
        let count = 0;
        let currentNode = this.headNode;
        let prevNode = this.headNode;
        while(currentNode){
            if(count === index){
                prevNode.next = currentNode.next;
                return this.headNode;
            }
            count++;
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
    
}
