import { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { SongType } from '../../types';
import Loading from '../../components/loading';
import MusicCard from '../../components/MusicCard';

function Favorites() {
  const [favoritesSongsList, setFavoritesSongsList] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const listSongs = async () => {
      setLoading(true);
      const favoriteSongs = await getFavoriteSongs();
      setLoading(false);
      if (favoriteSongs) {
        setFavoritesSongsList(favoriteSongs);
      }
    };
    listSongs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {
        favoritesSongsList.map((songFavorite) => (
          <MusicCard
            key={ songFavorite.trackId }
            songList={ songFavorite }
            favoriteMusicsList={ favoritesSongsList }
          />))
      }
    </div>
  );
}
export default Favorites;
