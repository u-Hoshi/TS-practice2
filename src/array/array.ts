export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  console.log(colors)

  const even: Array<number> = [3, 4, 5]
  even.push(3)
  console.log(even)

  const ids: (string | number | boolean)[] = ['ddd', 33443, true]
  console.log(ids)

  const hoge: [number, string] = [3000, 'ok']
  console.log(hoge)

  const bar: [string, ...string[]] = ['koga', 'bar']
  bar.push('hoge')
  console.log(bar)
}
