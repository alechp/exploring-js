/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T13:57:15-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-25T16:59:02-08:00
 */

//functional ish
/////////////////////////////////////////////////////////////////////////////////

// currying
// https://www.youtube.com/watch?v=3gEIAmt0h-U
// https://www.youtube.com/watch?v=t_RVFEKucIE
// https://www.youtube.com/watch?v=iZLP4qOwY8I

const chalk = require("chalk");
const log = console.log;

let add = (a, b) => {
  return a + b;
};

//func returnig func
let curryAdd = a => {
  return b => {
    return c => {};
    return a + b;
  };
};
log(`simpleSum should be 5: ${add(2, 3)}`);
log(`currySum should be 5: ${curryAdd(2)(3)}`);

const human = name => {
  let greeting = `Hi, my name is ${name}`;
  return {
    speak: () => log(greeting)
  };
};

human("alec").speak();
human("kevin").speak();
