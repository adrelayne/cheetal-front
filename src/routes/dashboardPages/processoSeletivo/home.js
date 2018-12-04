import React, { PropTypes } from 'react';
import {
    Button,
    Panel,
    PageHeader,
    ControlLabel,
    FormControl,
    FormGroup
     } from 'react-bootstrap';
import Processos from "../../../components/Utils/processoSeletivo/ProcessoSeletivoForm";

const title = 'ProcessoSeletivo';

function displayProcessoSeletivo(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Processo Seletivo</PageHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span>Consulta</span> } >
          <Button type="submit" onClick={(e) => ProcessoOptions()}>Reload</Button>
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <Processos />
            </FormGroup>
            <Button type="criar" className="col-lg-3">Criar Novo Processo Seletivo</Button><Button type="editar" className="col-lg-3" bsStyle="primary">Editar Processo Seletivo</Button>
          </ Panel>
        </div>
      </div>
    </div>
  );
}


displayProcessoSeletivo.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayProcessoSeletivo;
