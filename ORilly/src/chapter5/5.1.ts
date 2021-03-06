// クラスと継承

import { url } from 'inspector'

// チェスのゲームを表す
// class Game {}

// チェスの駒
// class Piece {}

//駒の位置
// class Position {}s

// Pieceクラスに色と位置を追加
type Color = 'Black' | 'White'
type X = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' //横軸
type Y = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // 縦軸

class Position {
  constructor(private file: X, private rank: Y) {}
  distanceFrom(position: Position) {
    // 2つのコマの間の距離を計算するメソッド
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(9)),
    }
  }
}

abstract class Piece {
  // abstractで抽象クラスにして直接インスタンス化できないようにする
  protected position: Position
  constructor(private readonly color: Color, file: X, rank: Y) {
    this.position = new Position(file, rank)
  }
}

// 6種類の駒
class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

// 新しいゲームを始めるときに、チェス盤と駒を自動作成する

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // キング
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      // クイーン
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
      // ビショップ
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ]
  }
}

// 5.3 戻り値の型としてthisを使用する
const set = new Set()
set.add(1).add(2).add(3)
set.has(2)
set.has(4)

// class Set {
//   has(value: numbe): boolean {}

//   add (value:number):this{}

// }

// class MutableSet extends Set {
//   delete(value: number): boolean {}
//   add(value: number): boolean {}
// }

// 5.4 インターフェース
// インターフェースは型エイリアス同様に、型に名前をつけるものである。
// interface Sushi{
//   calories: number
//   salty: boolean
//   tasty:boolean
// }

// type Cake = {
//   calories: number
//   sweet: boolean
//   tasty:boolean
// }

type Food = {
  calories: number
  tasty: boolean
}

type Sushi = Food & {
  salty: boolean
}

type Cake = Food & {
  sweet: boolean
}

// 上と同じことをinterfaceを使ってもできる

interface Food1 {
  calories: number
  tasty: boolean
}

interface Sushi1 extends Food {
  salty: boolean
}

interface Cake1 extends Food {
  sweet: boolean
}

/*
 type(型,型エイリアス)とインターフェースの違い
 1. 型の方が右辺に任意の方をして出来る点で汎用的である
 2. インターフェースを拡張する場合にTSは拡張元のインターフェースが拡張先のインターフェースに割り当てが可能かどうかを確認する
 3. 同じスコープ内に同じ名前のインターフェースが複数存在する場合、それらは自動的にマージされる(宣言のマージ)
 */

// 1 インターフェースは形状でなければならない
type A = number
type B = A & string
interface C {
  hoge: string
}

interface D {
  good(x: number): string
  bad(x: number): string
}
// interface E extends D{ エラーが表示される
//   good(x: number|string): string
//   bad:(x:string):string
// }

// 宣言のマージ
interface F {
  foo: number
}
interface F {
  bar: string
}

// 5.4.2 実装
// implements

interface Animal {
  eat(food: string): void
  sleep(hours: number): void
}

class Panda implements Animal {
  eat(food: string): void {
    console.log(food)
  }
  sleep(hours: number): void {
    console.log(hours)
  }
}

// 5.7 ポリモーフィズム
// 関数や型と同様にクラスとインターフェースでもジェネリック型パラメーターをサポートしている。

//5.8 ミックスイン
// traitやmixinを自分で実装することができ、それにより多重継承をシュミレートし、役割指向プログラミングを行うことができる。
// is-aではなくcanやhas a関係を記述する

//5.9 デコレーター
// デコレーターはTSの実験的な機能の1つでクラス、クラスメソッド、プロパティ、メソッドパラメーターを使ってメタプログラミングを行うための簡潔な構文を提供している

//5.10 finalクラスをシュミレートする

//5.11 デザインパターン
//.1 ファクトリーパターン(何らかの型のオブジェクトを作成するための方法であり、どのような具体的なオブジェクトを作成すべきかの決定を、決めさせる)

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

// 靴のファクトリー
let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat()
      case 'boot':
        return new Boot()
      case 'sneaker':
        return new Sneaker()
    }
  },
}

//.2 ビルダーパターン (オブジェクトの構築とそのオブジェクトを実際に実装する方法を分離するためのもの)

// class RequestBuilder {}

// class RequestBuilder {
//   private url: string | null = null

//   setURL(url: string): this {
//     this.url = url
//     return this
//   }
// }

class RequestBuilder {
  private data: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  setURL(url: string): this {
    this.url = url
    return this
  }

  send() {
    // 略
  }
}
