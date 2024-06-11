// 가장 가까운 같은 글자

function solution(s) {
    let result = [-1];
    
    for(let i = 1; i < s.length; i++){
        let  count = -1;
        for(let j = i-1; j >= 0; j--){
            if(s[i]===s[j]){
                count = i-j;
                break;
            } 
        }
       result.push(count);
    }
    return result;
}