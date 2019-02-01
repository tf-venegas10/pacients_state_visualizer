import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NewPacient from './Components/NewPacient';
import PacientHome from './Components/PacientHome';
import Search from './Components/Search';
import { NavBarGlobal } from './Components/NavBar';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { withAuthenticator } from 'aws-amplify-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './Reducers/index';

Amplify.configure(awsmobile);

const defaultPacient = {
  paciente: {
    nombre: 'Tomas',
    genero: 'Hombre',
    id: '1'
  }
};
const store = createStore(Reducer, defaultPacient, composeWithDevTools());
const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

const withProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Rehydrated>
  </ApolloProvider>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarGlobal />
        <Route exact path="/" component={Search} />
        <Route path="/paciente" component={PacientHome} />
        <Route path="/nuevo/paciente" component={NewPacient} />
      </div>
    );
  }
}

export default withAuthenticator(withProvider);
