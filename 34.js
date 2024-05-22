// 문자열 내림차순으로 배치하기
function solution(s) {
    var arr = [...s];
    arr = arr.sort().reverse();
    
    const result = arr.join('');
    
    return result;
}

const s = "ZbcDefg";

console.log(solution(s));