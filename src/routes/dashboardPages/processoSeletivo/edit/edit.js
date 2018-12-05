import React, { Component } from 'react';
import {
  PageHeader,
  Button
   } from 'react-bootstrap';
import axios from 'axios';


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class ProcessoSeletivoEdit extends Component {
    constructor (props) {
      super(props);
      this.state = {
        id: getParameterByName('id'),
        schemas: {}
      };
      this.theurl='https://jcapi.azurewebsites.net/';
    }

    componentDidMount() {
      console.log(this.state.id);
      if (this.state.id !== null) {
        axios
          .get(this.theurl + "processoseletivo/" + this.state.id)
          .then(response =>
              this.setState({
                schemas: response.data
              })
            )
          .catch(error => console.log(error.response));
          }
    }

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <PageHeader>Editar Processo Seletivo {this.state.id}: {this.state.schemas.descricao}</PageHeader>
              </div>
            </div>
            <div className="row">
              <Button onClick={() => console.log(this.state.id)}>Click Me</Button><br />
              <Button onClick={() => console.log(this.props.location.search)}>Click Me</Button>
            </div>
          </div>
        )
    }
}

export default ProcessoSeletivoEdit