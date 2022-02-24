// クラスと継承

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
