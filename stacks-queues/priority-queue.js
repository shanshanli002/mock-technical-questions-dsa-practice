/**
 * First implementation is using a priority queue class, and using an array DS to hold the queue.
 *
 * Pros: the priority queue in this implementation is unsorted, so we can enqueue like regular by pushing to the end which is O(1) time
 * Cons: Unsorted queue means we have to traverse the queue every time we want to dequeue to find the highest priority.
 *
 * methos: add, poll
 *
 */

class PriorityQueue {
  constructor() {
    this.data = [];
  }

  add(priority, value) {
    this.data.push({ priority, value });
  }

  poll() {
    let maxIdx = 0;
    let maxPriority = this.data[maxIdx].priority;

    for (let i = 1; i < this.data.length; i++) {
      if (this.data[i].priority > maxPriority) {
        maxIdx = i;
        maxPriority = this.data[i].priority;
      }
    }

    return this.data.splice(maxIdx, 1)[0].value;
  }
}

const pq = new PriorityQueue();

pq.add(8, "broken leg");
pq.add(6, "dizziness");
pq.add(10, "heart attack");
pq.add(2, "tooth ache");

console.log(pq);

pq.poll();

console.log(pq);

/** 
 * If above implementation isn't optimal, then what's the best DS?
 * 
 * -LinkedList: peek and poll would sitll be O(n)
 * -doubly linked list: peek and poll would still be O(n)
 * 
 * We want a DS that is kept sorted, add at right place, top priority is first
 * 
 * BEST DS for priority queues are HEAPS 
 */