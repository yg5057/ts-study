// 타입 단언

// i)
type Person = {
  name: string;
  age: number;
};

let person1 = {} as Person;
person1.name = "이정환";
person1.age = 27;

// ii)
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "bronw",
  breed: "진도",
} as Dog;

//  타입 단언의 규칙
//  값 as 단언 <- 단언식
//  A as B
//  A가 B의 슈퍼타입 이거나
//  A가 B의 서브타입 이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// iii) 다중단언
// let num3 = 10 as string;  //! 오류 발생 - number 와 string은 서로 겹치는 타입들이 아니기 때문에

// ? 중간에 unknown을 끼고 '다중단언'을 하면
// ? 다중이 안되는 타입끼리도 타입 단언을 할 수 있음 but 추천 하지는X
let num3 = 10 as unknown as string;

// iv) const 단언
// 변수를 선언했을 때 const로 선언한 것 과 동일한 효과를 보도록 만들어주는 단언
let num = 10 as const;

// 객체타입과 활용할때 활용도가 있음
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// cat.name = "";

// v) Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

const len: number = post.author!.length;
// '!': non-null단언 연산자 -> author의 값이 null 이거나 undefined가 아니라고 단언해주는것
