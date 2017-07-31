import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import * as actions from 'tableActions'
import shortid from 'shortid'


//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('tableActions', () => {
  describe('sync', () => {

    //it should generate an addTable action
    it('should generate addTable', () => {
      var table = {
        tbname: 7,
        tbcapacity: 5
      }

      var addTableAction = {
        type: 'ADD_TABLE',
        table
      }

      var result = actions.addTable(addTableAction.table);
      expect(result).toEqual(addTableAction);
    });

    it('should generate clear Table action', () => {
      var action = {
        type: 'CLEAR_TABLES'
      };

      var result = actions.clearTables();
      expect(result).toEqual(action);
    })

    it('should generate updateTable action', () => {
       var updates  = {
         tbname: 9
       };

       var updateTableAction = {
         type: 'UPDATE_TABLE',
         updates
       }

       var result = actions.updateTable(10, updates);

       expect(result).toInclude(updateTableAction);
    });

    it('should generate deleteTable action', () => {
      var id = 2;
      var deleteTableAction = {
        type:'DELETE_TABLE',
        id
      }

      var result = actions.deleteTable(id);
      expect(result).toEqual(deleteTableAction);
    });

  });

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
    var propCode = shortid.generate()
;    var testProperty =  {
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

    it('should update table and dispatch updateTable', (done) => {
      //mock a store
      const store =  createMockStore({auth:{uid}});

      //mock data updatew
      var updates: {
        tbname: 6
      };

      //mock our action
      const action = actions.startUpdateTable(testTableKey, updates);
      //dispatch mockaction
      store.dispatch(action).then(() => {
        //get actions
        const mockActions = store.getActions();
        //asert
        expect(mockActions[0].type).toEqual('UPDATE_TABLE');
        done();
      }, done());

    });

    it('should delete table and dispatch deleteTable', (done) => {
      //mock a store with our table
      const store  = createMockStore ({auth: {uid}, tables:[
        {
          ...testTable,
          tbKey: testTableKey
        }
      ]});

      //construct action
      const action = actions.startDeleteTable(testTableKey);
      //dispatch action
      store.dispatch(action).then(() => {
        //collect assertions
        const mockActions = store.getActions();
        //make our assertions
        expect(mockActions[0].type).toEqual('DELETE_TABLE');
        done();
      }, done());
    })

    it('should collect tables and dispatch ADD_TABLE',  (done) => {
      const store = createMockStore({property: {propKey: testPropertyKey}});
      const action = actions.collectTables();

      store.dispatch(action).then(()=> {
        const mockActions = store.getActions();

        //work on actions
        expect(mockActions[0].type).toEqual('ADD_TABLE');
        expect(mockActions[0].tables.length).toEqual(1);
        expect(mockActions[0].tables[0].tbname).toEqual(testTable.tbname);

        done();
      }, done());
    });

    it('should create table and dispatch ADD_TABLE', (done) => {

      //call our async action
      const action = actions.startAddTable(testTable);

      store.dispatch(action).then(()=> {
        //get store's actions
        const mockActions = store.getActions();
        //asser that our action was called
        expect(mockActions[0].toInclude({
          type: 'ADD_TABLE',
          table: {
            ...testTable
          }
        }));
        done();
      },done());
    });



  })
})
