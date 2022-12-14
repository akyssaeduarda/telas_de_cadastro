import React from "react";

const UserForm = ({dados, updadeFieldHandler}) => {
  return (
    <div className="conteiner-useForm">

      <div className='form-control-um'>
        <div className="form-control">
          <label htmlFor="razaoSocial">
            RAZÃO SOCIAL
          </label>

          <input
            type="text"
            name="razaoSocial"
            id="razaosocial"
            placeholder="Digite a razão social da sua empresa"
            required
            value={dados.razaoSocial || "" }
            onChange={(e) => updadeFieldHandler("razaoSocial", e.target.value) }
          />
        </div>

        <div className="form-control">
          <label htmlFor="cep">
            CEP 
          </label>

          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="Digite o seu CEP"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="cnpj">
            CNPJ 
          </label>

          <input
            type="text"
            name="cnpj"
            id="cnpj"
            placeholder="Digite o seu CNPJ"
            required
          />
        </div>

      </div>
      
      <div className='form-control-dois'>
        <div className="form-control">
          <label htmlFor="razaoJuridica">
            RAZÃO JURÍDICA 
          </label>

          <input
            type="text"
            name="razaoJuridica"
            id="razaojuridica"
            placeholder="Digite a razão jurídica da sua empresa"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="complemento">
            COMPLEMENTO 
          </label>

          <input
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Digite o complemento da usa localização"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="cnae">
            CNAE
          </label>

          <input
            type="text"
            name="cnae"
            id="cnae"
            placeholder="Digite o seu CNAE"
            required
          />
        </div>
      </div>

      <div className="form-email">
        <label htmlFor="email">
          E-MAIL
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </div>

  )
}
export default UserForm