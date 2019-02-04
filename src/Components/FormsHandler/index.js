import React from 'react';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';

const FormsHandler = (WrappedComponent) =>
  connect()(
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
        this.onSubmit = this.onSubmit.bind(this);
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
      onSubmit = (mutation, actionCreator, redirectRoute) => async () => {
        actionCreator && this.props.dispatch(actionCreator(this.state));
        mutation && (await API.graphql(graphqlOperation(mutation, { input: this.state })));
        redirectRoute && this.props.history.push(redirectRoute);
      };
      render() {
        return <WrappedComponent onChange={this.onChange} item={this.state} onSubmit={this.onSubmit} />;
      }
    }
  );
export default FormsHandler;
