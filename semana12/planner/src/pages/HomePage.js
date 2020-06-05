import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  FormHeader,
  Input,
  Container,
  Button,
  Content,
  ContainerDay,
  ContainerButtons,
} from "./HomeStyled";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

const HomePage = () => {
  const { form, onChange, resetForm } = useForm({
    task: "",
    day: "domingo",
    time: "",
  });
  const [arrayTarefas, setArrayTarefas] = useState([]);
  let [mostraEditar, setMostraEditar] = useState(false);
  const [InputTarefa, setInputTarefa] = useState("");
  const [InputHora, setInputHora] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const obterTarefas = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade"
      )
      .then((resposta) => {
        setArrayTarefas(resposta.data);
      })
      .catch((erro) => {
        window.alert("Erro!");
      });
  };

  const criarTarefa = (event) => {
    event.preventDefault();

    const body = {
      task: form.task,
      day: form.day,
      time: form.time,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade",
        body
      )
      .then((resposta) => {
        window.alert("Tarefa Criada.");
        resetForm();
        obterTarefas();
      })
      .catch((erro) => {
        window.alert("Falha ao criar tarefa.");
      });
  };

  const excluirTarefa = (idTarefa) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade/${idTarefa}`
      )
      .then((resposta) => {
        window.alert("Tarefa excluída.");
        obterTarefas();
      })
      .catch((erro) => {
        window.alert("Erro ao excluir tarefa.");
      });
  };

  const clicaEditar = () => {
    setMostraEditar(!mostraEditar);
  };

  const editarTarefa = (idTarefa) => {
    const body = {
      task: InputTarefa,
      time: InputHora,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-trindade/${idTarefa}`,
        body
      )
      .then((resposta) => {
        window.alert("Alterado com sucesso.");
        setMostraEditar(false);
        obterTarefas();
      })
      .catch((erro) => {
        window.alert("Erro ao editar.");
      });
  };

  useEffect(() => {
    obterTarefas();
  }, []);

  const domingo = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "domingo";
  });

  const segunda = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "segunda";
  });

  const terca = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "terca";
  });

  const quarta = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "quarta";
  });

  const quinta = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "quinta";
  });

  const sexta = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "sexta";
  });

  const sabado = arrayTarefas.filter((tarefas) => {
    return tarefas.day === "sabado";
  });

  return (
    <Container>
      <Header>
        <FormHeader onSubmit={criarTarefa}>
          <Input
            placeholder='Nova Tarefa'
            value={form.task}
            onChange={handleInputChange}
            name='task'
          />
          <div>
            <label htmlFor='day'>Dia:</label>
            <select value={form.day} onChange={handleInputChange} name='day'>
              <option value='domingo'>Domingo</option>
              <option value='segunda'>Segunda</option>
              <option value='terça'>Terça</option>
              <option value='quarta'>Quarta</option>
              <option value='quinta'>Quinta</option>
              <option value='sexta'>Sexta</option>
              <option value='sabado'>Sábado</option>
            </select>
          </div>
          <div>
            <label>Horário</label>
            <Input
              type='time'
              value={form.time}
              onChange={handleInputChange}
              name='time'
            />
          </div>
          <Button>Criar Tarefa</Button>
        </FormHeader>
      </Header>
      <Content>
        <ContainerDay>
          <h1>Domingo</h1>
          <ul>
            {domingo.map((tarefa) => {
              return (
                <div>
                  <li>
                    {tarefa.task + " às " + tarefa.time}
                    <ContainerButtons>
                      <Button onClick={clicaEditar}>Editar</Button>
                      <Button onClick={() => excluirTarefa(tarefa.id)}>
                        Excluir
                      </Button>
                    </ContainerButtons>
                  </li>
                  {mostraEditar === true ? (
                    <form onSubmit={() => editarTarefa(tarefa.id)}>
                      <Input
                        placeholder='Nova Tarefa'
                        value={InputTarefa}
                        onChange={(event) => setInputTarefa(event.target.value)}
                        name='task'
                      />
                      <label>Horário</label>
                      <Input
                        type='time'
                        value={InputHora}
                        onChange={(event) => setInputHora(event.target.value)}
                        name='time'
                      />
                      <Button>OK</Button>
                    </form>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Segunda - Feira</h1>
          <ul>
            {segunda.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Terça - Feira</h1>
          <ul>
            {terca.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Quarta - Feira</h1>
          <ul>
            {quarta.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Quinta - Feira</h1>
          <ul>
            {quinta.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Sexta - Feira</h1>
          <ul>
            {sexta.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
        <ContainerDay>
          <h1>Sábado</h1>
          <ul>
            {sabado.map((tarefa) => {
              return (
                <li>
                  {tarefa.task + " às " + tarefa.time}
                  <div>
                    <Button onClick={clicaEditar}>Editar</Button>
                    {mostraEditar === true ? (
                      <form onSubmit={() => editarTarefa(tarefa.id)}>
                        <Input
                          placeholder='Nova Tarefa'
                          value={InputTarefa}
                          onChange={(event) =>
                            setInputTarefa(event.target.value)
                          }
                          name='task'
                        />
                        <label>Horário</label>
                        <Input
                          type='time'
                          value={InputHora}
                          onChange={(event) => setInputHora(event.target.value)}
                          name='time'
                        />
                        <Button>OK</Button>
                      </form>
                    ) : (
                      <div></div>
                    )}
                    <Button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </ContainerDay>
      </Content>
    </Container>
  );
};

export default HomePage;
