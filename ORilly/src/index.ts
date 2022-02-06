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
console.log(d, h)

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

const sample: {
  readonly name: string
} = {
  name: 'ban',
}

console.log(sample)

type Cat = { name: string; purrs: boolean }
type Dog = { name: string; barks: boolean; wags: boolean }
type CatOrDogBoth = Cat | Dog
type CatAndDog = Cat & Dog

let aa: CatOrDogBoth = {
  name: 'Boonkers',
  purrs: true,
}

aa = {
  name: 'Diamond',
  barks: true,
  wags: true,
}

aa = {
  name: 'Donkers',
  barks: false,
  purrs: true,
  wags: true,
}

const bb: CatAndDog = {
  name: 'hoge',
  barks: true,
  purrs: false,
  wags: true,
}

console.log(aa, bb)
