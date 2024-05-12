import './App.css';
import { PoetryCard } from './PoetryCard';
import React from 'react';
import { MasterListOfPoetry } from './PoetryProps'

function App() {
  const [textFilter, setTextFilter] = React.useState("")
  
  function handleChange(event) {
    setTextFilter(event.target.value)
  }

  const masterListOfPoetry = new MasterListOfPoetry()

  return (
    <div className="App">
      <div className="PoetrySection">
        <header className="App-header">
        </header>
        <br></br>
          <div className="title">
            <img height="64rem" width="64rem" src="/favicon.ico" alt="a green book"></img>
            @csodom Poetry
          </div>
        <br></br>
          A home for all types of poems and important quotes, dated when I found them, and cited when possible.
        <br></br>
        <h4>Filter Box</h4>
        <input className="filterBox" name="FilterBox" value={textFilter} onChange={handleChange} placeholder='Search the Cards below by Text' />
        {masterListOfPoetry.filter((currentValue) => {return currentValue.poetry.toLowerCase().includes(textFilter.toLowerCase())}).map((currentValue) => {return <PoetryCard date={currentValue.date} poetry={currentValue.poetry}/>})}
      </div>
    </div>
  );
}

export default App;
