import React from 'react';

const ForForms = (WrappedComponent) =>
  class FormUtility extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        nombre: '',
        fechaNacimiento: '',
        tipoDocumento: 'cc',
        documento: '',
        genero: 'Mujer'
      };

      this.onChange = this.onChange.bind(this);
    }
    onChange(inputValue) {
      return (evt) => {
        evt.persist();
        console.log('event', evt);
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState[inputValue] = evt.target.value;
          return newState;
        });
      };
    }
    render() {
      return <WrappedComponent onChange={this.onChange} />;
    }
  };
export default ForForms;
