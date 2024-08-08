import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/cadastro.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const validacaoSchema = yup.object({
  nome: yup.string().required("The name field cannot be empty"),
  senha: yup
    .string()
    .min(4, "The password must be at least 4 characters long")
    .max(10, "The password must have a maximum of 10 characters")
    .required("The password field cannot be empty"),
});

const Cadastro = () => {
  const [usuario, setUsuario] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/usuarios")
  //     .then((resultado) => console.log(resultado));
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoSchema), //connecting yup with react-hook-form
  });

  const navigate = useNavigate();

  const valida = (data) => {
    axios
      .post("http://localhost:3000/usuarios", {
        login: data.nome,
        senha: data.senha,
      })
      .then((resultado) => {
        console.log(resultado.data);
        if (resultado.data.includes("success")) {
          alert("User registered successfully");
        } else {
          alert("Unregistered user");
        }
      });
  };

  return (
    <>
      <div className="login">
        <h1 className="tituloCadastro">Faça seu Cadastro</h1>
        <form onSubmit={handleSubmit(valida)} className="formulario">
          <div className="formularioContainer">
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="nome">
                Nome:
              </label>
              <input
                className="inputCadastro"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                {...register("nome")}
              />
              <p>{errors.nome?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="senha">
                Senha:
              </label>
              <input
                className="inputCadastro"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                {...register("senha")}
              />
              <p>{errors.senha?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="admin">
                Administrador:
              </label>
              <select name="admin" id="admin" {...register("admin")}>
                <option value="s">Sim</option>
                <option value="n">Não</option>
              </select>
            </div>
            <div>
              <button className="botao" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
