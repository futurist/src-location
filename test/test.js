var expect = require('chai').expect
var lib = require('../')

describe('locationToIndex', function() {
  it('within range', function() {
    var src = 'var a=1;\r\n2\n3\r4var b=2;'
    expect(lib.locationToIndex(src, 4, 2)).equal(15)
  })
  it('out of range', function() {
    var src = 'var a=1;\r\n2\n3\r4var b=2;'
    expect(lib.locationToIndex(src, 14, 2)).equal(24)
  })
})

describe('indexToLocation', function() {
  it('within range', function() {
    var src = 'var a=1;\r\n2\n3\r4var b=2;'
    expect(lib.indexToLocation(src, 15)).deep.equal({line: 4, column: 2})
  })
  it('out of range', function() {
    var src = 'var a=1;\r\n2\n3\r4var b=2;'
    expect(lib.indexToLocation(src, 115)).deep.equal({line: 4, column: 9})
  })
})
