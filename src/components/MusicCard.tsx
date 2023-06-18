import { useEffect, useState } from 'react';
import { SongType } from '../types';
import Checked from '../images/checked_heart.png';
import emptyChecked from '../images/empty_heart.png';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type SongListProps = {
  songList: SongType;
  favoriteMusicsList: SongType[];
};

function MusicCard({ songList, favoriteMusicsList }: SongListProps) {
  const { trackName, previewUrl, trackId } = songList;
  const [checked, setChecked] = useState(false);
  /*   const [savedSongFavorite, setSavedSongFavorite] = useState<SongType[]>([]); */

  const handleclick = async () => {
    setChecked(!checked);
    if (!checked) {
      await addSong({ trackId, trackName, previewUrl });
      /*       setSavedSongFavorite([...savedSongFavorite, saveSong]); */
    } else {
      await removeSong({ trackId, trackName, previewUrl });
    }
  };

  useEffect(() => {
    const favoriteMusics = (favoriteMusicsList.find(
      (songFavorite) => songFavorite.trackId === trackId,
    ));
    if (favoriteMusics) {
      setChecked(true);
    }
  }, [favoriteMusicsList, trackId]);

  return (
    <>
      <h4>{trackName}</h4>
      <label htmlFor={ String(trackId) } data-testid={ `checkbox-music-${trackId}` }>
        <input
          type="checkbox"
          name="favorite"
          id={ String(trackId) }
          checked={ checked }
          onClick={ handleclick }
        />
        {
          (checked)
            ? (<img src={ Checked } alt="favorite" />)
            : (<img src={ emptyChecked } alt="favorite" />)
        }
      </label>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento

        {' '}
        <code>audio</code>
      </audio>
    </>
  );
}
export default MusicCard;
