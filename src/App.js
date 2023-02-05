import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Board from './Components/Board';
import HowToPlay from './Components/HowToPlay';
import './Style.css';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='app'>
      <div>
      <button  className="button" onClick={toggleModal}>Nasıl Oynanır?</button>
      {isModalOpen && (<HowToPlay bool={isModalOpen} setBool={setIsModalOpen}/>
      )}
    </div>
      <p>Mikrofon: {listening ? 'Açık' : 'Kapalı'}</p>
      <button className="start-animated" onClick={SpeechRecognition.startListening}>Mikrofon Aç</button>
      <button className="stop-animated" onClick={SpeechRecognition.stopListening}>Mikrofon Kapa</button>
      <button className="reset-animated" onClick={resetTranscript}>Mikrofon resetle</button>
      <p>Söylenen kelimeler: {transcript}</p>
      <Board transcript={transcript} />
    </div>
  );
};
export default App;