import React, { Component} from 'react'

export default class ModalInt extends Component{

    render(){
        return (
         <div className="modalForm">
            <h1>Adicionar novo usuário</h1>
            <form>
                <input placeholder="Usuário no Github"></input>
            </form>
            <div className="buttons">
            <button type="submit" id="btnCancelar">Cancelar</button>
            <button type="submit" id="btnSalvar">Salvar</button>
            </div>
        </div>      
        )
    }
}