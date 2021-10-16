import React,{Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import data from './json/ejemplo.json'
import PrimerTabla from "./PrimerTabla";
class App extends Component {
  state = {
    policyInsured:data.policyInsured,
    exposurevehicles: data.exposurevehicles,
    data: data.new,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Asegurado: "",
      CoberturaAfectada: "",
      FechaOcurrencia: "",
      Motor: "",
      Chasis: "",
      Concepto: "",
      Entidad: "",
      Tipo: ""
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {

    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Asegurado = dato.Asegurado;
        arreglo[contador].CoberturaAfectada = dato.CoberturaAfectada;
        arreglo[contador].FechaOcurrencia = dato.FechaOcurrencia;
        arreglo[contador].Motor = dato.Motor;
        arreglo[contador].Chasis = dato.Chasis;
        arreglo[contador].Concepto = dato.Concepto;
        arreglo[contador].Entidad = dato.Entidad;
        arreglo[contador].Tipo = dato.Tipo;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro de eliminar el Asegurado "+dato.Asegurado);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length + 1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.policyInsured)
    console.log('asfsadgsg')
  };

  render() {
    
    return (
      <>
      <Container>
        <h1>Lista Anterior</h1>
      <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Asegurado</th>
                <th>CoberturaAfectada</th>
                <th>FechaOcurrencia</th>
                <th>Motor</th>
                <th>Chasis</th>
                <th>Concepto</th>
                <th>Entidad</th>
                <th>Dominio/Concepto E</th>
              </tr>
            </thead>

            <tbody>
            <tr key={this.state.policyInsured.id[0]}>
                    <td>{`${this.state.policyInsured.id[0]}P`}</td>
                    <td>{this.state.policyInsured.Concepto[0]}</td>
                    <td>{this.state.policyInsured.CoberturaAfectada[0]}</td>
                    <td>{this.state.policyInsured.FechaOcurrencia[0]}</td>
                    <td>{this.state.policyInsured.Motor[0]}</td>
                    <td>{this.state.policyInsured.Chasis[0]}</td>
                    <td>{this.state.policyInsured.Concepto[0]}</td>
                    <td>{this.state.policyInsured.Entidad[0]}</td>
                    <td>{this.state.policyInsured.Dominio[0]}</td>
            </tr>
            <tr key={this.state.policyInsured.id[1]}>
                  <td>{`${this.state.policyInsured.id[1]}P`}</td>
                    <td>{this.state.policyInsured.Concepto[1]}</td>
                    <td>{this.state.policyInsured.CoberturaAfectada[1]}</td>
                    <td>{this.state.policyInsured.FechaOcurrencia[1]}</td>
                    <td>{this.state.policyInsured.Motor[1]}</td>
                    <td>{this.state.policyInsured.Chasis[1]}</td>
                    <td>{this.state.policyInsured.Concepto[1]}</td>
                    <td>{this.state.policyInsured.Entidad[1]}</td>
                    <td>{this.state.policyInsured.Dominio[1]}</td>
            </tr>
            <tr>
                    <td>{`${this.state.exposurevehicles[0].id[0]}E`}</td>
                    <td>{this.state.exposurevehicles[0].Asegurado[0]}</td>
                    <td>{this.state.exposurevehicles[0].CoberturaAfectada[0]}</td>
                    <td>{this.state.exposurevehicles[0].FechaOcurrencia[0]}</td>
                    <td>{this.state.exposurevehicles[0].Motor[0]}</td>
                    <td>{this.state.exposurevehicles[0].Chasis[0]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[0]}</td>
                    <td>{this.state.exposurevehicles[0].Entidad[0]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[0]}</td>
            </tr>
            <tr>
                    <td>{`${this.state.exposurevehicles[0].id[1]}E`}</td>
                    <td>{this.state.exposurevehicles[0].Asegurado[1]}</td>
                    <td>{this.state.exposurevehicles[0].CoberturaAfectada[1]}</td>
                    <td>{this.state.exposurevehicles[0].FechaOcurrencia[1]}</td>
                    <td>{this.state.exposurevehicles[0].Motor[1]}</td>
                    <td>{this.state.exposurevehicles[0].Chasis[1]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[1]}</td>
                    <td>{this.state.exposurevehicles[0].Entidad[1]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[1]}</td>
            </tr>
            <tr>
                    <td>{`${this.state.exposurevehicles[0].id[2]}E`}</td>
                    <td>{this.state.exposurevehicles[0].Asegurado[2]}</td>
                    <td>{this.state.exposurevehicles[0].CoberturaAfectada[2]}</td>
                    <td>{this.state.exposurevehicles[0].FechaOcurrencia[2]}</td>
                    <td>{this.state.exposurevehicles[0].Motor[2]}</td>
                    <td>{this.state.exposurevehicles[0].Chasis[2]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[2]}</td>
                    <td>{this.state.exposurevehicles[0].Entidad[2]}</td>
                    <td>{this.state.exposurevehicles[0].Concepto[2]}</td>
            </tr>
            </tbody>
          </Table>
      </Container>
      <Container>
      <h1>Lista Nueva</h1>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Asegurado</th>
                <th>CoberturaAfectada</th>
                <th>FechaOcurrencia</th>
                <th>Motor</th>
                <th>Chasis</th>
                <th>Concepto</th>
                <th>Entidad</th>
                <th>Etitar/Eliminar</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Tipo}</td>
                  <td>{dato.Asegurado}</td>
                  <td>{dato.CoberturaAfectada}</td>
                  <td>{dato.FechaOcurrencia}</td>
                  <td>{dato.Motor}</td>
                  <td>{dato.Chasis}</td>
                  <td>{dato.Concepto}</td>
                  <td>{dato.Entidad}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               #:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="CoberturaAfectada"
                        placeholder="CoberturaAfectada"
                        value={this.state.form.CoberturaAfectada}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="date"
                        name="FechaOcurrencia"
                        placeholder="FechaOcurrencia"
                        value={this.state.form.FechaOcurrencia}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Motor"
                        placeholder="Motor"
                        value={this.state.form.Motor}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Chasis"
                        placeholder="Chasis"
                        value={this.state.form.Chasis}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Concepto"
                        placeholder="Concepto"
                        value={this.state.form.Concepto}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Asegurado"
                        placeholder="Asegurado"
                        value={this.state.form.Asegurado}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Entidad"
                        placeholder="Entidad"
                        value={this.state.form.Entidad}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <select 
                        className="form-control"
                        name="Tipo"
                        onChange={this.handleChange}
                        required
                    >
                        <option value="">Seleccione un Tipo</option>
                        <option value="policyInsured">PolicyInsured</option>
                        <option value="exposurevehicles">Exposurevehicles</option>
                    </select>
                </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
          <FormGroup>
              <label>
               #:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="CoberturaAfectada"
                        placeholder="CoberturaAfectada"
                        value={this.state.form.CoberturaAfectada}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="date"
                        name="FechaOcurrencia"
                        placeholder="FechaOcurrencia"
                        value={this.state.form.FechaOcurrencia}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Motor"
                        placeholder="Motor"
                        value={this.state.form.Motor}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Chasis"
                        placeholder="Chasis"
                        value={this.state.form.Chasis}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Concepto"
                        placeholder="Concepto"
                        value={this.state.form.Concepto}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Asegurado"
                        placeholder="Asegurado"
                        value={this.state.form.Asegurado}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <input 
                        type="text"
                        name="Entidad"
                        placeholder="Entidad"
                        value={this.state.form.Entidad}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <select 
                        className="form-control"
                        name="Tipo"
                        onChange={this.handleChange}
                        required
                    >
                        <option value="">Seleccione un Tipo</option>
                        <option value="policyInsured">PolicyInsured</option>
                        <option value="exposurevehicles">Exposurevehicles</option>
                    </select>
                </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
