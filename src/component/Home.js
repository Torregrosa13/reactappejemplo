import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {

    state = {
        alumnos: []
    }

    loadAlumnos = () =>{
        var request = "api/Alumnos"
        var url = Global.urlApi + request
        axios.get(url).then(response=>{
            this.setState({
                alumnos: response.data
            })
        })
    }
    componentDidMount = () =>{
        this.loadAlumnos();
    }



  render() {
    return (
      <div>
        <h1>Home</h1>
        <table className='table table-light table-hover'>
            <thead className='table table-dark'>
                <tr>                    
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Apellidos</td>
                    <td>Detalle</td>
                    <td>Editar</td>
                    <td>Borrar</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.alumnos.map((alumno, index)=>{
                        return(<tr key={index}>
                            <td><img src={alumno.imagen} style={{height:"100px", width:"100px"}}></img></td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellidos}</td>
                            <td><NavLink className="btn btn-warning" to={"/detail/" + alumno.idAlumno}>Detalle</NavLink></td>                         
                            <td><NavLink className="btn btn-info" to="/edit">Editar</NavLink></td>                         
                            <td><NavLink className="btn btn-danger" to={"/delete/" + alumno.idAlumno}>Borrar</NavLink></td>                         
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
