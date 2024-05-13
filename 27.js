// 핸드폰 번호 가리기
function solution(phone_number) {
    const pn = phone_number;
    let arr = [];
    for(let i=0; i<pn.length; i++){
        if(i<pn.length-4){
        arr[i] = "*";
        } else{
            arr[i] = pn[i];
        }
        
    }
    
    return arr.join("");
}

const phone_number = "01033334444";

console.log(solution(phone_number));