// k번째 수
function solution(array, commands) {
    let arr1 = []; let arr2 = [];
    for(let i = 0; i < commands.length; i++){
        arr1 = array.slice(commands[i][0]-1, commands[i][1]).sort();
        arr2.push(arr1[commands[i][2]-1]);
    }
    return arr2;
}