import { runMain } from 'module'

// 関数
function add(a: number, b: number) {
  return a + b
}

function greet(name: string) {
  return 'hello' + name
}

const greet2 = function (name: string) {
  return 'hello' + name
}

const greet3 = (name: string) => {
  return 'hello' + name
}

const greet4 = (name: string) => 'hello' + name

// パラメータ：関数が実行されるために必要なデータ 仮パラメータとも呼ばれる
// 引数：関数を呼び出すときに渡すデータ 実パラメータとも呼ばれる

// オプションパラメータ オブジェクト型やタプル型と同様に「？」を使うことで省略可能と指定することができる

const log = (message: string, userId?: string) => {
  const time = new Date().toLocaleDateString()
  console.log(time, message, userId || 'Not signed in')
}

// デフォルトパラメータ これは呼び出しがわがパラメータを渡す必要がない点で意味的にはパラメータを省略することが可能
const log2 = (message: string, userId = 'Not signed in') => {
  const time = new Date().toLocaleDateString()
  console.log(time, message, userId || 'Not signed in')
}

type Context = {
  appId?: string
  userId?: string
}

const log3 = (message: string, context: Context = {}) => {
  const time = new Date().toLocaleDateString()
  console.log(time, message, context.userId || 'Not signed in')
}

// レストパラメータ
const sum = (numbers: number[]) => {
  return numbers.reduce((total, n) => total + n, 0)
}
sum([3, 4])

const sumVariadicSafe = (...numbers: number[]) => {
  return numbers.reduce((total, n) => total + n, 0)
}
sumVariadicSafe(4, 5, 7)

// thisの型付け
// thisはメソッドの呼び出し時にドット(.)の左側にあるものの値を取る、というのが一般的
const x = {
  a() {
    return this
  },
}
x.a() // この場合はオブジェクトxを取る

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

fancyDate.call(new Date())
// thisは関数の宣言方法ではなく、関数の呼び出し方によって変わる

// ジェネレーター
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

const fibonachGenerator = createFibonacciGenerator()
fibonachGenerator.next()

function* createNumbers(): Generator<number> {
  let n = 0
  while (1) {
    yield n++
  }
}

// const numbers = createNumbers()
// numbers.next()

// イテレーター

const numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  },
}

// 呼び出しシグネチャ
type Great = (name: string) => string

type Log4 = (message: string, userId?: string) => void

const log4: Log4 = (message, userId = 'not signed in') => {
  const time = new Date().toISOString()
  console.log(time, message, userId)
}

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

times((n) => console.log(n), 4)

// オーバーロードされた関数の型

// 呼び出しシグネチャの省略記法
type log5 = (message: string, userId?: string) => void

// 完全な呼び出しシグネチャ
type log6 = { (message: string, userId?: string): void }

// オーバーロードされた関数＝複数の呼び出しシグネチャを持つ関数

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

const reserve: Reserve = (from, to, desination) => {
  console.log(from, to, desination)
}
