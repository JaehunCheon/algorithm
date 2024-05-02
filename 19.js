// 정수 제곱근 판별
function solution(n) {
    let answer = 0;
    for(let i = 1; i<n; i++){
        if(i*i === n){
            answer = (i+1)*(i+1);
            break;
        }else{
            answer = -1;
        }
        
    }
    return answer;
}
console.log(solution(n));