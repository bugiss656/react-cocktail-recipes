

export const matchParams = (arr, param) => {
    for (let item of arr) {
      for (let key in item) {
        if (key === param) {
          return item[key]
        }
      }
    }
  }