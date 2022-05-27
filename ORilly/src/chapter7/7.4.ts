// オプション
interface Option<T>{
  class Some<T> implements Option<T>{
    constructor(private value: T) { }
    
  }
  class None implements Option<never>{}
}

