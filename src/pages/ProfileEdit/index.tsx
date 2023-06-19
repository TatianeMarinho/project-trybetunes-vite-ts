import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../services/userAPI';
import { INICIAL_STATE } from '../Profile';
import Loading from '../../components/loading';
import { UserType } from '../../types';

function ProfileEdit() {
  const [user, setUser] = useState<UserType>(INICIAL_STATE);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const awaitUserName = await getUser();
        if (awaitUserName) {
          setUser(awaitUserName);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    data();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const validForm = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const validName = user.name.length > 3;
    const validEmail = user.email.length > 0 && (new RegExp(regexEmail).test);
    const validDescrption = user.description.length > 0;
    return validName && validEmail && validDescrption;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await updateUser(user);
    setLoading(false);
    navigate('/profile');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={ user.image }
          onChange={ handleOnChange }
          placeholder="insira sua url da imagem aqui"
          data-testid="edit-input-image"
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={ user.name }
          onChange={ handleOnChange }
          placeholder="insira como prefere ser chamado"
          data-testid="edit-input-name"
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={ user.email }
          onChange={ handleOnChange }
          placeholder="insira um email válido"
          data-testid="edit-input-email"
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          name="description"
          value={ user.description }
          onChange={ handleOnChange }
          maxLength={ 300 }
          placeholder="nos conte sobre você"
          data-testid="edit-input-description"
        />
      </label>
      <button
        type="submit"
        disabled={ !validForm() }
        data-testid="edit-button-save"
      >
        Salvar
      </button>
    </form>
  );
}

export default ProfileEdit;
