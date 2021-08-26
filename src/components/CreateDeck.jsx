import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateDeck(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [deck, setDeck] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDeck((prevDeck) => {
      return {
        ...prevDeck,
        [name]: value
      };
    });
  }

  function submitDeck(event) {
    props.onAdd(deck);
    setDeck({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={deck.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          name="description"
          onChange={handleChange}
          value={deck.description}
          placeholder="Deck description ..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitDeck}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateDeck;
