// 없는 숫자 더하기
function solution(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let answer = 45 - sum;
    return answer;
}