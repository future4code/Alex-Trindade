import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

export const useTripsList = () => {
  const [tripsList, setTripsList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trips`
      )
      .then((response) => {
        setTripsList(response.data.trips);
      })
      .catch((error) => {
        window.alert("Erro ao listar as viagens.");
      });
  }, [setTripsList]);

  return tripsList;
};
