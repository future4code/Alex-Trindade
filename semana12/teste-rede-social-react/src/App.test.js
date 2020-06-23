import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const createPost = (placeholder, text) => {
  fireEvent.change(placeholder("Novo post"), {
    target: {
      value: "Nova Foto de Maria",
    },
  });

  fireEvent.click(text(/Adicionar/));
};

describe("Ao criar um novo post", () => {
  test("Deve ser renderizado o nome do post, botão curtir e botão apagar", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    createPost(getByPlaceholderText, getByText);

    expect(getByText(/Adicionar/)).toBeInTheDocument();
    expect(getByPlaceholderText("Novo post")).toBeInTheDocument();
    expect(getByPlaceholderText("Novo post")).toHaveValue("Nova Foto de Maria");
    expect(getByText(/Nova Foto de Maria/)).toBeInTheDocument();
    expect(getByText(/Curtir/)).toBeInTheDocument();
    expect(getByText(/Apagar/)).toBeInTheDocument();
  });
});

describe("Ao clicar em curtir", () => {
  test("O texto do botão deve ser trocado para descurtir", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    createPost(getByPlaceholderText, getByText);

    fireEvent.click(getByText(/Curtir/));

    expect(getByText(/Descurtir/)).toBeInTheDocument();
  });
});

describe("Ao clicar em apagar", () => {
  test("O post deve ser apagado", () => {
    const { getByPlaceholderText, getByText, queryByTestId } = render(<App />);

    createPost(getByPlaceholderText, getByText);

    fireEvent.click(getByText(/Apagar/));

    expect(
      queryByTestId(document.documentElement, "teste")
    ).not.toBeInTheDocument();
  });
});
