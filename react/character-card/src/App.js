import './App.css';
import CharacterCard from './CharacterCard';
import HarryPotter from './Harry_Potter_character_poster.jpg'
import Hermione from './Hermione1.webp';
import Ron from './ron.webp';
/* import characters from './CharacterData'; */

function App() {
  return (
    <div>
      <CharacterCard
        name="Harry Potter"
        image={HarryPotter}
        description="The Boy Who Lived"
      />
      <CharacterCard
        name="Hermione Granger"
        image={Hermione}
        description="The Brightest Witch of Her Age"
      />
      <CharacterCard
        name="Ron Weasley"
        image={Ron}
        description="The Boy Who Had No Choice"
      />
    </div>
    /*<div>
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          name={character.name}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>*/
  );
}

export default App;
