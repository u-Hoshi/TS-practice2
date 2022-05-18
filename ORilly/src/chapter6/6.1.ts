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
