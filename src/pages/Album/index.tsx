import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../../types';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/loading';
import MusicCard from '../../components/MusicCard';

function Album() {
  const [loading, setLoading] = useState(false);
  const [getSongState, setGetSongState] = useState<SongType[]>([]);
  const [getAlbumState, setGetAlbumState] = useState<AlbumType>();

  const { id } = useParams<string>();

  useEffect(() => {
    const musicsData = async () => {
      try {
        setLoading(true);
        const getMusicsList = (await getMusics(String(id)));

        if (getMusicsList) {
          const [albumType, ...SongsType] = getMusicsList;
          setGetAlbumState(albumType);
          setGetSongState(SongsType);
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
          />
        ))}
      </div>
    </>
  );
}
export default Album;
