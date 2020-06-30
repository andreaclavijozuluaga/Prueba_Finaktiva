import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <form className="w-full max-w-sm mx-auto pt-5">
        <div className={`flex items-center border-b border-b-2 border-${this.errorColor()}-500 py-2`}>
          <input type="text" id="numeroIngresado" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Ingrese un número" aria-label="Full name"/>

          <button
            className={`flex-shrink-0 bg-${this.errorColor()}-500 hover:bg-${this.errorColor()}-700 border-${this.errorColor()}-500 hover:border-${this.errorColor()}-700 text-sm border-4 text-white py-1 px-2 rounded`}>Ingresar
          </button>

        </div>
      </form>
     );
  }

  errorColor = () => {
    return this.state.error ? 'red' : 'teal';
  }
}

export default FormInput;