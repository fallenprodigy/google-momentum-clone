import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.quotable.io/random";

const Quote = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setQuotes(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(quotes);

  if (!quotes) return null;

  return (
    <div>
      <p>{quotes.content}</p>
      <p>-{quotes.author}</p>
    </div>
  );
};

export default Quote;
