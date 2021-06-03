export default function genericsBasicSample() {
  //ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(stringReduce(['hoge', 'goo', 'foo'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(numberReduce([1000, 493, 200], 100))

  type GenericRudece<T> = {
    (array: T[], initialValue: T): T
  }

  const genericString: GenericRudece<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(genericString(['React', 'TS', 'SQL'], ''))
}
