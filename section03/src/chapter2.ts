// 기본타입 간의 호환성

// 1. Unknown 타입 (전체 집합)
// unknown 타입은 타입 계층도의 최 상단에 위치함. -> 즉, 모든 타입의 슈퍼타입
// 결국 unknown 타입은 모든 타입을 부분집합으로 갖는 타입스크립트 전체 집합
function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown
}

// 2. never 타입 (공집합 타입)
// never 타입은 타입 계층도에서 가장 아래에 위치함. -> 즉, 공집합을 뜻하는 타입
// 따라서 never 타입에 해당하는 값은 말 그대로 아무것도 없음.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// 3. void 타입 (공집합 타입)
// void 타입은 undefined 타입의 슈퍼타입임
// 따라서 반환값을 void로 선언한 함수에서 undefined을 반환 해도 오류가 발생하지 않음.
// undefined 타입은 void 타입의 서브 타입이므로 업캐스팅이 가능하기 때문.
function voidExam() {
  function voidFucn(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

// 4. any 타입 (치트키)
// any 타입은 사실상 타입 계층도를 완전히 무시함
// -> 뭐든지 얘외, 모든 타입으 슈퍼타입이 될 수 도 있고 모든 타입의 서브타입이 될 수 도 있음.
function anyExam() {
  let unknowVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknowVar; // 자기한테 오는 다운캐스팅도 가능
  undefinedVar = anyVar; // 자기가 다운캐스팅되는 것도 가능
  //neverVar = anyVar;   // 오류 발생!! -> never타입은 순수한 공집합이기 때문에 never타입의 변수에는 그 어떠한 것도 다운캐스팅 할 수 없음.
}
