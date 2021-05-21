export default class World {
  // クラスで使うプロパティ
  message: string

  //コンストラクタ（初期化）
  constructor(message: string) {
    this.message = message
  }

  //外部から呼び出せるメソッドを定義
  public sayHello(elem) {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
