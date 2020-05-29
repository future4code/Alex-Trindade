import React from "react";
import { useForm } from "../../Hooks";
import axios from "axios";

const CreateTripPage = (props) => {
  const { form, onChange } = useForm({
    name: "",
    planet: "selecione",
    date: "",
    description: "",
    durationInDays: "",
  });

  const token = localStorage.getItem("token");

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  if (token === null) {
    props.history.push("/login");
  }

  const handleSubmit = (event) => {
    //moment(form.date).format("DD/MM/YY");
    event.preventDefault();

    console.log(form);

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trips`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        window.alert("Viagem criada com sucesso.");
      })
      .catch((error) => {
        window.alert("Falha ao criar viagem.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name='name'>Título da Viagem</label>
        <input
          value={form.name}
          onChange={handleInputChange}
          name='name'
          type='text'
          required
        />
        <label name='planet'>Planeta: </label>
        <select onChange={handleInputChange} name='planet' required>
          <option value='selecione'>Selecione</option>
          <option value='mercurio'>Mercúrio</option>
          <option value='venus'>Vênus</option>
          <option value='marte'>Marte</option>
          <option value='jupiter'>Júpiter</option>
          <option value='saturno'>Saturno</option>
          <option value='urano'>Urano</option>
          <option value='netuno'>Netuno</option>
          <option value='plutao'>Plutão</option>
        </select>
        <label name='date'>Data da viagem: </label>
        <input
          value={form.date}
          onChange={handleInputChange}
          name='date'
          type='date'
          required
        />
        <label name='durationInDays'>Duração da Viagem: </label>
        <input
          value={form.durationInDays}
          onChange={handleInputChange}
          name='durationInDays'
          type='number'
          required
        />
        <label name='description'>Descrição: </label>
        <textarea
          value={form.description}
          onChange={handleInputChange}
          name='description'
          required
        />
        <button>Criar</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
