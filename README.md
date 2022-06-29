# FizzBuzz

PROBLEM:
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

## The Solution

    console.log( mod3 ? (mod5 ? "FizzBuzz" : "Fizz") : mod5 ? "Buzz" : "");

## How I would solve this

Use a trenery approach:

//...inside the for loop //

let mod3 = i % 3 === 0;
let mod5 = i % 5 === 0;

1.) make the initial check

    mod3 ?  "" :  "noCaseForFalseYet"

2.) If it's true, then we can check to see if i % 5 === 0

    mod3 ? ( mod5 ? "" : "") : "noCaseForFalseYet"

3.) So inside mod5's trenery, if this this true, we already know i%3 === 0. That's why we're currently inside this case. Therefore, we can print 'FizzBuzz'.

    mod3 ? ( mod5 ? console.log('FizzBuzz') : "") : "noCaseForFalseYet"

4.) If mod5's trenery check results to false, we still know that i%3 === 0 ;therfore, we should print 'Fizz'.

    mod3 ? ( mod5 ? console.log('FizzBuzz') : console.log('FizzBuzz')) : "noCaseForFalseYet"

5.) We still need to handle the case for if i%3 !==0 and we don't yet have a case to print 'Buzz'. So let's check here for i%5 === 0 so we cant print 'Buzz'.

    mod3 ? ( mod5 ? console.log('FizzBuzz') : console.log('Fizz')) : mod5 ? "" : ""

6.) If i%5 === 0, print 'Buzz'.

    mod3 ? ( mod5 ? console.log('FizzBuzz') : console.log('Fizz')) : mod5 ? console.log('Buzz') : ""

7.) If i%5 !== 0, the print an empty string.

    mod3 ? ( mod5 ? console.log('FizzBuzz') : console.log('Fizz')) : mod5 ? console.log('Buzz') : console.log("")

8.) Finally, to make this thing DRY, make one console.log() instead of 4 of them.

    console.log( mod3 ? ( mod5 ? 'FizzBuzz' : 'Fizz') : mod5 ? 'Buzz' : "" )
