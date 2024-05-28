//3진법 뒤집기
function solution(n) {
  const num3 = n.toString(3).split("").reverse().join("");
  const num10 = parseInt(num3, 3);
  return num10;
}
let n = 45;

console.log(solution(n));
