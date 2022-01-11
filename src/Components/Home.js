import React from 'react';
import '../App.css';
import Social from './Social';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  

  return (
    <>
    
   
    

    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bar Community</h1>
        <div className='space'></div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDjbzKn86-5FFiaO0BgsTBLuTflmLKMGRoA&usqp=CAU' className="App-logo" alt="logo" />
       <div className='space'>
        <a
          className="App-link"
          href="#buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY NOW
        </a>
        <Social />
        </div>
      </header>

      <div id='buy' className='social'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDjbzKn86-5FFiaO0BgsTBLuTflmLKMGRoA&usqp=CAU" />
          <Card.Body>
            <Card.Title>Endless Possibilities</Card.Title>
            <Card.Text>
              What if we displayed NFTs to purchase in this section? Wouldnt that be cool?!
            </Card.Text>
            <Button variant="primary">Buy NFT</Button>
          </Card.Body>
        </Card>


      </div>
    </div>
    </>
  );
}

export default App;