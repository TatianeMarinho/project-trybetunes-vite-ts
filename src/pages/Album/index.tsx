import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../../types';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/loading';
import MusicCard from '../../components/MusicCard';

function Album() {
  const [loading, setLoading] = useState(false);
  const [getSongState, setGetSongState] = useState<SongType[]>([]);
  const [getAlbumState, setGetAlbumState] = useState<AlbumType>();
  const [getFavoriteSongsState, setGetFavoriteSongsState] = useState<SongType[]>([]);

  const { id } = useParams<string>();

  useEffect(() => {
    const musicsData = async () => {
      try {
        setLoading(true);
        const favoriteSongs = await getFavoriteSongs();
        const getMusicsList = (await getMusics(String(id)));

        if (getMusicsList) {
          const [albumType, ...SongsType] = getMusicsList;
          setGetAlbumState(albumType);
          setGetSongState(SongsType);
          setGetFavoriteSongsState(favoriteSongs);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    musicsData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <img
          src={ getAlbumState?.artworkUrl100 }
          alt={ getAlbumState?.collectionName }
        />
        <h2 data-testid="artist-name">{getAlbumState?.artistName}</h2>
        <h3 data-testid="album-name">{getAlbumState?.collectionName}</h3>
        <h4>{getAlbumState?.releaseDate}</h4>
      </div>
      <div>
        {getSongState.map((song) => (
          <MusicCard
            songList={ song }
            key={ Number(song.trackId) }
            favoriteMusicsList={ getFavoriteSongsState }
          />
        ))}
      </div>
    </>
  );
}
export default Album;
