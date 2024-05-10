// 음양 더하기
function solution(absolutes, signs){
    let answer = 0;
    for(let i = 0; i < signs.length; i++){
        let num = signs[i] === true ? absolutes[i] : -1 * absolutes[i];
        answer += num;
    }
    return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

console.log(solution(absolutes, signs));