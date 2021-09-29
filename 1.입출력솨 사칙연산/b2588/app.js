const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input = input[0];
input = input.map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
  // Write your code
  const stringB = String(B);
  const one = +stringB[0];
  const two = +stringB[1];
  const three = +stringB[2];

  console.log(A * three);
  console.log(A * two);
  console.log(A * one);
  console.log(A * B);
}
