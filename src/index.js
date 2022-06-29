console.log("i work");
/*soure : https://www.fullstack.cafe/blog/javascript-code-interview-questions */

// Implement enqueue and dequeue using only two stacks
//  Enqueue means to add an element, dequeue to remove an element.

const inputStack = [];
const dequeueStack = [];

const enqueue = (arr, item) => {
  arr.push(item);
};

enqueue(inputStack, 1);
enqueue(inputStack, 2);
enqueue(inputStack, 3);
enqueue(inputStack, 4);

console.log(inputStack);

const dequeue = (input, dequeue) => {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack

  if (dequeue <= 0) {
    //run below only for the first time deque fn is used
    while (input.length > 0) {
      const itemToDisplay = input.pop();
      dequeue.push(itemToDisplay);
    }
  }

  return dequeue.pop();
};

const dequeValue = dequeue(inputStack, dequeueStack);
const dequeValue2 = dequeue(inputStack, dequeueStack);
const dequeValue3 = dequeue(inputStack, dequeueStack);

console.log("this is the dequeValue", dequeValue);
console.log("this is the dequeValue2", dequeValue2);
console.log("this is the dequeValue3", dequeValue3);
