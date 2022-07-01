/* 

Use a recursive function to:
  -convert strings to Camelcase
  - If its a number reverse it
  - If its a boolean value revert it */

const source = {
  name: "example",
  id: 457,
  description: {
    gender: "male",
    weight: 172,
    hobies: ["baseball", "cricket", "football"],
  },
  isLoggedIn: false,
};

const captalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseNum = (num) => {
  const number = num
    .toString()
    .split("")
    .reverse()
    .reduce((prev, curr) => prev + curr);
  return parseInt(number, 10);
};

function convert (obj){
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      const array = obj[key];
      obj[key] = array.map((str) => captalizeString(str));
    } else if (typeof obj[key] === "string") {
      obj[key] = captalizeString(obj[key]);
    } else if (typeof obj[key] === "number") {
      obj[key] = reverseNum(obj[key]);
    } else if (typeof obj[key] === "boolean") {
      obj[key] = !obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      convert(obj[key]);
    }
  });
};

const destination = { ...source }; 
convert(destination)

console.log(destination);
