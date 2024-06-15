class CircularDoublyNode {
    value: any;
    next: CircularDoublyNode | null;
    prev: CircularDoublyNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    head: CircularDoublyNode | null;

    constructor() {
        this.head = null;
    }

    append(value: any): void {
        const newNode = new CircularDoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            newNode.prev = this.head;
            return;
        }

        let tail = this.head.prev;
        if (tail) {
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }

    printList(): void {
        if (!this.head) return;

        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }
}

const circularDoublyLinkedList = new CircularDoublyLinkedList();
circularDoublyLinkedList.append(1);
circularDoublyLinkedList.append(2);
circularDoublyLinkedList.append(3);
circularDoublyLinkedList.printList();
