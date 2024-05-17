// 가운데 글자 가져오기

function solution(s) {
  let val = s.length / 2;
  if (s.length % 2 === 1) {
    val = val - 0.5;
    return s[val];
  } else if (s.length % 2 === 0) {
    val = val - 1;
    return s[val] + s[val + 1];
  }
}

const s = "abce";

console.log(solution(s));
