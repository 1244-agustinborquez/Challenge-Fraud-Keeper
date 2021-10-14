import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

export default function Tablee({newitem, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) {
    const URL = "http://localhost:3004/New"

    const handleDelete = async () => {

        Swal.fire({
            title: `Estás seguro de eliminar ${newitem.Asegurado} ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${URL}/${newitem.id}`).then((response) => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `Se eliminó con éxito el Asegurado ${newitem.Asegurado}!`,
                            'success'
                        )
                        setUpdateList(!updateList)
                    }else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al elminar el Asegurado!',
                            'error'
                        )
                    }
                })
            }
        })
    }

    const handleEdit = () => {
        handleOpenModal();
        setDataModal(newitem)
    }

    return (
    <tr>
      <td>{newitem.id}</td>
      <td>{newitem.CoberturaAfectada}</td>
      <td>{newitem.Asegurado}</td>
      <td>{newitem.FechaOcurrencia}</td>
      <td>{newitem.Motor}</td>
      <td>{newitem.Chasis}</td>
      <td>{newitem.Concepto}</td>
      <td>{newitem.Entidad}</td>
      <td><button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button></td>
      <td><button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button></td>
    </tr>
    )
}
