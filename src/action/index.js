import { RECIEVE_DECK , ADD_DECK , ADD_CARD } from '../../action-types' ;

export const showDecks = () =>{
    const action = {
        type:RECIEVE_DECK,
    }
    return action
}


export const AddDeck = () =>{
    const action = {
        type:ADD_DECK,
    }
    return action
}


export const AddCard = () =>{
    const action = {
        type:ADD_CARD,
    }
    return action
}