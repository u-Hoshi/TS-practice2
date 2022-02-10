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
