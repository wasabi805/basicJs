console.log("i work");
/* source : https://www.fullstack.cafe/blog/javascript-code-interview-questions */

/* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
     "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. */

// The Not Eloquent way
const solutionOne = () => {
  for (let i = 0; i < 100; i++) {
    let mod3 = (i % 3 === 0) === true;
    let mod5 = (i % 5 === 0) === true;
    let bothMod = mod3 === mod5;

    if (mod3) {
      console.log("Fizz");
    }

    if (mod5) {
      console.log("Buzz");
    }

    if (bothMod) {
      console.log("FizzBuzz");
    }
  }
};

// solutionOne()

// The cleaner approach ...

const solutionTwo = () => {
  for (let i = 0; i < 100; i++) {
    let mod3 = i % 3 === 0;
    let mod5 = i % 5 === 0;

    console.log(mod3 ? (mod5 ? "FizzBuzz" : "Fizz") : mod5 ? "Buzz" : "");

    /**
     * BRREAKDOWN
     *
     * console.log( mod3 ?
     * (mod5 ? "FizzBuzz" : "Fizz"): | True: Now since the first check for mod3===0 && mod5 currently is 0 -----> log "FizzBuz" | False:  currently, mod3===0 &&  mod3 !==0 so log "Fizz"
     *   mod5 ? 'Buzz' : '' ) //: | True: mod3 !==0 &&  mod5===0, log "Buzz"  | False: log an empty string
     */
  }
};

solutionTwo();
