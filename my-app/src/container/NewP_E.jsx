import React,{useState} from 'react'
import { Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';

export default function NewP_E() {
    const history = useHistory();

    const [data, setData] = useState({tipo: "",CoberturaAfectada: "", FechaOcurrencia:"", Motor:"", Chasis:"",Concepto:"",Asegurado:"",Entidad:""})
    
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: [target.value]
        })
    }

    const URL = "http://localhost:3004/New"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El Asegurado ${response.data.Asegurado} ha sido guardado exitosamente!`,
                'success'
            )
            history.push('/')
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el Asegurado!',
                'error'
            )
        }
    }
    return (
        <Container>
            <h1 className="text-center">Nueva Moto</h1>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="CoberturaAfectada"
                        placeholder="FechaOcurrencia"
                        value={data.CoberturaAfectada}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="date"
                        name="FechaOcurrencia"
                        placeholder="FechaOcurrencia"
                        value={data.FechaOcurrencia}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Motor"
                        placeholder="Motor"
                        value={data.Motor}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Chasis"
                        placeholder="Chasis"
                        value={data.Chasis}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Concepto"
                        placeholder="Concepto"
                        value={data.Concepto}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Asegurado"
                        placeholder="Asegurado"
                        value={data.Asegurado}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="Entidad"
                        placeholder="Entidad"
                        value={data.Entidad}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select 
                        className="form-control"
                        name="tipo"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un Tipo</option>
                        <option value="policyInsured">PolicyInsured</option>
                        <option value="exposurevehicles">Exposurevehicles</option>
                    </select>
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}
