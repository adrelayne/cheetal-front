import React from 'react';
import Button from 'react-bootstrap';
import {
  ComoConheceu,
  DadosPessoais,
  Endereco,
  CriarSenha,
} from '../inscricao/';

const Inscricao = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <DadosPessoais />
      </div>
      <div className="col-md-6">
        <ComoConheceu />
      </div>
      <div className="col-md-6">
        <Endereco />
      </div>
      <div className="col-md-6">
        <CriarSenha />
      </div>
      <Button
        type="button" className="col-lg-3" onClick={() => history.push('/inscricao')}
      >
        Concluir
      </Button>
    </div>
  </div>
);

export default Inscricao;
