import { useState } from 'react';
import { SongType } from '../types';
import Checked from '../images/checked_heart.png';
import emptyChecked from '../images/empty_heart.png';

type SongListProps = {
  songList: SongType;
};

function MusicCard({ songList }: SongListProps) {
  const { trackName, previewUrl, trackId } = songList;
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h4>{trackName}</h4>
      <label htmlFor={ String(trackId) } data-testid={ `checkbox-music-${trackId}` }>
        <input
          type="checkbox"
          name="favorite"
          id={ String(trackId) }
          checked={ checked }
          onClick={ () => setChecked(!checked) }
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
