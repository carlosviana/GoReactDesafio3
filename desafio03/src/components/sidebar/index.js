import React, { Fragment } from "react";

import Item from "../itemsidebar/index";

import ModalInt from '../../components/modal'


const SideBar = () => (
  <Fragment>
    <div className="sidebar">
      <Item />
      <ModalInt/>
    </div>
  </Fragment>
);
export default SideBar;
