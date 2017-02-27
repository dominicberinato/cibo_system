import expect from 'expect'
import {Availability} from 'Availability'

describe('<Availability/>', () => {
  it('should exist', () => {
    expect(Availability).toExist();
  })

  it('should list Total Tables, Available Tables,Booked',() => {
    expect(9).toEqual(1);
  })
})
