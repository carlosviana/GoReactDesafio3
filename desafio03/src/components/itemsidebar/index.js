import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

class ItemSideBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="item">
          <h1>Teste</h1>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  userRepo: state.userRepo
});

export default connect(mapStateToProps)(ItemSideBar);
