// 문자열 다루기 기본
function solution(s) {
    var answer = true;
    if(s.length===4 || s.length===6){
        answer = isNaN(s) ? false : true;
    } else{
        answer = false;
    }
    return answer;
}

let s = "1131243";
console.log(solution(s));