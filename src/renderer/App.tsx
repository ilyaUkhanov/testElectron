import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { useEffect } from 'react';

const Hello = () => {
  function createFile() {
    window.fs.writeFileSync('./test.txt', 'Content_For_Writing');
  }

  useEffect(() => {
      // let watch = window.chokidar.watch('.');
      // console.log(watch);
      //
      // watch.on('all', (event, path) => {
      //     console.log(event, path);
      // });
  }, []);

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <button type="button" onClick={createFile}>
          <span> Créer fichier </span>
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
