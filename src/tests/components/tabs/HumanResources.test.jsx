import expect from 'expect'

import {HumanResources} from 'HumanResources'

describe('Human Resources', () => {
  it('should exist', () => {
    expect(HumanResources).toExist()
  });

  describe('Employees', () => {
    it('should allow loading of team member with attributes on spec', () => {
      expect('spec').toEqual('employees');
    });

    it('should allow Document managenemt as listed on spec', () => {
      expect('document').toEqual('Management');
    });

    describe('Annual Leave' , () => {
      it('should list the holiday calendar', () => {
        expect('list').toEqual('Annual ')
      });

      it('should send automated recommendation of holiday time to managers', () => {
        expect('automated').toEqual('holiday');
      });
    });

    it('should allow real time hour tracking', () => {
      expect('staying').toEqual('red');
    });

    it('should allow overtime tracking', () => {
      expect('overtime').toEqual('res');
    });

    it('should allow allow tips management and splitting', () => {
      expect(0).toEqual(88);
    });

    it('should allow recording of biometric info', () => {
      expect(89).toEqual(878);
    });

    it('should allow tracking of sick call ins', () => {
      //use 6 week rule
      expect(876).toEqual(6788);
    });

    it('should allow staff training based on feedback', () => {
      expect('legit').toEqual(8789);
    });
  });

  describe('Rosters', () => {
    it('should shift team members based on ...', () => {
      //leave days
      //expected covers on bookings
      //average cancellations
      //average no shows

      expect('cancellation').toEqual('noshow');
    });
  });

  describe('HR Management', () => {
    it('should allow  payroll functions', () => {
      expect('pay').toEqual('roll');
    });

    it('should allow holiday bookings', () => {
      expect('holiday').toEqual('bookings')
    });

    it('should allow storage of staff data including biometrics', () => {
      expect('storage').toEqual('biometric');
    });

    it('should store documents online', () => {
      expect('online').toEqual('uouwo');
    });
  });

})
