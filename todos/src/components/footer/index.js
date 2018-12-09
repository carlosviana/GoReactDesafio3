import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Footer = ({ count }) => <h1>Você tem {count} favoritos</h1>;

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    count: state.favorites.data.length
});

export default connect(mapStateToProps)(Footer);
