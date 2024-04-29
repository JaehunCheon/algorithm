//나머지가 1이되는 수 찾기 ( 3<= n <= 1,000,000)
function solution(n) {
    var answer = 0;
    
    for(let i = 0; i<=n; i++){
        if(n%i===1){
            answer = i;
            break;
        }
    }
        
    return answer;
}

const n = 10;

console.log(solution(n));