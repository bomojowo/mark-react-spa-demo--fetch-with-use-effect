import { useEffect, useState } from "react";

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

interface Quote {
  quote: string
}

function App() {
  // const [joke, setJoke] = useState<Joke>();
  const [quote, setQuote] = useState<Quote>()

  // useEffect(() => {
  //   const fetchJoke = async () => {
  //     const response = await fetch(
  //       "https://official-joke-api.appspot.com/jokes/general/random"
  //     );
  //     const jsonBody: Joke[] = await response.json();
  //     setJoke(jsonBody[0]);
  //   };

  //   fetchJoke();
  // }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch (
        "https://api.kanye.rest/"
      );
      const jsonBody: Quote = await response.json();
      setQuote(jsonBody)
    };
    fetchQuote()
  }, []) // this empty array is needed so that the callbacks are not all run on the first render  (stop infinate looping of object values)

  // useEffect(() => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
    <h1>Kanye Quote</h1>
    {quote && 
    
    <b>{quote.quote}</b>}
    {/* everything below is for the fetchJoke function*/}
      {/* <h1>Joke app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.setup}</b>
          </p>
          <p>
            <i>{joke.punchline}</i>
          </p>
        </>
      )} */}
    </>
  );
}

export default App;
