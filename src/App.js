import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialUrl = 'https://rickandmortyapi.com/api/character';

	const fetchCharacters = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((personaje) => {
        setCharacters(personaje.results)
        setInfo(personaje.info)
      })
			.catch(console.log);
	};

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

	useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

	return (
		<>
			<Navbar brand="Rick and Morty App" />
			<div className="container mt-5">
				<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
				<Characters characters={characters} />
				<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
			</div>
		</>
	);
}

export default App;
