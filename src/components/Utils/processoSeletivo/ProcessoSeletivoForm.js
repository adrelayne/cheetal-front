import React, { Component } from 'react';
import {
  FormControl
   } from 'react-bootstrap';
import axios from 'axios';

class ProcessoSeletivoForm extends Component {
    constructor () {
      super()
      this.state = {
        schemas: []
      }
      this.theurl='https://jcapi.azurewebsites.net/'
    }

    componentDidMount() {
      axios
        .get(this.theurl + "processoseletivo/")
        .then(response =>
            this.setState({
              schemas: response.data
            })
          )
        .catch(error => console.log(error.response));
    }

    render() {
        return (
          <FormControl componentClass="select" placeholder="select">
            {this.state.schemas.map((e, key) => {
              return <option key={key} value={e.id}>{e.descricao}</option>;
            })}
          </FormControl>
        )
    }
}

export default ProcessoSeletivoForm