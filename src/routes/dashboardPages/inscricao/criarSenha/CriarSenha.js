import React, { PropTypes } from 'react';
import reduxForm from 'redux-form';
import {
  FormControl,
  Button,
  Panel,
} from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Senha é necessária';
  } else if (values.password.length < 6) {
    errors.password = 'Sua senha deve conter 6 caracteres ou mais';
  }
  return errors;
};

const title = 'Criar senha';

function submitHandler(e) {
  e.preventDefault();
  history.push('/Login');
}

function criarSenha(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Cheetal</h1>
      </div>

      <Panel header={<h3>Criar senha</h3>}>
        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Senha"
                type="password"
                name="password"
              />
            </div>
            <Button type="submit" bsSize="large" bsStyle="success" block>Cadastrar</Button>
          </fieldset>
        </form>
      </Panel>
    </div>
  );
}

criarSenha.contextTypes = { setTitle: PropTypes.func.isRequired };
export default reduxForm({
  form: 'criarsenha',
  validate,
})(criarSenha);
