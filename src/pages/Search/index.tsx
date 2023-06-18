import { useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/loading';
import AlbumResults from '../../components/albumResults';
import { AlbumType } from '../../types';

const artistInicial = {
  artist: '',
};

function Search() {
  const [artistName, setArtistName] = useState(artistInicial);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [albumsList, setAlbumsList] = useState<AlbumType[]>([]);
  const [messageArtist, setMessageArtist] = useState('Resultado de álbuns de: ');

  const handleArtistInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setArtistName({ ...artistName, [name]: value });

    if (artistName.artist.length >= 1) {
      setDisabledBtn(false);
    }
  };

  const handleSubmitArtist = async () => {
    try {
      setLoading(true);
      const result = await searchAlbumsAPI(artistName.artist);
      if (result) {
        setAlbumsList(result);
        setMessageArtist(`Resultado de álbuns de: ${artistName.artist}`);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
    setArtistName(artistInicial);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            name="artist"
            placeholder="Nome do Artista"
            value={ artistName.artist }
            onChange={ handleArtistInput }
            data-testid="search-artist-input"
          />
        </label>
        <button
          disabled={ disabledBtn }
          onClick={ handleSubmitArtist }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </form>
      <div>
        {
          (albumsList.length > 0) ? (
            <div>
              <h1>
                { messageArtist }
              </h1>
              {
                albumsList.map((album) => (
                  <AlbumResults
                    albuns={ album }
                    key={ album.collectionId }
                  />))
              }
            </div>)
            : <h1>Nenhum álbum foi encontrado</h1>
        }
      </div>
    </>
  );
}

export default Search;
