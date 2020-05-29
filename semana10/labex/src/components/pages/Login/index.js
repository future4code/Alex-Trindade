import React from "react";
import axios from "axios";
import { useForm } from "../../Hooks";

const Login = (props) => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/login`,
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        props.history.push("/viagens");
      })
      .catch((error) => {
        window.alert("Falha ao fazer login.");
      });
  };

  return (
    <main>
      <section>
        logo
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={form.email}
            onChange={handleInputChange}
            name='email'
            type='email'
            placeholder='E-mail'
            required
          />
          <input
            value={form.password}
            onChange={handleInputChange}
            name='password'
            type='password'
            minLength='6'
            placeholder='Senha'
            required
          />
          <button>Entrar</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
