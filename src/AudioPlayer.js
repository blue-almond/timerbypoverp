import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const AudioPlayer = ({ file }) => {
  const { stop } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: true,
    onend: () => console.log('sound has ended!'),
  });

  return (
    <div className='phantom'>
      {setTimeout(function () {
        stop();
      }, 4000)}
    </div>
  );
};
export default AudioPlayer;
