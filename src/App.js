import Quotes from './components/QuoteBox';
import './App.css';
import { useState } from 'react';
import array from './components/arrayQuoteBox';
import Author from './components/authorBox';
import ChangeButton from './components/changeButton';

function App() {
  const numberRandom =Math.floor(Math.random() * (array.quotes.length - 0) + 0)
  console.log(numberRandom)
  const dataQuote = array.quotes[numberRandom]
  const [quote, setQuote] = useState(dataQuote)
  const Change = () => {
    setQuote(array.quotes[Math.floor(Math.random() * (array.quotes.length - 0) + 0)])
  }
  return (
    <div className="APP">
      <div class="container mg-2 d-flex justify-content-center align-items-center">
        <div class="card text-center border " >
          <div class="card-body">
            <Quotes data={quote.quote}/>
            <Author author={quote.author}/>
            <ChangeButton Change={Change}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;