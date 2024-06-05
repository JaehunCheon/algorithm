// 숫자 문자열과 영단어
function solution(s) {
  const arr1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const arr2 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = [];

  for (let i = 0; i < arr2.length; i++) {
    if (s.includes(arr2[i])) {
      answer.push(arr1[i]);
    } else if (s.includes(arr1[i])) {
      answer.push(arr1[i]);
    }
  }

  return Number(answer.join(""));
}

const s = "one4seveneight"; // 출력 1478

console.log(solution(s));
