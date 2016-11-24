const LF = '\n'
const CR = '\r'

function locationToIndex (src, line, column) {
  let index = 0  // total index
  let count = 1  // line count
  for (let c, i = 0; count < line && i < src.length; i++) {
    index++
    c = src[i]  // cur char
    if (c == LF || c == CR) {
      count++
      if (c == CR && src[i + 1] == LF) {
        // it's dos newline \r\n
        i++
      }
    }
  }
  return index + (column || 0)
}


function indexToLocation (src, index) {
  let line = 1  // total idx
  let count = 0  // line count
  let startIndex = 0
  for (let c, i = 0; count < index && i < src.length; i++) {
    count++
    c = src[i]  // cur char
    if (c == LF || c == CR) {
      line++
      startIndex = count
      if (c == CR && src[i + 1] == LF) {
        // it's dos newline \r\n
        i++
      }
    }
  }
  return {line: line, column: count - startIndex}
}

module.exports = {
  indexToLocation,
  locationToIndex
}
