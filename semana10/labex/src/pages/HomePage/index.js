import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToListTrips = () => {
    history.push("/viagens");
  };

  return (
    <div>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToListTrips}>Ver Viagens</button>
    </div>
  );
};

export default HomePage;
