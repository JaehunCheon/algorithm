// 두 개 뽑아서 더하기

function solution(numbers) {
    let arr = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){
            let sum = numbers[i]+numbers[j];
            if(!arr.includes(sum)) arr.push(numbers[i]+numbers[j]);
        }
    }
    return arr.sort((a, b) => a - b);
}
