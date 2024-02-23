import './App.css';
import { PoetryCard } from './PoetryCard';

function App() {
  return (
    <div className="App">
      <div className="PoetrySection">
        <header className="App-header">
          Poetry
        </header>
        <hr></hr>
        <PoetryCard
          date="2/23/24"
          poetry={"\"Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the LORD with a pure heart.  For we do not have a high priest who is able to feel sympathy for our weaknesses, but we have one who has been tempted in every way just as we are.  Yet HE did not sin.  Let us then approach GOD's throne of grace with confidence, so that we may recieve mercy and find grace to help us in our time of need.  So if you think you are standing firm, be careful so that you don't fall. No temptation have overtaken you, except what is common to man kind, and GOD is faithful.  HE will not let you be tempted beyond what you can bare.  But when you are tempted, HE will also provide a way out, so you can endure it.\""} 
        />
        <PoetryCard date="2/23/24" poetry={"\"Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.\""} />
        <PoetryCard date="2/22/24" poetry={"\"Do not pray for Easy Lives, pray to be Stronger Men\" ~ John F. Kennedy"} />
        <PoetryCard date="2/22/24" poetry={"Launch Date"} />
      </div>
    </div>
  );
}

export default App;
