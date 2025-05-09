// 1. any 타입
// ts에만 제공되는 특별한 타입, 특정 변수의 타입을 확실히 모를때 사용

// any 타입은 어떠한 타입 검사도 받지 않기 때문에
//  아무 타입의 값이나 범용적으로 담아 사용할 수 있고,
// 다양한 타입의 메서드도 마음대로 호출해서 사용해도 문제가 되지 않는다.
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// any 타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 다 할당할 수 있음.
// 따라서 다음과 같이 number 타입의 변수 num에 any 타입의 값 anyVar를 할당해도 문제가 발생하지 않음.
let anyVar2: any = 10;
anyVar2 = "hello";

let num: number = 10;
num = anyVar2;

// 2. unknown 타입
// unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입
// unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있음
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// but, 반대로는 안됨!
// unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없음!
let num2: number = 10;

let unknownVar2: unknown;
unknownVar2 = "";
unknownVar2 = 1;
unknownVar2 = () => {};
// num2 = unknownVar; // 오류 발생함!

// 또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없음.
let unknownVar3: unknown;
// unknownVar3 * 2 // 오류 발생함!

//만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면
// 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 한다.
if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
