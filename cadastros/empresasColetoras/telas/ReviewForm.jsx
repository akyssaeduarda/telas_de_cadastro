import React from "react";

const ReviewForm = ({dados}) => {
  return (
    <div className="conteiner-useForm2">

      <div className="form-control">
        <label htmlFor="linklogo">
          LINK DA SUA LOGO
        </label>

        <input
          type="text"
          name="linklogo"
          id="linklogo"
          placeholder="Digite o link da sua logo"
          required
        />
      </div>
      <div className='form-control-um'>
        <div className="form-control">
          <label htmlFor="instagram">
            INSTAGRAM
          </label>

          <input
            type="text"
            name="instagram"
            id="instagram"
            placeholder="Digite a sua conta do Instagram"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="linkedin">
            LINKEDIN
          </label>

          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Digite a sua conta do Linkedin"
            required
          />
        </div>

      </div>

      <div className='form-control-dois'>
        <div className="form-control">
          <label htmlFor="whatsapp1">
            WHATSAPP
          </label>

          <input
            type="text"
            name="whatsapp1"
            id="whatsapp1"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="whatsapp2">
            WHATSAPP
          </label>

          <input
            type="text"
            name="whatsapp2"
            id="whatsapp2"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
      </div>
    </div>

  )
}
export default ReviewForm