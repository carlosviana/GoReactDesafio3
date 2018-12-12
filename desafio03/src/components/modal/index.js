import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as UserRepoActions } from "../../store/ducks/userRepo";

class ModalInt extends Component {
  handleRepositoryInput = event => {
    event.preventDefault();
    console.log(this.props.userRepo.repository);
    this.props.addUserRepoRequest(this.props.userRepo.repository);
    this.props.setRepository("");
  };

  render() {
    return (
      <div className="modalForm">
        <h1>Adicionar novo usuário</h1>
        <form onSubmit={this.handleRepositoryInput}>
          <input
            placeholder="Usuário no Github"
            value={this.props.userRepo.repository}
            onChange={e => this.props.setRepository(e.target.value)}
          />
          <div className="buttons">
            <button id="btnCancelar">Cancelar</button>
            <button type="submit" id="btnSalvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userRepo: state.userRepo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserRepoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInt);
