export default function objectSample(): void {
  let country: {
    language: string
    name: string
  } = {
    language: 'japanense',
    name: 'japan',
  }

  console.log(country)

  country = {
    language: 'en',
    name: 'america',
  }
  console.log(country)

  const uHoshi: {
    age: number
    lastname: string
    readonly firstname: string
    gender?: string
  } = {
    age: 20,
    lastname: 'hoge',
    firstname: 'foo',
  }

  uHoshi.age = 200
  uHoshi.lastname = 'bar'
  uHoshi.gender = 'male'

  console.log(uHoshi)

  const capitals: {
    [countryName: string]: string
  } = {
    japan: 'tokyo',
  }
  console.log(capitals)
}
