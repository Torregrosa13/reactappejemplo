import axios from 'axios';
import React, { Component } from 'react'
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class Delete extends Component {

    state = {
        status : false
    }

    delete = () =>{
        var request = "api/alumnos/deletealumno/" + this.props.id;
        var url = Global.urlApi + request;
        axios.delete(url).then(response=>{
            console.log("Eliminado")
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
            <div>
              <h1>Delete: {this.props.id}</h1>
              <button onClick={this.delete} className='btn btn-danger'>Eliminar</button>
            </div>
          )
    }

  }
}
