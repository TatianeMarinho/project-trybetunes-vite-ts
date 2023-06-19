import { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { SongType } from '../../types';
import MusicCard from '../../components/MusicCard';

function Favorites() {
  const [favoritesSongsList, setFavoritesSongsList] = useState<SongType[]>([]);

  useEffect(() => {
    const listSongs = async () => {
      setFavoritesSongsList(await getFavoriteSongs());
    };
    listSongs();
  }, [favoritesSongsList]);

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
