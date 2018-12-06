import React, { PropTypes } from 'react';
import {
  FormControl,
  ControlLabel,
  Button,
  Panel,
} from 'react-bootstrap';
import reduxForm from 'redux-form';
import Select from 'react-select';
import endereco from '.';

const validate = values => {
  const errors = {};
  if (!values.cep) {
    errors.cep = 'CEP é necessário';
  } else if (values.cep.lenght !== 8) {
    errors.cep = 'CEP inválido';
  }
  return errors;
};

const options = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
    { value: 'ES', label: 'Estrangeiro' },
];

const title = 'Endereço';

function submitHandler(e) {
  e.preventDefault();
  history.push('/inscricao4');
}

function Endereco(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Cheetal</h1>
      </div>

      <Panel header={<h3>Login</h3>}>

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <div className="form-group">
            <ControlLabel>Logradouro *</ControlLabel>
            <FormControl
              name="logradouro"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Número *</ControlLabel>
            <FormControl
              name="numero"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Complemento</ControlLabel>
            <FormControl
              name="complemento"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Cidade*</ControlLabel>
            <FormControl
              name="complemento "
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Estado *</ControlLabel>
            <Select options={options} />
          </div>
          <div className="form-group">
            <ControlLabel>CEP*</ControlLabel>
            <FormControl
              name="cep"
              type="text"
            />
          </div>
          <Button type="submit" className="btn btn-fill btn-info">Concluir</Button>
        </form>
      </Panel>
    </div>
  );
}

endereco.contextTypes = { setTitle: PropTypes.func.isRequired };

export default reduxForm({
  form: 'endereco',
  validate,
})(Endereco);
