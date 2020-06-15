import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from "axios";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();
axios.put = jest.fn().mockResolvedValue();

test("Verifica se formulário é renderizado", async () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

  expect(getByPlaceholderText("Nova Tarefa")).toBeInTheDocument();
  expect(getByTestId("selecioneDia")).toBeInTheDocument();
  expect(getByTestId("hora")).toBeInTheDocument();
  expect(getByText(/Criar Tarefa/)).toBeInTheDocument();

  await wait();
});

test("Verifica se a tarefa é criada e limpa os campos", async () => {
  axios.post = jest.fn().mockResolvedValue();

  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

  await userEvent.type(getByPlaceholderText("Nova Tarefa"), "Comprar maçã");
  expect(getByPlaceholderText("Nova Tarefa")).toHaveValue("Comprar maçã");

  userEvent.selectOptions(getByTestId("selecioneDia"), "quarta");
  expect(getByTestId("selecioneDia")).toHaveValue("quarta");

  await userEvent.type(getByTestId("hora"), "10:00");
  expect(getByTestId("hora")).toHaveValue("10:00");

  userEvent.click(getByText(/Criar Tarefa/));

  expect(axios.post).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade",
    {
      day: "quarta",
      task: "Comprar maçã",
      time: "10:00",
    }
  );

  await wait(() => expect(getByPlaceholderText("Nova Tarefa")).toHaveValue(""));
  await wait(() => expect(getByTestId("selecioneDia")).toHaveValue("domingo"));
  await wait(() => expect(getByTestId("hora")).toHaveValue(""));
});

test("Verifica se aparece atividade", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        task: "comprar queijo",
        day: "segunda",
        time: "09:00",
        id: "IBOwd3Dt14YHG13Qowif",
      },
    ],
  });

  const { findByText } = render(<App />);

  const tarefa = await findByText("comprar queijo às 09:00");
  expect(tarefa).toBeInTheDocument();

  await wait(() => expect(axios.get).toHaveBeenCalledTimes(1));
});

test("Verifica se tarefa foi excluida", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        task: "comprar queijo",
        day: "domingo",
        time: "09:00",
        id: "IBOwd3Dt14YHG13Qowif",
      },
    ],
  });

  const { getByTestId } = render(<App />);

  userEvent.click(getByTestId("excluir"));

  expect(axios.delete).toHaveBeenCalledWith(
    `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade/IBOwd3Dt14YHG13Qowif`
  );
});
