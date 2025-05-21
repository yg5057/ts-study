// 1. 객체 타입의 호환성
// -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?

// 예제1
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

// Animal 타입이 Dog 타입의 슈퍼타입이기 때문!
// 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따르기 때문!

// 예재2
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입 ts",
  price: 33000,
  skill: "typescript",
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

// Book 타입은 ProgrammingBook 타입의 슈퍼타입. -> 이유는 위 예제와 동일

// 2. 초과 프로퍼티 검사
let book2: Book = {
  name: "한입 ts",
  price: 33000,
  // skill: "typescript",   //! 오류발생 -> 초과프로퍼티 검사가 발동해서 그럼
};

// ? 초과 프로퍼티 검사 :
// ?      - 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능
// ?      - 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막음

// ! 따라서 위 코드는 Book 타입에 정의되지 않은
// ! skill 프로퍼티를 갖는 객체를 할당하려고 했으므로
// ! 초과 프로퍼티 검사가 실패해 오류가 발생하고 있는 상황.

// * 이런 초과 프로퍼티 검사는 단순히 변수를 초기화 할 때, 객체 리터럴을 사용하지만 않으면 발생하지 않음.
// * 따라서 다음과 같이 값을 별도의 다른 변수에 보관한 다음 -> 변수 값을 초기화 값으로 사용하면 발생하지 않는다.
let book3: Book = programmingBook; // 앞서 만들어둔 변수

// 초과 프로퍼티 검사는 함수의 매개변수에도 동일하게 발생함.
function func(book: Book) {}
func({
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

// 이때에도 역시 검사를 피하고 싶다면 다음과 같이 변수에 미리 값을 담아둔 다음 변수값을 인수로 전달하면 됨.
func(programmingBook);
