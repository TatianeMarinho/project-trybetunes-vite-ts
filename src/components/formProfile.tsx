import { UserType } from '../types';

type FormProfileProps = {
  userForm: UserType;
  validate: () => boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEvent<HTMLFormElement>;
};

function FormProfileUser({
  userForm, onChange, validate, handleSubmit }: FormProfileProps) {
  return (
    <form onSubmit={ () => handleSubmit }>
      <label>
        Image:
        <input
          type="url"
          name="image"
          value={ userForm.image }
          onChange={ onChange }
          placeholder="insira sua url da imagem aqui"
          data-testid="edit-input-image"
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={ userForm.name }
          onChange={ onChange }
          placeholder="insira como prefere ser chamado"
          data-testid="edit-input-name"
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={ userForm.email }
          onChange={ onChange }
          placeholder="insira um email válido"
          data-testid="edit-input-email"
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          name="description"
          value={ userForm.description }
          onChange={ onChange }
          maxLength={ 300 }
          placeholder="nos conte sobre você"
          data-testid="edit-input-description"
        />
      </label>
      <button
        type="submit"
        disabled={ !validate() }
        data-testid="edit-button-save"
      >
        Salvar
      </button>
    </form>
  );
}

export default FormProfileUser;
