//Otra forma de crear componentes, es haciendo uso de la palabra reservada class, como crear objetos o clases (POO)
//Para ello importamos un componente llamado Component, y a ese lo extendemos

import { Component } from 'react';

export class Saludar extends Component {
    render(){
        return <h1>Hello world!!</h1>

    }
}