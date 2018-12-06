import React, { PropTypes } from 'react';
import Select from 'react-select';
import {
  FormControl,
  Button,
  Panel,
} from 'react-bootstrap';

const options = [
  { value: 'ios', label: 'IOS' },
  { value: 'proa', label: 'PROA' },
  { value: 'paulaSouza', label: 'Paula Souza' },
  { value: 'google', label: 'Google' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'amigos', label: 'Amigos/Familiares' },
  { value: 'alunos', label: 'Alunos' },
  { value: 'intitutoTivit', label: 'Instituto TIVIT' },
  { value: 'outros', label: 'Outros' },
];


const title = 'Como Conheceu o projeto Geração Futura?';

function submitHandler(e) {
  e.preventDefault();
  history.push('/inscricao2');
}

function comoConheceu(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Cheetal</h1>
      </div>

      <Panel header={<h3>Como Conheceu o projeto Geração Futura?</h3>}>
        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <Select options={options} />
              <Button type="submit" className="btn btn-fill btn-info btn-label-right">
                Próximo
              </Button>
            </div>
          </fieldset>
        </form>
      </Panel>
    </div>
  );
}

comoConheceu.contextTypes = { setTitle: PropTypes.func.isRequired };
export default comoConheceu;
