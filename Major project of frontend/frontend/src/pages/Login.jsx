import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/login.css";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
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

const Login = () => {
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
      .post("http://localhost:3000/login", {
        login: data.nome,
        senha: data.senha,
      })
      .then((resultado) => {
        console.log(resultado.data);
        if (resultado.data?.admin == "s") {
          localStorage.setItem("usuario", JSON.stringify(resultado.data));
          navigate("/edicao-adm");
        } else if (resultado.data?.admin == "n") {
          localStorage.setItem("usuario", JSON.stringify(resultado.data));
          navigate("/produtos");
        } else {
          alert("Unregistered user");
        }
      });
  };

  return (
    <>
      <div className="login">
        <h1 className="tituloLogin">Faça seu Login</h1>
        <form onSubmit={handleSubmit(valida)} className="formulario">
          <div className="formularioContainer">
            <div className="inputContainer">
              <label className="nomeLogin" htmlFor="nome">
                Nome:
              </label>
              <input
                className="inputLogin"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                {...register("nome")}
              />
              <p>{errors.nome?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeLogin" htmlFor="senha">
                Senha:
              </label>
              <input
                className="inputLogin"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                {...register("senha")}
              />
              <p>{errors.senha?.message}</p>
            </div>
            <div>
              <button className="botao" type="submit">
                Entrar
              </button>
            </div>
            <div className="container-cadastro">
              <span className="titulo-cadastro">Don't have a registration?</span>
              <span className="titulo-cadastro">
              Cadastre-se agora mesmo e tenha acesso a nossas deliciosas
              pizzas!
              </span>
              <Link to="/cadastro">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
