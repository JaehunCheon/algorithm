// 자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    answer = n.toString().split("").reverse().map(Number);
    
    return answer;
}
let n = 16245;

console.log(solution(n));