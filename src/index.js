module.exports = function reverse (n) {
  let numArr = n.toString().split('').filter(i => Number(i) >= 0)
  let res = []
  for (let i of numArr) res.unshift(i)
    return res.join('')
}
