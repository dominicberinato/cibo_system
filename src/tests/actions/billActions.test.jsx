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


  it('should generate CURR_BILL action', () => {
    var billID = 123;
    var currBillAction = {
      type: 'CURR_BILL',
      billID
    }

    var result = actions.currBill(billID);

    expect(result).toEqual(currBillAction);
  });

  describe('sync', () => {

    it('should generate START_BILL Action', () =>{
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
         type: 'START_BILL',
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
        id: bills[0].billKey,
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
        id: bills[0].billKey,
        updates
      };

      //generate a result
      var result = actions.removeItem(bills[0].billKey, updates)
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
        id: bills[0].billKey
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


    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage,
      propCode: 58686816897
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

    it('should run startAddBill and dispatch START_BILL', (done) => {
      //mock an action
      var bill = {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      };
      //mock the action
      const action = actions.startAddBill(bill);

      //dispatch our action
      store.dispatch(action).then(() => {
        //collect actions
        const mockActions = store.getActions();
        //assert that add bill was called
        expect(mockActions[0].toInclude({
          type: 'START_BILL',
          bill: {
            ...bill
          }
        }));
        done(); //async test done
      },done());//if error
    });

    it('should run startAddItem and dispatch ADD_ITEM', (done) => {
      //mock an action
      var bill = {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      };

      //mock updates
      const updates = {
        bill: 40,
        items: [
          '20'
        ]
      };

      const action = actions.startAddItem(bill.billKey, updates);

      //dispatch our action
      store.dispatch(action).then(() => {
        //collect actions
        const mockActions = store.getActions();

        expect(mockActions[0].toInclude({
          type: 'ADD_ITEM',
          id: bill.billKey,
          bill: {
            ...bill
          }
        }));
        done();
      }, done());
    });

    it('should startRemoveItem and dispatch REMOVE_ITEM',  (done) => {
      //mock an action
      var bill = {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      };

      //mock updates
      const updates = {
        bill: 40,
        items: [
          '20'
        ]
      };

      //mock out async action
      const action = actions.startRemoveItem(bill.billKey, updates);


      //dispatch the action
      store.dispatch(action).then(() => {
        //collect actions that were call
        const mockActions = store.getActions();

        //lets assert the actions were called
        expect(mockActions[0].toInclude({
          type: 'REMOVE_ITEM',
          id: bill.billKey,
          bill: {
            ...bill
          }
        }));
        done();
      }, done());
    });

    it('should startDeleteBill and dispatch DELETE_BILL', (done) => {
      //mock an action
      var bill = {
        id: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      };

      //lets mock action
      const action = actions.startDeleteBill(bill.id);

      //dispatch our delee action
      store.dispatch(action).then(() => {
        //collect actions
        const mockActions = store.getActions();

        //lets assert that the actions were called
        expect(mockActions[0].toInclude({
          type: 'DELETE_BILL',
          id: bill.billKey
        }));
        done();
      }, done());
    })

  })
})
