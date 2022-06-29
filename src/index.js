console.log("i work");
/*source : https://www.fullstack.cafe/blog/javascript-code-interview-questions */

/* Write a function that would allow you to do this:

    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27

 */

const createBase = (num) => {
  /* return a closure that adds the arg from the outer fn to arg from the closure */

  return (val) => val + num;
};

const addSix = createBase(6);

console.log(addSix(10)); // invoke the variable addSix which calls the outer fn which returns the closure
