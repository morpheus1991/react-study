//불변성

const value = {name:'alsgur'}
const nextValue = {...value}; // 그 안에다가 이거 쏟아부어.
console.log(value===nextValue);
// ... 스프레드 연산자

// 이거 왜씀?
