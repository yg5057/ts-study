// 타입 좁히기
// - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
//   타입을 상황에 따라 좁히는 방법을 이야기 함

// i)
type Person = {
  name: string;
  age: number;
};
// value => number : toFixed
// value => string : toUppercase
// value => Date : getTime
// value => Person: name은 age살입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // value가 Date의 Instance 인지 묻는것 => true / false 반환
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // 'age'라는 프로퍼티가 value라는 값에 있는지를 물음
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
