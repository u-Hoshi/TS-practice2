// nullを返す
function ask() {
  return prompt('when is your birthday')
}

function parse(birthday: string | null): Date | null {
  if (!birthday) return null
  const date = new Date(birthday)
  // if (date) {
  //   console.info('date is', date.toISOString())
  // } else {
  //   console.error('not date')
  // }
  if (!isValid(date)) return null
  return date
}

function isValid(date: Date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
}

const date = parse(ask())
if (date) {
  console.info('date is', date.toISOString())
} else {
  console.error('not date')
}
