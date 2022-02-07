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

// タプル
const aaa: [number] = [1]

// [名前、苗字、生まれ年]のタプル
// eslint-disable-next-line prefer-const
let bbb: [string, string, number] = ['queen', 'elizabeth', 10963]

// bbb = ['malcom', 'gladwell', 'ii', 2000] // 型 'string' を型 'number' に割り当てることはできません。ts(2322)

console.log(aaa, bbb)

/* タプルは省略可能な要素もサポートしている。オブジェクト同様に「？」を「オプション」という意味で使用する */

// 鉄道運賃の配列。方向によって異なる場合がある
const trainFaraes: [number, number?][] = [[3, 75], [8.25], [10, 55]]
// ↑は↓と同等である
const moreTrainFares: ([number] | [number, number])[] = [[4, 2], [3]]

console.log(trainFaraes, moreTrainFares)

/* またタプルは可変長の要素もサポートしている。これを使用すると最小限の長さについて制約を持ったタプルを型付けできる */

// 少なくとも1つの要素を持つ、文字列のリスト
const friends: [string, ...string[]] = ['sara', 'hoge']

// 不均一なリスト
const list: [number, boolean, ...string[]] = [1, false, 'a', 'b']

console.log(friends, list)

/* タプルによって型付けするリストの長さを限定することができる。従来の配列より安全を得ることができる */
