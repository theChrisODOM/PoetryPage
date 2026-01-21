import './App.css';
import { PoetryCard } from './PoetryCard';
import React from 'react';
import { MasterListOfPoetry } from './PoetryProps'
import { Input, Divider, Card, Typography } from '@mui/joy';

function App() {
  const [textFilter, setTextFilter] = React.useState("")
  
  function handleChange(event) {
    setTextFilter(event.target.value)
  }

  const masterListOfPoetry = new MasterListOfPoetry()

  return (
    <div className="App">
      <div className="PoetrySection">
        <br></br>
        
        <img height="10%" width="10%" src="/favicon.ico" alt="a green book"></img>
        <Divider 
          orientation="vertical" 
          sx={{
              margin: "10px",
        }}/>
        <Typography color="white" sx={{ "font-size": "calc(6px + 3vmin)", fontWeight: 'xl' }}>
          @csodom Poetry
        </Typography>
       
        <div className="App-header"> 
        <br></br>
            <Typography color="white" sx={{ "font-size": "calc(10px + 1vmin)", fontWeight: 'md' }}>
                Welcome to csodom's Poetry Page.  This project of poems began as a healing project, and has evolved as a space
                to immortalize my thoughts and emotions.  Anyone is welcome to read this ledger, and hopefully gain wisdom from 
                quotes documented here, and the experiences I share.                  
            </Typography>
        <br></br>
            <Typography color="white" sx={{ "font-size": "calc(10px + 1vmin)", fontWeight: 'md' }}>
                Whenever a poem or quote is listed, I will do my best to date when I found them, and cite when possible.
            </Typography>
        <br></br>         
            <Typography color="white" sx={{ "font-size": "calc(4px + 1vmin)", fontWeight: 'xs' }}>
                last updated: 1/20/2026
            </Typography>
        </div>
            
          <Divider />
          <Card
            orientation="vertical"
            variant="soft"
            size="lg"
            sx={{
                "--Card-padding": "20px",
                "--Card-radius": "20px",
                margin: "50px",
                "background-color": "#021025",
                "color": "white"
            }}
          >
            <Typography color="white" sx={{ "font-size": "calc(10px + 1vmin)", fontWeight: 'xl' }}>
              Filter the Poetry Cards
            </Typography>
            <center>  
              <Input name="FilterBox" 
                value={textFilter} 
                onChange={handleChange} 
                placeholder='Search the Cards below by Text' 
                variant="outlined" 
                sx={{
                  '--Input-focusedInset': 'var(--any, )',
                  '--Input-focusedThickness': '0.25rem',
                  '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
                  '&::before': {
                    transition: 'box-shadow .15s ease-in-out',
                  },
                  '&:focus-within': {
                    borderColor: '#86b7fe',
                  },
                  width: 300
                }}
              />
            </center>
          </Card>

          <Divider />

          {masterListOfPoetry.filter((currentValue) => {return currentValue.poetry.toString().toLowerCase().includes(textFilter.toLowerCase())}).map((currentValue) => {return <PoetryCard date={currentValue.date} poetry={currentValue.poetry}/>})}
      </div>
    </div>
  );
}

export default App;
