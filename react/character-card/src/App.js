import './App.css';
import CharacterCard from './CharacterCard';
import { characters } from './CharacterData';

function App() {
  return (
    <div>
      {characters.map(character => (
        <CharacterCard
          name={character.name}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>
  );
}

export default App;
