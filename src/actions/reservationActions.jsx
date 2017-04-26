import {firebaseRef} from 'src/firebase/index'
//export startAddReservation async action
export var startAddReservation  = (reservation) => {
  return(dispatch, getState) => {
    //Alert if tables arent enough
    var userID = getState().auth.uid
    //table id
    var tableID = reservation.tbKey;
    //prop id
    var propID = reservation.propKey;


    //lets make a reservations fan out
    var reservationFanOut = {};
    //get a ref key for out reservation
    var reservationKey =  firebaseRef.child('reservations').push().key;
    reservationFanOut[`reservations/${reservationKey}`] = reservation;
    reservationFanOut[`property-reservations/${propID}/${reservationKey}`] = reservationKey;
    reservationFanOut[`table-reservations/${tableID}/${reservationKey}`] = reservationKey;
    reservationFanOut[`user-reservations/${userID}/${reservationKey}`] = reservationKey;

    //update database
    return firebaseRef.update(reservationFanOut).then(() => {
      dispatch(addReservation({
        ...reservation,
        resKey: reservationKey,
        resUser: userID
      }))
    });
  }
}


//export add Reservation action
export var addReservation = (reservation) => {
  return {
    type: 'ADD_RESERVATION',
    reservation
  }
}


//export action to async update reservation
export var startUpdateReservation =(id, updates) => {
  return(dispatch, getState) => {
    //check if updating valid reservation
    return firebaseRef.child(`/reservations/${id}`).once('value').then((reservationSnap) => {
      if(reservationSnap.val() != null) {
        var resUpdate =  {};
        resUpdate[`/reservations/${id}`] = updates;

        //push to server
        return firebaseRef.update(resUpdate).then(() => {
          dispatch(updateReservation(id, updates));
        })
      }
    })
  }
}

//export update reservation
export var updateReservation = (id, updates) => {
  return {
    type: 'UPDATE_RESERVATION',
    id,
    updates
  }
}

//an action to remove a resevation
export var startRemoveReservation = (id) => {
  return(dispatch, getState) =>{
    return firebaseRef.child(`/reservations/${id}`).remove().then(() => {
      dispatch(removeReservation(id));
    })
  }
}

//export remove reservation
export var removeReservation = (id) => {
  return {
    type: 'REMOVE_RESERVATION',
    id
  }
}

//fetch all reservations from db
export var fetchReservations = () => {
  return(dispatch, getState) => {
    const propKey = getState().property.propKey;
    return firebaseRef.child(`/property-reservations/${propKey}`).once('value', (snapshot) => {
      snapshot.forEach((childShot) => {
        firebaseRef.child(`/reservations/${childShot.val()}`).once('value', (resShot) => {
          dispatch(addReservation(resShot.val()));
        });
      })
    })
  };
};
