import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/loading';

function Login() {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [userName, setUsername] = useState({ name: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsername({ ...userName,
      [name]: value,
    });
    if (userName.name.length >= 2) {
      setDisabledBtn(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await createUser(userName);
    setLoading(false);
    navigate('/search');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="">
        Nome:
        <input
          data-testid="login-name-input"
          type="text"
          value={ userName.name }
          name="name"
          onChange={ handleNameInput }
        />
      </label>
      <button
        data-testid="login-submit-button"
        disabled={ disabledBtn }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
