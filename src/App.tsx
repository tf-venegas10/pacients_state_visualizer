import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NewPacient from './Components/NewPacient';
import PacientHome from './Components/PacientHome';
import Search from './Components/Search';
import { Link, NavBarGlobal } from './StyledComponents/index';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBarGlobal>
            <Link to="/">Buscar</Link>
            <Link to="/nuevo/paciente">Nuevo paciente</Link>
            <Link to="/paciente">Paciente #123</Link>
          </NavBarGlobal>
        </header>
        <Route exact path="/" component={Search} />
        <Route path="/paciente" component={PacientHome} />
        <Route path="/nuevo/paciente" component={NewPacient} />
      </div>
    );
  }
}

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
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default withAuthenticator(withProvider);
