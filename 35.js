// 부족한 금액 계산하기
function solution(price, money, count) {
    let need = 0;
    for(let i = 1; i <= count; i++){
        need += price * i;
    }
    if(need >= money){
        return need - money;
    } else {
        return 0;
    }
}