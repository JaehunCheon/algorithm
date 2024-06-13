// 콜라문제
function solution(a, b, n) {
    let result = 0;
    while(n >= a){
        let left = Math.floor(n/a)*b;
        result += left;
        n = (n%a)+left;
    }
    return result;
}