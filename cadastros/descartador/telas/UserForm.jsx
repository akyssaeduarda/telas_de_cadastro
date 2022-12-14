import React from "react";
import { ImFacebook2 } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';

const UserForm = ({ dados, updadeFieldHandler }) => {
  return (
    <div className="conteiner-useForm">

      <div className='form-control-um'>
        <div className="form-control">
          <label htmlFor="Nome">
            NOME
          </label>

          <input
            type="text"
            name="nome"
            id="Nome"
            placeholder="Digite o seu nome"
            required
            value={dados.nome || ""}
            onChange={(e) => updadeFieldHandler("nome", e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="sobrenome">
            SOBRENOME
          </label>

          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            placeholder="Digite o seu sobrenome"
            required
          />
        </div>
      </div>

      <div className='form-control-dois'>
        <div  id="email1"className="form-control">
          <label htmlFor="email">
            E-MAIL
          </label>

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o seu email"
            required
          />
        </div>
       
        <div  id="senha1" className="form-control">
          <label htmlFor="senha">
            SENHA
          </label>

          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite a sua senha"
            required
          />
        </div>
      </div>
   
      <div className="section-app">
        <p className="txt-app">Ou cadastre-se pelo Facebook ou pela conta Google</p>
        
        <div className="cadastro-apps">
          <button className="btm-face"> 
            <ImFacebook2 className="icon-face"/>
          </button>
          
          <button className="btm-google">
            <FcGoogle className="icon-google"/>
          </button>
         
        </div>
      </div>
    
   
    </div>

  )
}
export default UserForm