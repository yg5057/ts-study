// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법 :
//  - JS : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 해줌
//  - TS : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 해줌
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}
introduce("이정환", 27, 175);
introduce("이정환", 27); // tall을 선택적 매개변수로 적어주면 매개변수를 하나만 줘도 오류가 안남

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
