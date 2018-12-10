import React, { Component } from "react";
import { connect } from "react-redux";
import {fevorite} from "../actions/fevoritesAction"


class Fevourite extends Component {
  render() {
    const { fevorite } = this.props;
    console.log(this.props)
    return <div className="container">
        <ul>
        {fevorite.map(fev => <li key={fev.fmisid} >
          <div className="fevoritelist">
            {fev.name}
          </div>  
        </li>)}
        </ul>
      </div>;
  }
}
const mapStateToProps = state => ({
  fevorite:state.fevorite.fevorite
});

const mapActionToProps = {
  
}

export default connect(mapStateToProps ,mapActionToProps)(Fevourite);
