// 하샤드 수
function solution(x){
    let answer = true;
    let sum = 0;
    let n = String(x);
    for(let i=0; i<n.length; i++){
        sum += Number(n[i]);
    }
    if(x%sum === 0){
        answer = true;
    }else{ 
        answer = false; 
    };
    return answer;
}

let x = 11;

console.log(solution(x));