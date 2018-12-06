import React, { PropTypes } from 'react';
import reduxForm from 'redux-form';
import {
  FormControl,
  ControlLabel,
  Button,
  Panel,
} from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.rg) {
    errors.rg = 'RG Inválido';
  } else if (values.rg.lenght > 9) {
    errors.rg = 'Digite seu RG sem pontos ou traços';
  }
  if (!values.cpf) {
    errors.cpf = 'CPF Inválido';
  } else if (values.cpf.lenght > 11) {
    errors.cpf = 'Digite seu CPF sem pontos ou traços';
  }
  if (values.email !== undefined) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const title = 'Dados Pessoais';

function submitHandler(e) {
  e.preventDefault();
  history.push('/inscricao3');
}

function dadosPessoais(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Cheetal</h1>
      </div>

      <Panel header={<h3>Dados Pessoais</h3>}>
        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <div className="form-group">
            <ControlLabel>Nome Completo *</ControlLabel>
            <FormControl
              name="nome"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Email *</ControlLabel>
            <FormControl
              name="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Data de Nascimento*</ControlLabel>
            <FormControl
              name="date"
              type="date"
            />
          </div>
          <div className="form-group">
            <ControlLabel>RG *</ControlLabel>
            <FormControl
              name="rg"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>CPF *</ControlLabel>
            <FormControl
              name="cpf"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel col-md-3>Sexo *</ControlLabel>
            <div className="col-md-9 checkbox-group">
              <FormControl
                name="radioGroupSex"
                type="radio"
                label="Masculino"
                value="masculino"
              />
              <FormControl
                name="radioGroupSex"
                type="radio"
                label="Feminino"
                value="feminino"
              />
              <FormControl
                name="radioGroupSex"
                type="radio"
                label="Não declarado"
                value="sexonaodeclarado"
              />
            </div>
          </div>
          <div className="form-group">
            <ControlLabel>Nome da Mãe *</ControlLabel>
            <FormControl
              name="mae"
              type="text"
            />
            <FormControl
              name="radioMae"
              type="radio"
              label="Não declarado"
              value="maenaodeclarado"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Nome do Pai *</ControlLabel>
            <FormControl
              name="pai"
              type="text"
            />
            <FormControl
              name="radioPai"
              type="radio"
              label="Não declarado"
              value="painaodeclarado"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Telefone *</ControlLabel>
            <FormControl
              name="telefone"
              type="text"
            />
            <ControlLabel>Celular *</ControlLabel>
            <FormControl
              name="celular"
              type="text"
            />
          </div>
          <Button type="submit" className="btn btn-info">Próximo</Button>
        </form>
      </Panel>
    </div>
  );
}

dadosPessoais.contextTypes = { setTitle: PropTypes.func.isRequired };
export default reduxForm({
  form: 'dadosPessoais',
  validate,
})(dadosPessoais);
