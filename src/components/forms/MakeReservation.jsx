import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'src/actions/actions'

export class MakeReservation extends Component {
  constructor(props) {
    super(props);
    this.submitReservation = this.submitReservation.bind(this);
  }
  submitReservation(Event) {
    //prevent page refresh
    Event.preventDefault();
    //get data from state.
    var {property, auth, dispatch} =  this.props;
    var guestName = this.refs.resOwner;
    var guestContact = this.refs.resContact;
    var guestTime = this.refs.resTime;
    var resTable = this.refs.resTable;
    var resOwner = auth.uid;
    var resProperty = property.propKey;

    //construct the object we need to submit
    if(property.propKey != undefined && auth.uid != undefined) {

      //validate and submit
      if(guestName.length == 0 || guestContact.length == 0 || guestTime.length == 0) {

      }
      else
      {

          var reservation =  {
            name: guestName,
            tbKey: resTable,
            contact: guestContact,
            time: guestTime,
            propKey: resProperty,
            resMaker: resOwner
          }

          //lets then dispatch start add reservation
          dispatch(actions.startAddReservation(reservation));
        }
    }
    else {
      console.log('unset propkey uid');
    }
  }
  render() {
    //TODO use select for tables
    var {tables} = this.props;
    return(
      <div>
        <p>Make Reservation</p>
        <form ref="form" onSubmit={this.submitReservation}>
          <div>
            <label>Guest Name*</label>
            <input ref="resOwner" type="text"/>
          </div>
          <div>
            <label>Time*</label>
            <input ref="resTime" type="dateTime"/>
          </div>
          <div>
            <label>Dietary Concerns</label>
            <textarea ref="resDiet" rows="5"></textarea>
          </div>
          <div>
            <label>Table</label>
            <input type="text" ref="resTable"/>
          </div>
          <div>
            <label>Number of Guests*</label>
            <input type="text" ref="resAmount"/>
          </div>
          <div>
            <label>Contact</label>
            <input type="text" ref="resContact"/>
          </div>
          <div>
            <p>All fields marked by * are required please</p>
          </div>
          <div>
            <input type="submit" className="button hollow"/>
          </div>
        </form>
      </div>
    )
  }
};
export default connect((state) => {
  //collect property and user from state
  return {
    auth: state.auth,
    property: state.property,
    tables: state.tables
  }
}) (MakeReservation);
