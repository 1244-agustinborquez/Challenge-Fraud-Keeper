import React from 'react'

export default function PrimerTabla(props) {
    return (
                <tr key={props.id}>
                  <td>{props.id}</td>
                  <td>{props.Asegurado}</td>
                  <td>{props.CoberturaAfectada}</td>
                  <td>{props.FechaOcurrencia}</td>
                  <td>{props.Motor}</td>
                  <td>{props.Chasis}</td>
                  <td>{props.Concepto}</td>
                  <td>{props.Entidad}</td>
                </tr>
    )
}