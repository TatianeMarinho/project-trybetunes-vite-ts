import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/loading';
import CardUserName from '../../components/cardUserName';

export const INICIAL_STATE = {
  name: '',
  email: '',
  image: '',
  description: '',
};

export function Profile() {
  const [userName, setUserName] = useState(INICIAL_STATE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = async () => {
      try {
        setLoading(true);
        const awaitUserName = await getUser();
        if (awaitUserName) {
          setUserName(awaitUserName);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    user();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <CardUserName user={ userName } />
  );
}

export default Profile;
