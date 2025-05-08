// 1. enum 타입 (열거형 타입) - ts에만 제공되는 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 enum
var Role;
(function (Role) {
    // enum 멤버에 숫자 값을 직접 할당하지 않아도 0부터 늘어나며 자동 할당 해줌
    // 자동 할당되는 값은 기본적으로 0부터 시작 하나, 이 값을 변경하고 싶다면 시작 위치에 값을 직접 할당해주면 됨
    // 그럼 자동으로 아래 멤버들은 1씩 증가된 값으로 할당됨
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
// 문자열 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 10, 관리자
    language: Language.korean, // 'ko'
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 11, 일반유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 12, 게스트
};
console.log(user1, user2, user3);
export {};
// todo: enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환된다.
