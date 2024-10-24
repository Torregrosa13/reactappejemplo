import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { Navigate } from 'react-router-dom';

export default class Create extends Component {

    idBox = React.createRef();
    nameBox = React.createRef();
    surBox = React.createRef();
    imgBox = React.createRef();
    activeBox = React.createRef();
    idCursoBox = React.createRef();

    state = {
        status: false
    }

    insertAlumno = (e) =>{
        e.preventDefault();
        let request = "api/alumnos/insertalumno"
        let url = Global.urlApi + request;

        let alumno = {
            // idAlumno : parseInt(this.idBox.current.value),
            nombre : this.nameBox.current.value,
            apellidos : this.surBox.current.value,
            imagen : this.imgBox.current.value,
            // activo : this.activeBox.current.value,
            idCurso : parseInt(this.idCursoBox.current.value)
        }
        axios.post(url, alumno).then(response=>{
            console.log(response.data)
            this.setState({
                status: true
            })
        })

    }

  render() {
    if(this.state.status === true){
        return(<Navigate to="/"/>)
    }else{
        
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Crear Alumno</h5>
                  <form>
                    {/* <div className="mb-3">
                      <label className="form-label">ID Alumno</label>
                      <input type='text' ref={this.idBox} className="form-control" />
                    </div> */}
                    <div className="mb-3">
                      <label className="form-label">Nombre Alumno</label>
                      <input type='text' ref={this.nameBox} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellidos Alumno</label>
                      <input type='text' ref={this.surBox} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Imagen Alumno</label>
                      <input type='text' ref={this.imgBox} className="form-control" />
                    </div>
                    {/* <div className="mb-3">
                      <label className="form-label">Activo</label>
                      <input type='text' ref={this.activeBox} className="form-control" />
                    </div> */}
                    <div className="mb-3">
                      <label className="form-label">ID Curso</label>
                      <input type='text' ref={this.idCursoBox} className="form-control" />
                    </div>
                    <button type="button" onClick={this.insertAlumno} className='btn btn-success w-100'>Insertar</button>
                  </form>
                </div>
              </div>
            </div>
          )         
          
    }
  }
}
