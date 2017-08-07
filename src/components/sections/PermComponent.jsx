import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {collectUserProperties} from 'userPropertiesActions';
import AssocForm from 'AssocForm';
import {assocUser} from 'authActions';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {addProperty} from 'propertyActions';
import {hashHistory} from 'react-router'
import {fetchReservations} from 'reservationActions'
import {collectTables} from 'tableActions'
import {collectPropIngs} from 'ingredientActions'
import {collectPropBatches} from 'batchActions'



export class PermComponent extends Component {
  constructor(props) {
    super(props);
    this.assocProduct = this.assocProduct.bind(this);
    this.state = {
      open: true,
    };

  }
  assocProduct(values) {
    var {dispatch} = this.props;
    //dispatch assoc action
    dispatch(assocUser(values));
  }
  componentDidMount() {
    var {auth, dispatch} = this.props;
    dispatch(collectUserProperties())
  }
  render() {
    var {userProps, dispatch} = this.props;
    var radios = [];
    var renderDialogContent = () => {
      //no props check database
      if(userProps.length ==  0)
      {
        return (<p> Checking Database for Properties</p>)
      }
      else
      {
        //one prop named none so we need to show form
        if(userProps.length == 1 && userProps[0].name == 'none') {
          return(
            <AssocForm onSubmit={this.assocProduct}/>
          )
        }
        else {
          return (
            <RadioButtonGroup
              name="chosenProp"
              onChange={(e, value) => {
                const selected =  userProps.find((item) => {
                  return item.key == value;
                });
                //success let's collect the necessary data
                dispatch(addProperty(selected));
                dispatch(collectTables());
                dispatch(fetchReservations());
                dispatch(collectPropIngs());
                dispatch(collectPropBatches())
                hashHistory.push('/app');
              }}
              >
              {
                userProps.map((p) => {
                  return (
                    <RadioButton
                      label={p.propName}
                      value={p.key}
                      key={p.key}
                      />
                  );
                })
              }
            </RadioButtonGroup>
          )
        }
      }
    }
    return(
      <div>
        <Dialog
          title="Loading Properties"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {renderDialogContent()}
        </Dialog>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    auth: state.auth,
    userProps: state.userProperties
  }
})(PermComponent);
