//型アサーション
function formatInput(input: string) {
  console.log(input)
}

function getUserInput(): string | number {
  console.log('hoge')
}

const input = getUserInput()

formatInput(input as string)

formatInput(<string>input)

// 非nullアサーション(!)
/*
type Dialog = {
  id?: string
}
function closeDialog(dialog: Dialog) {
  if (!dialog.id) {
    return
  }
  setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id))) // (parameter) dialog: Dialog 型 'string | undefined' の引数を型 'string' のパラメーターに割り当てることはできません。型 'undefined' を型 'string' に割り当てることはできません。ts(2345)
}

function removeFromDOM(dialog: Dialog, element: Element) {
  element.parentNode.removeChild(element) // オブジェクトは 'null' である可能性があります。ts(2531)
  delete dialog.id
} 
*/

//改善後
// type Dialog = {
//   id?: string
// }
// function closeDialog(dialog: Dialog) {
//   if (!dialog.id) {
//     return
//   }
//   setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id!)!))
// }

// function removeFromDOM(dialog: Dialog, element: Element) {
//   element.parentNode!.removeChild(element)
//   delete dialog.id
// }

type VisibleDialog = { id: string }
type DestroyedDialog = {}
type Dialog = VisibleDialog | DestroyedDialog
// 合併して書き直すと

function closeDialog(dialog: Dialog) {
  if (!('id' in dialog)) {
    return
  }
  setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id)!))
}

function removeFromDOM(dialog: VisibleDialog, element: Element) {
  element.parentNode!.removeChild(element)
  // delete dialog.id 'delete' 演算子のオペランドはオプションである必要があります。 結局オプション(?)にする必要がある？
}

// 明確な割り当てアサーション
const userId!: string // 「!」を使うことでuserIdを使うときには必ず値が割り当てられることをTSに伝える
fetchUser()

function fetchUser() {
  // userId = globalCache.get('userId') // globalCacheは必ずstring型の値を返すメソッドとする
}
