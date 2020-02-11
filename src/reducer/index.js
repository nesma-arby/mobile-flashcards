import { RECIEVE_DECK , ADD_DECK , ADD_CARD } from '../../action-types' ;

const initialState = null;

const decks = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_DECK:
      return {
        ...state,
        // ...action.decks
      };
    case ADD_DECK: {      
      return {
        ...state,
        // [action.id]: {
        //   id: action.id,
        //   name: action.name,
        //   cards: []
        // }
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        // [action.deckId]: {
        //   ...state[action.deckId],
        //   cards: [
        //     ...state[action.deckId].cards,
        //     { question: action.question, answer: action.answer }
        //   ]
        // }
      };
    }
    default:
      return state;
  }
};

export default decks;

