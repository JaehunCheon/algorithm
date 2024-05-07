// 두 정수 사이의 합
function solution(a, b) {
    let result = 0;
    if(b>a){
    for(let i = 0; i <= b-a; i++){
        result += a+i;
    }
} else if(a > b){
    for(let i = 0; i <= a-b; i++){
        result += b+i;
    }
} else{
    result = a;
}
    return result;
}

let a = 3;
let b = 6;
// result = 3 + 4 + 5 + 6 