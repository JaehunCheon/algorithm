// 행렬의 덧셈
function solution(arr1, arr2) {
    let ans1 = [];
    let ans2 = [];
    let aL = arr1[0].length;
    
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < aL; j++){
            ans1.push(arr1[i][j] + arr2[i][j]);
        }
    }
    for(let k = 0; k<arr1.length; k++){
        ans2.push(ans1.slice(k*aL, (k+1)*aL));
    }
    return ans2;
}
let arr1 = [[1,2],[2,3],[4,5]];
let arr2 = [[3,4],[5,6],[2,4]];

console.log(solution(arr1, arr2));