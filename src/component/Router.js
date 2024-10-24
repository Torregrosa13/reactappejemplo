import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Create from './Create'
import Delete from './Delete'
import Detail from './Detail'

export default class Router extends Component {
  render() {

    function DeleteElement(){
      let {id} = useParams();
      return(<Delete id={id}/>)
    }

    function DetailElement(){
      let {id} = useParams();
      return (<Detail id={id}/>)
    }

    return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/delete/:id' element={<DeleteElement/>}/>
                <Route path='/detail/:id' element={<DetailElement/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
