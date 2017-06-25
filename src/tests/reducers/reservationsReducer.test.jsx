import expect from 'expect'
var df = require('deep-freeze-strict')
import {reservationsReducer} from 'reservationsReducer'


  //test reservations reducer
  describe('reservationsReducer', () => {

    it('should clear reservations on cleareReservation', () => {
      var reservations = [
        {
          tbKey: 8,
          ownerName: 'Zacck Osiemo',
          time: '0900',
          dietary: 'no fish'
        },
        {
          tbKey: 9,
          ownerName: 'Zacck Osiemo',
          time: '0900',
          dietary: 'no fish'
        }
      ]

      const clearaction = {
        type: 'CLEAR_RESERVATIONS'
      };

      const result = reservationsReducer(df(reservations), df(clearaction));

      expect(result).toEqual([])
    })
    it('should set reservation data on addReservation', () => {
      //mock the table
      var reservation = {
        tbKey: 8,
        ownerName: 'Zacck Osiemo',
        time: '0900',
        dietary: 'no fish'
      };

      var addReservationAction = {
        type: 'ADD_RESERVATION',
        reservation
      };

      //call reducer
      var result = reservationsReducer(df([]), df(addReservationAction));

      //assert that reducer added a table to state
      expect(result[0]).toEqual(addReservationAction.reservation);
    });
    it('should remove reservation on removeReservation', () => {
      //mock the table
      var reservations = [{
        tbKey: 8,
        ownerName: 'Zacck Osiemo',
        time: '0900',
        dietary: 'no fish',
        resKey: 8
      },
      {
        tbKey: 8,
        ownerName: 'Me Osiemo',
        time: '0900',
        dietary: 'no fish',
        resKey: 10
      }
      ];

      var deleteReservationAction = {
        type: 'REMOVE_RESERVATION',
        id: 8
      };

      var result = reservationsReducer(df(reservations), df(deleteReservationAction));

      expect(result.length).toEqual(reservations.length - 1);;
    });
    it('should update reservation on updateReservation', () => {
      //mock the table
      var reservations = [{
        tbKey: 8,
        ownerName: 'Zacck Osiemo',
        time: '0900',
        dietary: 'no fish',
        resKey: 8
      }];

      var updates = {
        dietary: 'likes beef'
      };

      var updateReservationAction = {
        type: 'UPDATE_RESERVATION',
        id: 8,
        updates
      };

      var result = reservationsReducer(df(reservations), df(updateReservationAction));

      expect(result[0].dietary).toEqual(updates.dietary);
    })
  });
