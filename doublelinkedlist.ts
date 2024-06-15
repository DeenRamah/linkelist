class DoublyNode {
    value: any;
    next: DoublyNode | null;
    prev: DoublyNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DoublyNode | null;
    tail: DoublyNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: any): void {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.printList();
