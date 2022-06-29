console.log("i work");
/* What is a "mul" function : https://www.geeksforgeeks.org/explain-the-mul-function-in-javascript/ */

/* example
    make this function work :
    console.log(mul(2)(3)(4)); // output : 24
    console.log(mul(4)(3)(4)); // output : 48
*/

const mul = (x) => {
  return (y) => {
    return (z) => {
      console.log(x, y, z);
      return x * y * z;
    };
  };
};

const mulResult = mul(3)(3)(2);
console.log("mulResult", mulResult);
