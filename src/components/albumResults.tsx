import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type AlbumProp = {
  albuns: AlbumType;
};

function AlbumResults({ albuns }: AlbumProp) {
  return (
    <section>
      <Link
        to={ `/album/${albuns.collectionId}` }
        data-testid={ `link-to-album-${albuns.collectionId}` }
      >
        <img src={ albuns.artworkUrl100 } alt="" />
        <h3>{ albuns.collectionName }</h3>
        <h4>{ albuns.artistName }</h4>
        <h4>{ `Lançado em : ${albuns.releaseDate}` }</h4>
      </Link>
    </section>
  );
}

export default AlbumResults;
