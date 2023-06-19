import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../services/userAPI';
import Profile, { INICIAL_STATE } from '../Profile';
import Loading from '../../components/loading';
import FormProfileUser from '../../components/formProfile';
import { UserType } from '../../types';

function ProfileEdit() {
  const [user, setUser] = useState<UserType>(INICIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [formUser, setFormUser] = useState<UserType>(INICIAL_STATE);

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
    setFormUser({ ...user });
    setLoading(true);
    if (formUser) {
      await updateUser(formUser);
      setLoading(false);
      navigate('/profile');
    }
    console.log(formUser);
  };
  console.log(user);
  return (
    <FormProfileUser
      userForm={ user }
      onChange={ handleOnChange }
      validate={ validForm }
      onSubmit={ handleSubmit }
    />
  );
}

export default ProfileEdit;
