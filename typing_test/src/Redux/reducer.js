import * as types from "./actionType";

const initialState = {
  accuracy: 0,
  userInput: "",
  currentKey: "",
  numberOfKeyPressed: 0,
  isTyping: false,
};

export const typeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_TYPING: {
      return {
        ...state,
        isTyping: true,
      };
    }

    case types.STOP_TYPING: {
      return {
        ...state,
        isTyping: false,
      };
    }

    case types.UPDATE_CURRENT_KEY: {
      return {
        ...state,
        currentKey: payload,
      };
    }

    case types.UPDATE_USER_INPUT: {
      return {
        ...state,
        userInput: payload,
      };
    }

    case types.CALCULATE_STATS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
