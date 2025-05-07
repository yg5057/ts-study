// [ number 타입 ]
let num1 = 123; // 이런 문법을 '타입 주석', 'type annotation'이라고 함.
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity; // 양의 무한대
let num6 = -Infinity; // 음의 무한대
let num7 = NaN;
// number 타입으로 정의한 변수에는 number 타입을 제외한 값 할당 불가❌
// num1 = 'hello'; // ❌
// number 타입에 사용할 수 없는 메서드도 사용 불가❌
// num1.toUpperCase(); // ❌
// [ string 타입 ]
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${str1}`;
// [ boolean 타입 ]
let bool1 = true;
let bool2 = false;
//  [ null 타입 ] - 오직 null 값만 포함하는 타입
let null1 = null;
//  [ undefined 타입 ] - 오직 undefined만 포함하는 타입
let unde1 = undefined;
// [ null 값을 다른 타입의 변수에 할당 ]
// let numA: number = null;
// 원래 ts에서는 불가능 but -> tsconfig에 "strictNullChecks" 옵션 false로 설정하면 가능!
// [ 리터럴 타입 ] - 딱 하나의 값만 포함하는 타입 (값 = 타입)
let numA = 10; // numA에는 10 이외의 값을 저장할 수 없게 됨
let strA = "hello";
let boolA = true;
let boolB = false;
export {};
// 문자열이나 불리언 타입의 값도 모두 리터럴 타입으로 만들 수 있음
