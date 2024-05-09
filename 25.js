// 나누어 떨어지는 숫자 배열
function solution(arr, divisor){
    let array = [];
    // 나눠지는 수 저장
    arr.forEach(element => {
        if(element%divisor === 0){
            array.push(element);
            return;
        }
    });
    // 오름차순으로 정렬
    array.sort((a,b) => a - b);
    // 배열안에 값 없을때 -1 반환
    if(array.length === 0){
        return -1;
    }
    return array;
}

const arr = [9,5,1,10];
const divisor = 1;

console.log(solution(arr, divisor));