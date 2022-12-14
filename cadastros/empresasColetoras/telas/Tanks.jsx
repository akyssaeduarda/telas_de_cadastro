import React from "react";

const TanksForm = ({dados}) => {
  return (
    <div className="conteiner-useForm3">


      <div className="form-control">
        <label htmlFor="nomeResponsavel">
          NOME DO RESPONSÁVEL
        </label>

        <input
          type="text"
          name="nomeResponsavel"
          id="nomeResponsavel"
          placeholder="Digite o nome do responsável"
          required
        />
      </div>
      <div className='form-control-um3'>
        <div className="form-control3">
          <label htmlFor="departamento">
            DEPARTAMENTO
          </label>

          <input
            type="text"
            name="departamento"
            id="departamento"
            placeholder="Em qual departamento você trabalha?"
            required
          />
        </div>
        <div className="form-control3">
          <label htmlFor="whatsappResponsavel">
            WHATSAPP
          </label>

          <input
            type="text"
            name="whatsappResponsavel"
            id="whatsappResponsavel"
            placeholder="Digite o seu whatsapp empresarial"
            required
          />
        </div>

        <div className="form-control3">
          <label htmlFor="emailResponsavel">
            EMAIL
          </label>

          <input
            type="text"
            name="cpfResponsavel"
            id="emailResponsavel"
            placeholder="Digite o seu e-mail"
            required
          />
        </div>
        <div className="form-control3">
          <label htmlFor="linkedinResponsavel">
            LINKEDIN
          </label>

          <input
            type="text"
            name="linkedinResponsavel"
            id="linkedinResponsavel"
            placeholder="Digite a sua conta do linkedin"
            required
          />
        </div>
       </div>
      
      <div className="form-control">
        <label htmlFor="senhaResponsavel">
          SENHA
        </label>

        <input
          type="password"
          name="senhaResponsavel"
          id="senhaResponsavel"
          placeholder="Digite a sua senha"
          required
        />
      </div>
      
    </div>

  )
}
export default TanksForm