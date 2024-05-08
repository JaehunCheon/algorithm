// 콜라츠 추측
function solution(num) {
  let count = 0;
  for(let i=0; i<500; i++){
    if (num === 1){
      break;
    }
    else if (num % 2 === 0) {
      num = num / 2;
      count++;
    } 
    else if (num % 2 === 1) {
      num = num * 3 + 1;
      count++;
    }
    
  }
  let result = count < 500 ? count : -1;
  return result;
}


let num = 626331;

console.log(solution(num));
// 입력된 수가 짝수라면 2로 나눕니다.
// 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

// ex) n = 6 / result = 8
