import Example from 'src/components/Example/Example';
import Container from 'src/components/common/Container/Container';
import Section from 'src/components/common/Section/Section';

function App() {
  return (
    <div className="App">
      <h1>Create React App (TS) Tech Test Starter</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <Container>
        <Section>
          <Example />
        </Section>
      </Container>



    </div>
  );
}

export default App;
