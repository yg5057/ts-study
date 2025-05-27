// 타입 추론

// i) 변수의 초가값을 기준으로 타입을 추론함
let a = 10; // number 타입(범용적)
let b = "hello"; // string 타입(범용적)

// ii)
let c = {
  id: 1,
  name: "이정현",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c; // 객체를 구조분해 할당 할때도 변수의 타입을 자동으로 추론함
let [one, two, three] = [1, "hello", true]; // 배열을 구조분해 할당해도 각각의 원소는 타입이 추론됨

function func(message = "hello") {
  // 기본값이 설정된 매개변수의 타입도 초깃값 기준 으로 추론
  return "hello";
} // 함수의 반환값도 타입추론 but 초기값x return문의 반환값 기준으로 타입 추론

// iii)
let d;
d = 10;
d.toFixed();
// d.toUpperCase();  // !오류 - 타입 : number

d = "hello";
d.toUpperCase();
// d.toFixed();  // ! 오류 - 타입: stirng

// ? 초기값없이 그냥 변수 선언시 -> 암묵적으로 any타입으로 추론됨
// ? 암묵적으로 추론된 any타입은 진화를 하게됨

// iiii) const 선언 상수
const num = 10; // number 리터럴 타입 추론
const str = "hello"; // string 리터럴 타입 추론
let arr = [1, "string"]; // (string | number) 인 유니온 타입 추론
