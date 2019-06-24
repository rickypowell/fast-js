require('nan')
console.log("finished \"nan\"");
const { hello } = require('./build/Release/hello.node');
console.log("finished \"hello\"");

const cPlusPlusHelloTime = "c++ hello"
console.time(cPlusPlusHelloTime);
hello();
console.timeEnd(cPlusPlusHelloTime);

const jsLoopTime = "js loop";
console.time(jsLoopTime);
let count = 0;
for (let i = 0; i < 1000000; i++) {
    count = i;
}
console.log("hello\n");
console.timeEnd(jsLoopTime);

console.log("\"hello\" function called");