import * as types from "./actionType";

export const startTyping = () => {
  return {
    type: types.START_TYPING,
  };
};

export const stopTyping = () => {
  return {
    type: types.STOP_TYPING,
  };
};

export const calculateStats = () => {
  return {
    type: types.CALCULATE_STATS,
  };
};

export const updateUserInput = (data) => {
  return {
    type: types.UPDATE_USER_INPUT,
    payload: data,
  };
};

export const updateCurrentKey = (data) => {
  return {
    type: types.UPDATE_CURRENT_KEY,
    payload: data,
  };
};
