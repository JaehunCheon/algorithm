// 크기가 작은 부분문자열
function solution(t, p) {
    let result = 0; let num = "";
    for(let i = 0; i < t.length - p.length + 1; i++){
        for(let j = 0; j < p.length; j++){
           num += t[i+j];  
        }
        if(Number(num)<=Number(p)){
            result++
        }
        num = "";
    }
    return result;
}

let t = '3141592';
let p = '271';

console.log(solution(t,p));