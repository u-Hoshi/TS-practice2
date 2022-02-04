console.log('hello ts')

const a = 1 + 2
const b = a + 3
// let e = [3, 4] + 3
const c = {
  apple: a,
  banana: b,
  // orange: e,
}
const d = c.apple * 4

//es2020以上であれば使える
// const f = 1234n + 5678n //bigint

// symbol
const h = Symbol('a')
console.log(h)

const j = {
  a: 'x',
}
console.log(j)

// let obj: {
//   [key: string]: string // インデックスシグネチャ
// } // オブジェクトリテラル

// OK
// obj = {
//   id: '123',
//   token: 'hogetoken',
//   name: 'fuganame',
// }
// console.log(obj)
