interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアス
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice

const mabodon: MaboDon = {
  calories: 300,
  spicyLevel: 8,
  gram: 300,
}

// インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊ジャンプ',
  cycle: 'daily',
}

type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 3490,
  title: 'hoge',
  theme: 'foo',
}

class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }
  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}

const popularComic = new Comic(200, '鬼滅', '2016')
console.log(popularComic.getPublishYear())
