import * as validations from 'validation'
import expect from 'expect'


describe.only('Validation Rules',  () => {
  it('should exist', () => {
    expect(validations).toExist()
  })

  it('should return `Required` if value is undefined', () => {
    var res =  validations.required(undefined)
    expect(res).toEqual('Required')
  })

  it('should return `Number expected` if value is not a number', () => {
    var res = validations.isnumber('abc')
    expect(res).toEqual('Number Expected')
  })

  it('should return `Invalid text provided` if value is not a String', () => {
    var res = validations.istext(34)
    expect(res).toEqual('Invalid text provided')
  })
})
