// 약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;
  let count = 0;
  const n = right - left + 1;
  for (let i = 0; i < n; i++) {
    let num = left + i;
    for (let j = 1; j <= num; j++) {
      if (num % j === 0) {
        count++;
      }
    }
    if(count % 2 === 0){
        answer += num;
    }else{
        answer -= num;
    }

    count = 0;
  }
  return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));
