import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

export const useListaViagens = () => {
  const [listaViagens, setListaViagens] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trips`
      )
      .then((response) => {
        setListaViagens(response.data.trips);
      })
      .catch((error) => {
        window.alert("Erro ao listar as viagens.");
      });
  }, [setListaViagens]);

  return listaViagens;
};
