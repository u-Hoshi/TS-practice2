//6.1.1 サブタイプとスーパータイプ

type ExitstingUser = {
  id: number
  name: string
}

type NewUser = {
  name: string
}

function deleteUser(user: { id?: number; name: string }) {
  delete user.id
}

const existingUser: ExitstingUser = {
  id: 123,
  name: 'ima',
}

deleteUser(existingUser)

type LegacyUser = {
  id: string
  name: string
}

const legacyUser: LegacyUser = {
  id: '232',
  name: 'xin',
}

// deleteUser(legacyUser)

// 関数の変性
function isBig(n: number) {
  if (n >= 100) {
    return true
  }
}

// 高度なオブジェクト型

type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      firends: {
        firseName: string
        lastName: string
      }[]
    }
  }
}

type FriendList = APIResponse['user']['friendList']
// キーを指定して型を取得することができる

type Friend = FriendList['firends'][number]
//[number]はキーをして配列型にアクセスするための方法

//6.3.1.2 keyof演算子
// keyofを使うとオブジェクトの全てのキーを文字列リテラル型の合併として取得できる
type ResponseKeys = keyof APIResponse
type UserKeys = keyof APIResponse['user']

// レコード型
type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = WeekDay | 'Sat' | 'Sun'

// const nextDay: Record<WeekDay, Day> = {
//   Mon: 'Tue',
// }

// マップ
// const nextDay2: { [K in WeekDay]: Day } = {
//   Mon: 'Tue',
// }

// type MyMappedType = {
//   [Key in UnionType]: valueType
// }

type Record2<K extends keyof any, T> = {
  [P in K]: T
}

// コンパニオンオブジェクト
type Unit = 'EUR' | 'GBR' | 'JPY' | 'USD'

type Currency = {
  unit: Unit
  value: number
}

const Currency = {
  from(value: number, unit: Unit): Currency {
    return {
      unit: unit,
      value,
    }
  },
}

// ユーザー定義型ガード
// 頻出頻度高そう
// function isString(a: unknown): boolean {
//   return typeof a === 'string'
// }

isString('a')
isString([7])

function parseInput(input: string | number) {
  let formattedInput: string
  if (isString(input)) {
    formattedInput = input.toUpperCase()
  }
}

function isString(a: unknown): a is string {
  return typeof a === 'string'
}

// 条件型
type isString<T> = T extends string ? true : false
//  「T extends string」では「Tはstringのサブタイプか？を確認している」

// 分配条件型
type ToArray<T> = T[]
type A = ToArray<number>
type B = ToArray<number | string>

// inferキーワード
type ElementType<T> = T extends unknown[] ? T[number] : T
type C = ElementType<number[]>

type ElementType2<T> = T extends (infer U)[] ? U : T
type D = ElementType2<number[]>
