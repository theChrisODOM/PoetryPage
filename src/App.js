import './App.css';
import { PoetryCard } from './PoetryCard';

function App() {
  return (
    <div className="App">
      <div className="PoetrySection">
        <header className="App-header">
          @csodom Poetry + Quotes
        </header>
        <hr></hr>
          A home for all types of poems and important quotes, dated when I found them, and cited when possible.
        <hr></hr>
        <PoetryCard date="2/23/24" poetry={"A man who blames GOD for not answering his prayers immediately, needs to thank GOD for not punishing him for his sins immediately."} />
        <PoetryCard date="2/23/24" poetry={"\"Friendship is a priceless gift that cannot be bought nor sold, but its value is far greater than a mountain made of gold.  For gold is cold and lifeless and cannot see nor hear, and in time of trouble, it is powerless to cheer.  Gold it has no ears to listen, no heart to understand, it cannot briong you comfort, or reach out a helping hand.  So when you ask GOD for a gift, be thankful if HE sends, not dimaonds, pearls, or riches, but the love of real true friends.\" ~ Muhammad Ali"} />
        <PoetryCard date="2/23/24" poetry={"\"In order to train as hard as possible, you must retain a clear image of your purpose. Once your goal is sharply, but realisticly defined, all that remains is carrying out your plan.  Don't worry, however, about your individual potential.  Potenial is only the expression of possibility.  Something that can be assessed accurately only in retrospect.  In other words, you'll never know how good you might have become, unless you try, So let's get with it.\" ~ Mike Mentzer"} />
        <PoetryCard date="2/23/24" poetry={"Love never Fails, if it fails, it was never love."} />
        <PoetryCard date="2/23/24" poetry={"\"Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the LORD with a pure heart.  For we do not have a high priest who is able to feel sympathy for our weaknesses, but we have one who has been tempted in every way just as we are.  Yet HE did not sin.  Let us then approach GOD's throne of grace with confidence, so that we may recieve mercy and find grace to help us in our time of need.  So if you think you are standing firm, be careful so that you don't fall. No temptation have overtaken you, except what is common to man kind, and GOD is faithful.  HE will not let you be tempted beyond what you can bare.  But when you are tempted, HE will also provide a way out, so you can endure it.\""} />
        <PoetryCard date="2/22/24" poetry={"\"Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.\""} />
        <PoetryCard date="2/22/24" poetry={"\"Do not pray for Easy Lives, pray to be Stronger Men\" ~ John F. Kennedy"} />
        <PoetryCard date="2/22/24" poetry={"Launch Date"} />
      </div>
    </div>
  );
}

export default App;
