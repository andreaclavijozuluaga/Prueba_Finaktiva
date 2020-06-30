import React, { Component } from 'react';
import './App.css';
import ListNum from './components/ListNum.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeros: [1, 2, 3],
      error: false,
    };
  }
  render() {
    return (
      <div className="App container mx-auto max-w-3xl">
        <form className="w-full max-w-sm mx-auto pt-5">
          <div className={`flex items-center border-b border-b-2 border-${this.errorColor()}-500 py-2`}>
            <input type="text" id="numeroIngresado" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Ingrese un número" aria-label="Full name"/>

            <button
              className={`flex-shrink-0 bg-${this.errorColor()}-500 hover:bg-${this.errorColor()}-700 border-${this.errorColor()}-500 hover:border-${this.errorColor()}-700 text-sm border-4 text-white py-1 px-2 rounded`} onClick={this.agregar} type="button">Ingresar
          </button>
          </div>
        </form>

        <div>
          <p className="mb-3">Ordenar de:</p>
          <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mr-2" name="select" onClick={this.ordenarMenor}>menor a mayor</button>
          <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" name="select" onClick={this.ordenarMayor}>mayor a menor</button>
        </div>
        
        

        <ListNum numeros={this.state.numeros} />
        
      </div>
    );
  }
  errorColor = () => {
    return this.state.error ? 'red' : 'teal';
  };

  ordenarMenor = () => {
    let numeros = this.state.numeros;
    numeros.sort((a, b) => {
      return a - b;
    });
    console.log(numeros);
    this.setState({ numeros: numeros });
  };

  ordenarMayor = () => {
    let numeros = this.state.numeros;
    numeros.sort((a, b) => {
      return a - b;
    }).reverse();
    console.log(numeros);
    this.setState({ numeros: numeros })
  };

  agregar = (e) => {
    e.preventDefault();
    const numeroIngresado = document.getElementById('numeroIngresado');

    if (!isNaN(numeroIngresado.value)) {
      let numeros = this.state.numeros;
      numeros.push(Number.parseInt(numeroIngresado.value));
      this.setState ({ numeros: numeros})
    } else {
      alert ('No es un número');
      this.setState({ error: true});
    }
    numeroIngresado.value = '';
  };

}

export default App;

