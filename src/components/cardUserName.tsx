import { Link } from 'react-router-dom';
import { UserType } from '../types';

type CardProps = {
  user: UserType;
};

function CardUserName({ user }: CardProps) {
  return (
    <div>
      <span>
        <img src={ user.image } alt={ user.name } data-testid="profile-image" />
      </span>
      <span>
        <Link to="/profile/edit">
          Editar perfil
        </Link>
      </span>
      <span>
        <h4>Nome</h4>
        <p>{ user.name }</p>
      </span>
      <span>
        <h4>E-mail</h4>
        <p>{ user.email }</p>
      </span>
      <span>
        <h4>Descrição</h4>
        <p>{ user.description }</p>
      </span>
    </div>
  );
}
export default CardUserName;
