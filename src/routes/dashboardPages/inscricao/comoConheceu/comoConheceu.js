import React, { PropTypes } from 'react';
import {
    FormGroup,
    FormControl,
  } from 'react-bootstrap';

const title = 'Publico';

function ComoConheceu(props, context) {
  context.setTitle(title);
  return (
    <div className="card">
      <div className="header">
        <h4>Como Conheceu o projeto Geração Futura?</h4>
      </div>
      <div className="content">
        <form onSubmit>
          <div className="form-group">
            <FormGroup controlId="formControlsPublico">
              <FormControl componentClass="select">
                <option value="ios">IOS</option>
                <option value="proa">PROA</option>
                <option value="paulaSouza">Paula Souza</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="amigos">Amigos/Familiares</option>
                <option value="alunos">Alunos</option>
                <option value="intitutoTivit">Instituto TIVIT</option>
                <option value="outros">Outros</option>
              </FormControl>
            </FormGroup>
          </div>
          <button type="submit" className="btn btn-fill btn-info btn-label-right">Próximo</button>
        </form>
      </div>
    </div>
  );
}

ComoConheceu.contextTypes = { setTitle: PropTypes.func.isRequired };
export default ComoConheceu;
