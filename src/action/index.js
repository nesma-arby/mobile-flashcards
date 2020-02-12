import { RECIEVE_DECK , ADD_DECK , ADD_CARD } from '../../action-types' ;

export const showDecks = (decks) =>{
    const action = {
        type:RECIEVE_DECK,
        decks
    }
    return action
}


export const AddDeck = (id,title) =>{
    const action = {
        type:ADD_DECK,
        id,
        title
    }
    return action
}


export const AddCard = (deckId, question , answer) =>{
    const action = {
        type:ADD_CARD,
        deckId,
        question,
        answer

    }
    return action
}