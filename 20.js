//정수 내림차순으로 배치하기
function solution(n){
    let result = [...String(n)];
    
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-i-1; j++){
            if(result[i]<result[i+j+1]){
                let num = result[i];
                result[i] = result[j+1+i];
                result[j+i+1] = num;
            }
        }
    }
    
    let answer = result.join("");
    return Number(answer);
}

let n = 325672;


console.log(solution(n));