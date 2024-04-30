// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    let num = x;
        for(let i=0; i < n; i++){
            answer[i] = x;
            x += num;
        }
        
    return answer;
}

let x = 2;
let n = 5;

console.log(solution(x, n));