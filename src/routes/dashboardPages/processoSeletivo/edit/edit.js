import React, { Component } from 'react';
import {
  PageHeader,
  Button
   } from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string'


class ProcessoSeletivoEdit extends Component {
    constructor (props) {
      super(props);
      this.state = {
        id: null,
        schemas: {}
      };

      
      console.log(props);
      this.theurl='https://jcapi.azurewebsites.net/';
    }

    componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      console.log(values)
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
      const { router, params, location, routes } = this.props
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