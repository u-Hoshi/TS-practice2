// 例外をスローする
function parse(birthday: string): Date {
  const date = new Date(birthday)
  if (!isValid(date)) {
    throw new RangeError('Enter a date in the form YYYYY/MM/DD')
  }
  return date
}

// try {
//   const date = parse(ask())
//   console.info("date is ",date?.toISOString())

// } catch (e) {
//   console.error(e)
// }

try {
  const date = parse(ask())
  console.info('date is ', date?.toISOString())
} catch (e) {
  if (e instanceof RangeError) {
    console.error(e)
  } else {
    throw e
  }
}
