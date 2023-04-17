const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
      this.head = null; //  link to the 1st node
      this.tail = null; //  link to the last node
      this.length = 0; //   number of nodes
  }

  
enqueue(value) {
  const node = new ListNode(value); // creates the node using class ListNode

  if (this.head) {               //  if the first node exitsts
      this.tail.next = node;      // inserts the created node after the tail
      this.tail = node;         //  makes the created node the last one
  } else {                      // if there are no nodes 
      this.head = node;           // the created node is the  head 
      this.tail = node          // and a tail at the same time.
  }

  this.length++;            // increases the length by 1
}
dequeue() {
  const current = this.head;      // saves the link to the head (to be removed)
  this.head = this.head.next;    // moves the head link to the 2nd node 
  this.length--;                 // reduces the length 

  return current.value;         // removed node's value
}

getUnderlyingList() {
  return this.head;           //returns the Linked List
}

 }
module.exports = {
  Queue
};
