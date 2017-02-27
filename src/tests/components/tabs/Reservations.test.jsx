import React from 'react'
import expect from 'expect'
import {mount} from 'enzyme'
import {Reservations} from 'Reservations'
import {Availability} from 'Availability'
import {MakeReservation} from 'MakeReservation'

describe('Reservations', () => {

  it('should exist', () => {
     expect(Reservations).toExist();
  });
  var tables =
  [
      {
        tbname:6,
        tbcapacity:8,
        tbKey: 6
      },
      {
        tbname: 7,
        tbcapacity: 9,
        tbKey:7
      }
  ];

  var reservations = [];

  describe('Allow Bookings, Show Availability, Show Bookings', () => {
  

  });

  describe('Third Party Reservations', () => {
    it('should expose api to check Reservations', () => {

    });

    it('should control availability in real', () => {

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
      expect(8).tol(0);
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
