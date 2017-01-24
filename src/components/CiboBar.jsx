import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';


export class CiboBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <AppBar
        title="Cibo Properties"
        />

    )
  }
};

export default CiboBar;
