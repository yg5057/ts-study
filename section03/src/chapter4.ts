// 1. 대수타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
//    ->  합집합 타입과 교집합 타입이 존재함

// i) 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: ""
// }  // 오류발생! -> 합집합 밖에 있는 타입

// 2. 교집합타입 - Intersection 타입
let variables: number & string;

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;

let Intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
  // 두 타입의 모든 프로퍼티를 가지고 있어야함 하나라도 빼먹으면X
};
