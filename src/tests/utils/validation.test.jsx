import * as validations from 'validation'
import expect from 'expect'


describe('Validation Rules',  () => {
  it('should exist', () => {
    expect(validations).toExist();
  });

  it('should return `Required` if value is undefined', () => {
    var res =  validations.required(undefined);
    expect(res).toEqual('Required')
  })
})
