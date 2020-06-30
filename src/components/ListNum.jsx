import React, { Component } from 'react'

class ListNum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="lista w-full max-w-sm mx-auto">
        <ul>
          {this.props.numeros.map((numero) => {
            return(
              <li key={numero}>
                {numero} x {numero} = {numero * numero}
              </li>
            )
          })}
        </ul>
        <p>Total: {this.suma()}</p>
      </div>
     );
  }
  suma = () => {
    let resultado = 0;
    this.props.numeros.forEach((numero) => {
      resultado += numero;
    });
    return resultado;
  };
}

export default ListNum;