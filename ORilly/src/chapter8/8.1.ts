// 非同期
// コールバック地獄
async1((err1, res1) => {
  if (res1) {
    async2(res1,(err2, res2) => {
      if (res2) {
        async3(res1,(err3, res3) => {
          2f (res2) {
          ///
          }
        })
      }
    })
  }
})

// async await

function getUser() {
  getUserID(18)
    .then(uesr => getLocation(user))
    .then(location => console.info("got location", location))
    .catch(error => console.error(error))
    .finally(() => console.info("finish"))
}
// ↑↓同義
async function getuUser() {
  try {
    let user = await getUser(18)
    let location = await getLocation(user)
    console.info("got location", location)

  } catch {
    error => console.error(error)
  } finally {
    console.info("finish")
  }
}

//
interface Emitter{
  emit(channel: string, value: unknown): void
  on(channel:string,f:(value:unknown)=>void):void
}