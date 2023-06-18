import { SongType } from '../types';

type SongListProps = {
  songList: SongType;
};

function MusicCard({ songList }: SongListProps) {
  const { trackName, previewUrl } = songList;
  return (
    <>
      <h4>{trackName}</h4>
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
