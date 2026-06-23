import './App.css'
import Card from './Card.jsx';

function App() {
 
  return(
    <>
    <Card name="Rohan" branch="Computer Science" marks={98} />
    <Card name="Parth" branch="Information Technology" marks={93} />
    <Card name="Raunak" branch="AI/ML" marks={90} />
    </>
  );
}
export default App