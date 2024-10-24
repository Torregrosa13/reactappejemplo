import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'


export default class Detail extends Component {

    state = {
        alumno: null
    }

    findAlmuno = () =>{
        let request = "api/alumnos/findalumno/" + this.props.id;
        let url = Global.urlApi + request;
        axios.get(url).then(response=>{
            this.setState({
                alumno: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.findAlmuno();
    }

    render() {
        if (this.state.alumno) {
          return (
            <div className="container mt-5">
              <h1 className="text-center mb-4">Detail: {this.props.id}</h1>
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={this.state.alumno.imagen} className="card-img-top" alt="Alumno" />
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Id Alumno: {this.state.alumno.idAlumno}</li>
                    <li className="list-group-item">Nombre Alumno: {this.state.alumno.nombre}</li>
                    <li className="list-group-item">Apellidos Alumno: {this.state.alumno.apellidos}</li>
                    <li className="list-group-item">Activo: {this.state.alumno.activo}</li>
                    <li className="list-group-item">Id Curso: {this.state.alumno.idCurso}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        } else {
          return <div>Cargando...</div>; // O manejar el caso donde no hay alumno
        }
      }
      
      
}
