import React, { useState } from "react";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function DeckCollection() {
  const [decks, setDecks] = useState([]);

  function addDeck(newDeck) {
    setDecks(prevDecks => {
      return [...prevDecks, newDeck];
    });
  }

  return (
    <div>
      <CreateDeck onAdd={addDeck} />
      {
        decks.map((deckItem, index) => {
          return (
            <Link to={`/deck/${index}`}>
              <Deck
                key={index}
                id={index}
                title={deckItem.title}
                description={deckItem.description}
              />
            </Link>
          );
        })
      }
    </div>
  );

}

export default DeckCollection;
