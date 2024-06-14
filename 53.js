// 명예의 전당(1)

function solution(k, score) {
    let arr = score.slice(0,k);
    let result = [];
    
    while(result.length < k){
        arr = score.slice(0, k);
        arr.sort((a, b) => a - b);
        result.push(arr[0]);
    }
    
    for(let i = 0; i < score.length - k; i++){
        arr.sort((a, b) => a - b);
        if(arr[0] > score[k+i]){
            result.push(arr[0]);
        } else{
            arr.splice(0, 1, score[k+i]);
            arr.sort((a, b) => a - b);
            result.push(arr[0]);
        }
    }
    return result;
}