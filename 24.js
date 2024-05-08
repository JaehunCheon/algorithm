//서울에서 김서방 찾기
function solution(seoul){
    let str = "";
    let n=0;
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i]==="Kim"){
            n = i;
        }
    }
    str = `김서방은 ${n}에 있다`;
    return str;
}

const seoul = ["Jane", "Cheon", "Kim"];

console.log(solution(seoul));