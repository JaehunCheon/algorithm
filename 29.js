// 제일 작은 수 제거하기
function solution(arr) {
    let minNum = 0;
    if(arr.length===1){
        arr = [-1];
    }
    for(let i=0; i<arr.length -1; i++){
        if(arr[i]>arr[i+1]){
            minNum = arr[i+1];
        }else {
            minNum = arr[i];
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j]===minNum){
            arr.splice(j,1);
        }
    }
    
    return arr;
}
let arr = [5,3,4,1];


console.log(solution(arr));