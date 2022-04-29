import React, { useState, useEffect } from "react";
import axios from "axios";

import { QuoteContainer, Text } from "./QuoteStyles";

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
    <QuoteContainer>
      <Text>{quotes.content}</Text>
      <Text>-{quotes.author}</Text>
    </QuoteContainer>
  );
};

export default Quote;
