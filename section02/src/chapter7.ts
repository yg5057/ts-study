// 1. void 타입
// void 타입은 아무런 값도 없음을 의미하는 타입으로,
// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용한다.
function func2(): void {
  console.log("hello");
}

// 물론 변수의 타입으로도 void를 지정할수 있지만,
// void 타입의 변수에는 undefiend 이외의 타입의 값은 담을 수 없음.
let a: void;
a = undefined;

// 그런데 만약 tsconfig.json에 엄격한 null 검사(strictNullChecks) 옵션을 해제(False)로 설정하면
// void 타입의 변수에 null 값도 단을 수 있음.

// "strictNullChecks: false" 일 경우
// let a1: void;
// a1 = undefined;
// a1 = null;

// 2. never 타입
// never 타입은 존재하지 않는, 불가능한 타입을 의미함.

// 무한루프를 도는 함수 처럼 ->
// 정상종료가 되지 않기 때문에 이 함수가 뭔가를 반환한다는 것 자체가 모순이고 불가능 할때 never타입을 사용함.
function func3(): never {
  while (true) {}
}

// 무한 루프 외에도 다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있음.
function func4(): never {
  throw new Error();
}

//변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 된다.
// let anyVar: any;
// let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;
