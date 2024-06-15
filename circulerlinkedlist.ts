class CircularNode {
    value: any;
    next: CircularNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    head: CircularNode | null;

    constructor() {
        this.head = null;
    }

    append(value: any): void {
        const newNode = new CircularNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
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

const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);
circularLinkedList.printList();
