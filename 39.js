// 최대공약수와 최소공배수
function solution(n, m) {
  let arr = [];
  let num = 0;
  if (m > n) {
    num = m;
  } else {
    num = n;
  }
  for (let i = num; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
      break;
    }
  }
  for (let i = 1; i <= num; i++) {
    let xn = n * i;
    
    for (let j = 1; j <= num; j++) {
      let xm = m*j;
      if(xm === xn){
        arr.push(xm);
        break;
      }
    }
    if(arr[1]) break;
  }
  return arr;
}

let n = 4;
let m = 6;

console.log(solution(n,m));