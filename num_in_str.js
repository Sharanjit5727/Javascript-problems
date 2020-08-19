function numInStr(arr) {
    let newArr = []
    let re = /[0-9]/g
  
    for (let i = 0; i < arr.length; i++) {
      if (re.test(arr[i])) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  
  
  console.log(numInStr(["1a", "a", "2b", "b"])) //➞ [1a, 2b]
  
  console.log(numInStr(["abc", "abc10"])) //➞ [abc10]
  
  console.log(numInStr(["abc", "a10bc","ab10c", "bcd"])) //➞ [ab10c, a10bc] (PROBLEM IS HERE)
  
  console.log(numInStr(["this is a test", "test1"])) //➞ [test1]