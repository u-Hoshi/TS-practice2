// import { HTMLButtonElement } from 'dom'

// ポリモーフィズム
function filter(array, f) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

// ジェネリック型パラメーター...複数の場所で型レベルの制約を強制するために使われるプレースホルダーの型。多相型パラメータとも呼ばれる

/* 
type Filter = {
  (array: number, f: (item: number) => boolean): number[]
  (array: string, f: (item: string) => boolean): string[]
}
↑をジェネリック型パラメータTを使って書き直すと
*/

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}
// この時のTはarrayに対して渡す型からTSが推論する TはFilterの型をパラメータ化する

const filter2: Filter = (array, f) => {
  const result = []
  result.push(array[0])
  return result
}
filter2([1, 2, 3], (_) => _ > 2)

filter2(['a', 'b'], (_) => _ !== 'b')

const names = [{ firstname: 'hoge' }, { firstname: 'foo' }, { firstname: 'bar' }]

filter2(names, (_) => _.firstname.startsWith('b'))

// ジェネリックの宣言場所
type Filter3 = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

type Filter4<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}

function filter3<T>(array: T[], f: (item: T) => boolean): T[] {
  f(array[0])
  return array
}

function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

// ジェネリックで型をつけると...
function map2<T, U>(array: T[], f: (item: T) => U): U[] {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

// ジェネリックの型推論
function map3<T, U>(array: T[], f: (item: T) => U): U[] {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

// ジェネリックを明示的にアノテートする場合は全部か無しか、特定のものだけものだけアノテートするのは不可能
map3<string, boolean>(['a', 'b', 'v'], (_) => _ === 'a')

// 制限付きポリモーフィズム
type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return { ...node, value: f(node.value) }
}

mapNode({ value: 'hoge' }, (_) => _)

// ジェネリック型のデフォルトの型
type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T
  type: string
}

// const buttonEvent: MyEvent<HTMLButtonElement> = {
// target: HTMLButtonElement,
// type: 'hoge',
// }
