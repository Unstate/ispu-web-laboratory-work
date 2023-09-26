import React  from 'react';
import siu from '../assets/ronaldo-siuuuu.mp3'

const AudioPlayer: React.FC = () => {

  const audioUrl = siu;

  return (
    <div className='flex flex-col items-center justify-center gap-4 text-lg'>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Ваш браузер не поддерживает проигрывание аудио.
      </audio>
    </div>
  );
};

export default AudioPlayer;
