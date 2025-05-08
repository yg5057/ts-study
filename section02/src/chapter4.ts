// 1. 타입 별칭
//  타입 별칭을 사용하면 변수 선언하듯 타입을 별도로 정의 할 수 있음
//  "type 타입_이름 = 타입" 형태로 타입을 정의
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 이렇게 만든 타입 별칭은 다음과 같이 변수의 타입을 정의할 때 타입 주석과 함께 이용할 수 있음
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능
// type User2 = {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };

// type User2 = {}

// 그러나 스코프가 다르다면 다음과 같이 중복된 이름으로 여러개의 별칭을 선언해도 상관 없다.
type User2 = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function test() {
  type User2 = string;
}

// 2. 인덱스 시그니처
// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
//    (... 약 100개의 국가)
//   Brazil: string;
// };

// let countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
//    (... 약 100개의 국가)
//   Brazil: "bz",
// };

// ?: 이런식으로 타입별칭에도 모든 프로퍼티의 키를 넣어줘야 하므로 다음과 같이 작성한다.
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

// 만약 국가 코드를 숫자로 보관하는 객체가 하나 더 필요하다고 하면 그때의 타입은 다음과 같이 정의하면 됩니다.
type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  Us: 840,
  Uk: 826,
};
