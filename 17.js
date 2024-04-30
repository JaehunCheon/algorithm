// 자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    let str = String(n);
    let arr = [...str];
    answer = arr.reverse();
    return answer;
}

let n = 16245;

console.log(solution(n));