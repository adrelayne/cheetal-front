import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'InsertProcessoSeletivo';

function displayInsertProcessoSeletivo(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Processo Seletivo</PageHeader>
        </div>
      </div>
    </div>
  );
}


displayInsertProcessoSeletivo.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayInsertProcessoSeletivo;
