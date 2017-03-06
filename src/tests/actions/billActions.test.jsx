import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'
import * as actions from 'billActions'
import {login} from 'authActions'
import shortid from 'shortid'


//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('billActions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  })

  describe('sync', () => {

    it('should generate addBill Action', () =>{
       //mock an action
       var bill = {
         billKey: 1232,
         tbKey:2,
         tbname: 2,
         resOwner: 'Isaac',
         bill: 30
       };

       //action we expect
       var addBillAction = {
         type: 'ADD_BILL',
         bill
       };

       var result = actions.addBill(bill);

       expect(result).toEqual(addBillAction);
    });

    it('should generate addItem Action', () => {
      //mock an action
      var bills = [{
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      }];

      const updates = {
        bill: 40,
        items: [
          '20'
        ]
      };

      var addItemAction = {
        type: 'ADD_ITEM',
        billId: bills[0].billKey,
        updates
      };

      //lets work on a result
      var result = actions.addItem(bills[0].billKey, updates);

      expect(result).toEqual(addItemAction);
    });

    it('should generate removeItem Action', () => {
      //mock an action
      var bills = [{
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      }];

      const updates = {
        bill: 40,
        items: [
          '20'
        ]
      };

      var removeItemAction = {
        type: 'REMOVE_ITEM',
        billId: bills[0].billKey,
        updates
      };

      //generate a result
      var result = actions.removeItem(bill[0].billKey, updates)
      //assert
      expect(result).toEqual(removeItemAction);
    });

    it('should generate deleteBill Action', () => {
      //mock an action
      var bills = [{
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      }];

      var deleteBillAction = {
        type: 'DELETE_BILL',
        id: bills[0].bill
      };

      //lets call our actions
      var result = actions.deleteBill(bills[0].billKey);

      //asssert on result
      expect(result).toEqual(deleteBillAction);
    });
  })

  describe('Async', () => {
    var uid;
    var propertyRef = firebaseRef.child('properties');
    var testPropertyKey;
    var testTableRef;
    var testTableKey;
    var store;
    var testReservationKey;
    var testReservationRef;

    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

    //GENERATE PROP CODE
    var propCode = shortid.generate();
    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage,
      propCode
    };

    var testTable = {
      tbname: 7,
      tbcapacity: 6,
      propID: 7
    }

    var testReservation = {
      name: 'Isaac',
      number: 6,
      tbKey: 7,
      propKey: 9
    }

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      store = createMockStore({})
      //SIGN IN anonymously
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        testProperty.propCreator = uid
        // perfom login
        store.dispatch(login({uid}))
        //remove any existing proprties
        return firebaseRef.remove();
      }).then(()=> {
        testTableRef = firebaseRef.child('tables').push();
        testTableKey = testTableRef.key;
        testReservationRef = firebaseRef.child('reservations').push();
        testReservationKey = testReservationRef.key;
        testReservationRef.set({
          ...testReservation
        });
        return testTableRef.set({
          ...testTable
        });

      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      firebaseRef.remove().then(() => done());
    });

    it('should run', () => {
      expect(0).toEqual(1);
    })

  })
})
