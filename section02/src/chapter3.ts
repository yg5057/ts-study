// 1. 객체 타입을 정의하는 방법
// 1.1. object 타입
// let user: object = {
//   id: 1,
//   name: "이정환",
// };
// user.id;  // 점 표기법으로 특정 프로퍼티에 접근하려고 하면 오류발생
// object 타입에 'id'프로퍼티가 없다고 뜸
// -> 이유는 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입이기 때문
// 변수 user에 저장된 객체의 구조를 그대로 타입으로 만들고 싶다면 -> "객체 리터럴 타입"을 사용해야함

// 1.2. 객체 리터럴 타입
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user.id;
// 객체의 타입을 정의할 때에는 object 보다는 객체 리터럴 타입을 사용하는게 좋다.

// ex1)복습 - 아래 객체의 타입을 객체 리터럴 타입으로 정의 하기
// let dog = {
//   name: "돌돌이",
//   color: "brown",
// };

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};
// Ts는 '객체의 타입을 정의할 때 프로퍼티를 기준으로 객체의 구조를 정의 하듯 타입을 정의함
// -> 이런 특징을 '구조적 타입 시스템' 이라고 부름'
// 마치 name과 color가 있는 객체는 '강아지 타입'이야 라고 보는 것과 비슷함!

// 2. 선택적 프로퍼티(optional property)
let user2: {
  id?: number; // 있어도 되고 없어도 되는 **선택적 프로퍼티** 일 경우
  name: string;
} = {
  id: 1,
  name: "이정환",
};
user2 = {
  name: "홍길동",
};
// ?주의: 선택적 프로퍼티 존재시 value 타입은 반드시 number여야 함.

// 3. 읽기전용 프로퍼티(readonly property)
let user3: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};
// user3.name = "dskfd"; // Readonly 프로퍼티의 값을 수정하려고 하면 오류가 발생
