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
