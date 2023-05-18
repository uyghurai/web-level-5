import './App.css';
import CharacterCard from './CharacterCard';
import characters from './CharacterData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CharacterSlide from './CharacterSlide';

function App() {
  return (
    <Container>
      <Row>
        <CharacterSlide />
      </Row>
      <Row>
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            name={character.name}
            image={character.image}
            description={character.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
