import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Modal, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Tablee from './Tablee';
export default function List() {
    const URL = "http://localhost:3004/New"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/${dataModal.id}`, dataModal)
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El Asegurado ${response.data.Asegurado} ha sido actualizado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el Asegurado!',
                'error'
            )
        }
    }

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [updateList])
    return (
<Container className="mb-5">
            <Row>
            {
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>CoberturaAfectada</th>
                    <th>Asegurado</th>
                    <th>FechaOcurrencia</th>
                    <th>Motor</th>
                    <th>Chasis</th>
                    <th>Concepto</th>
                    <th>Entidad</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                    {
                  list.map((newitem, index) => (
                    <Tablee
                        key={index}
                        newitem={newitem}
                        setUpdateList={setUpdateList}
                        updateList={updateList}
                        handleCloseModal= {handleCloseModal}
                        handleOpenModal = {handleOpenModal}
                        setDataModal= {setDataModal}
                    />
                  ))
                    }
                </tbody>
              </Table>
            }
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Actualizar Datos</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit = {handleSubmit}
                >
                    <Modal.Body>
                    <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="CoberturaAfectada"
                        placeholder="FechaOcurrencia"
                        value={dataModal.CoberturaAfectada}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="date"
                        name="FechaOcurrencia"
                        placeholder="FechaOcurrencia"
                        value={dataModal.FechaOcurrencia}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Motor"
                        placeholder="Motor"
                        value={dataModal.Motor}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Chasis"
                        placeholder="Chasis"
                        value={dataModal.Chasis}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Concepto"
                        placeholder="Concepto"
                        value={dataModal.Concepto}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Asegurado"
                        placeholder="Asegurado"
                        value={dataModal.Asegurado}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Entidad"
                        placeholder="Entidad"
                        value={dataModal.Entidad}
                        onChange={handleChangeModal}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select 
                        className="form-control"
                        name="tipo"
                        onChange={handleChangeModal}
                        required
                    >
                        <option value="">Seleccione un Tipo</option>
                        <option value="policyInsured">PolicyInsured</option>
                        <option value="exposurevehicles">Exposurevehicles</option>
                    </select>
                </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn btn-success" type="submit">
                            Guardar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    )
}
