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