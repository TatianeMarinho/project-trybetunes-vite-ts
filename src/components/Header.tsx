import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import Loading from './loading';

function Header() {
  const [userName, setUserName] = useState<UserType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const recoverUser = async () => {
      try {
        setLoading(true);
        const recoverUserName = await getUser();
        if (recoverUserName) {
          setUserName(recoverUserName);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    recoverUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <header data-testid="header-component">
      <span data-testid="header-user-name">{ userName?.name }</span>
      <nav>
        <NavLink to="/search" data-testid="link-to-search">Pesquisa</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favoritas</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Perfil</NavLink>
      </nav>
    </header>
  );
}
export default Header;
