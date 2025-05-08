// 이렇게 만든 타입 별칭은 다음과 같이 변수의 타입을 정의할 때 타입 주석과 함께 이용할 수 있음
let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
function test() {
}
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil: "bz",
};
let countryNumberCodes = {
    Korea: 410,
    Us: 840,
    Uk: 826,
};
export {};
