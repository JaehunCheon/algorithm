// 이상한 문자 만들기
function solution(s) {
    let arr = s.split("");
    let newArr = [];
    for(let i=0; i<s.length; i++){
        if(i%2===0){
            newArr.push(arr[i].toUpperCase());
        }else{
            newArr.push(arr[i].toLowerCase());
        }
    }
    return newArr.join("");
}

const s = "try hello world";

console.log(solution(s));