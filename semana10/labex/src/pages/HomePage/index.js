import React from "react";

const HomePage = (props) => {
  const goToLogin = () => {
    props.history.push("/login");
  };

  const goToListTrips = () => {
    props.history.push("/viagens");
  };

  return (
    <div>
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToListTrips}>Ver Viagens</button>
    </div>
  );
};

export default HomePage;
