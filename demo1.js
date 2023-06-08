const theObject = {
  'RDCCAY': {
    name: 'red crayon',
    brand: 'Crayola',
    color: 'red',
    onhand: 524
  },
  'RDCOHA': {
    name: 'red crayon',
    brand: 'Ohio Art',
    color: 'red',
    onhand: 264
  },
  'GNCCAY': {
    name: 'green crayon',
    brand: 'Crayola',
    color: 'green',
    onhand: 453
  },
  '5PKGCO': {
    name: 'green crayon, 5-pack',
    brand: 'Ohio Art',
    color: 'green',
    onhand: 15
  }
}

const str = JSON.stringify(theObject)
const manipulated = JSON.parse(str, (key, val) => {
    if (val?.brand === 'Ohio Art') {
        val.onhand = 0
    }

    return val
})

// console.log(manipulated)

const updatesToApply = (inputObj) => JSON.parse(
    JSON.stringify(inputObj),
    (key,val) => val.brand === 'Ohio Art' ?
      undefined : val
  )

console.log(updatesToApply(theObject))