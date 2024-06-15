class Node {
    value: any;
    next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: any): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.printList();
