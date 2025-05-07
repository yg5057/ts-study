// [ 배열 타입 ]
//  변수명 뒤에 타입 주석의 시작을 의미하는 콜론(:)을 작성한 다음 배열요소타입[] 형식으로 배열 타입을 정의함
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"]; // 문자열을 담는 배열의 타입 정의
let boolArr = [true, false, true]; // 제네릭 방식
// [ 배열에 들어가는 요소들의 타입이 다양할 경우 ]
// let multiArr = [1, "hello"]; -> 이런 배열일 경우는 아래와 같이 유니온 타입으로 작성
let multiArr = [1, "hello"];
// [ 다차원 배열의 타입을 정의하는 방법 ]
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// [ 튜플 타입 ] - 튜플 : 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
export {};
