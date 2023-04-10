import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginOrRegister from '../components/Layout/Auth/index'
import Home from '../components/Home/'

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, location, ...rest }) => (
  // eslint-disable-next-line no-sequences
  localStorage.setItem('@peopleview/urltokenstatususer', location.pathname),
  <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ?
        (
            <Component {...props} />
        )
        :
        (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location },
            }}
          />
        )
      }
  />
);

// const AdminRoute = ({ component: Component, location, ...rest }) => (
//   // eslint-disable-next-line no-sequences
//   localStorage.setItem('@playmusics/urltokenstatusadmin', location.pathname),
//   <Route
//       {...rest}
//       render={(props) =>
//         isAdmin() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//               to={{
//                 pathname: '/home',
//                 state: { from: props.location },
//               }}
//           />
//         )
//       }
//   />
// );

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginOrRegister} />
      {/* <AdminRoute exact path="/home" component={Home} /> */}
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes;