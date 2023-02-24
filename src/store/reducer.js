import {
    ADD_NUMBER,
    SUB_NUMBER,
    TREE_NODE
} from './constants.js';

const initialState = {
    counter: 0,
    node: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num };
        case TREE_NODE:
            return { ...state, node: { ...action.node } };
        default:
            return state;
    }
}

export default reducer;