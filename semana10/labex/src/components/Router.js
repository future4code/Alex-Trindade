import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage";
import Login from "../pages/Login";
import TripDetailsPage from "../pages/TripDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/criar-viagem'>
          <CreateTripPage />
        </Route>
        <Route exact path='/viagens'>
          <ListTripsPage />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/detalhes-viagem'>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
