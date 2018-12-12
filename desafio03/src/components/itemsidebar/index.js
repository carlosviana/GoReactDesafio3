import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

class ItemSideBar extends Component {
  render() {
    return (
      <Fragment>
        <ul className="item">
          {this.props.userRepo.data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  userRepo: state.userRepo
});

export default connect(mapStateToProps)(ItemSideBar);
