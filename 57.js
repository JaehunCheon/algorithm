// 모의고사
function solution(answers) {
    let answer = [];
    const num1 = [1, 2, 3, 4, 5]
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let count = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === num1[i]){
            count[0]++;
        }
        if(answers[i] === num2[i]){
            count[1]++;
        }
        if(answers[i] === num3[i]){
            count[2]++;
        }
    }
    
    let max = Math.max(count[0], count[1], count[2]);
    
    for(let i = 0; i < count.length; i++){
        if(max === count[i]){ answer.push(i+1) }
    }
    
    return answer;
}