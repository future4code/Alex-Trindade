import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripsPage from "./pages/ListTripsPage";
import Login from "./pages/Login";
import TripDetailsPage from "./pages/TripDetailsPage";
import FormPage from "./pages/FormPage";

const Router = (props) => {
  return (
    <BrowserRouter history={props.history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/criar-viagem/' component={CreateTripPage} />
        <Route exact path='/viagens' component={ListTripsPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detalhes-viagem/:id' component={TripDetailsPage} />
        <Route exact path='/formulario' component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
