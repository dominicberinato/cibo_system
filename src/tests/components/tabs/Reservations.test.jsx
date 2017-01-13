import expect from 'expect'

import {Reservations} from 'Reservations'

describe('Reservations', () => {
  it('should exist', () => {
     expect(Reservations).toExist();
  });

  describe('Book', () => {
    it('should list all the tables available', () =>{
      expect(2).toEqual(1);
    });

    it('should allow time of booking to be selected', () =>{
      expect(1).toEqual(2);
    });

    it('should allow input of guest name', () => {
      expect(2).toEqual(4);
    });

    it('should allow input of number of guests', () => {
      expect(0).toEqual(5);
    });
    it('should allow input of guest contacts', () => {
      expect(3).toEqual(7);
    });

    it('should allow prepayment', () => {
      expect(7).toEqual(9);
    });

    it('should allow input of dietary', () => {
      expect(8).toEqual(45);
    });

    it('should allow selection', () => {
      expect(7).toEqual(4);
    });
  });

  describe('Third Party Reservations', () => {
    it('should expose api to check Reservations', () => {
      expect(8).toEqual(10);
    });

    it('should control availability in real', () => {
      expect(3).toEqual(0);
    });
  });

  describe('Hostess Interface', () => {
    it('should record table stats', () => {
      expect(8).toEqual(5);
    });

    it('should allow showing of Table Bill', () => {
      expect(9).toEqual(0);
    });

    it('should allow walk ins', () => {
      expect(8).toEqual(0);
    });

    it('should join and break tables to cover demand', () => {
      expect(0).toEqual(9);
    });
  });

  describe('Reservations Reports', () => {
    it('should show real time bookings', () => {
      expect(0).toEqual(9);
    });
    it('should show real time availability reports', () => {
      expect(9).toEqual(8);
    });
    it('should show cancellations', () => {
      expect(0).toEqual(9);
    });

    it('should show Busines forecast', () => {
      expect(9).toEqual(1);
    })
  })
})
