/***
 * Types
 */

export const Types = {
  ADD_REQUEST: "userRepo/ADD_REQUEST",
  ADD_SUCCESS: "userRepo/ADD_SUCCESS",
  ADD_FAILURE: "userRepo/ADD_FAILURE"
};

/***
 * Reduces
 */

const INITIAL_STATE = {
  data: []
};

export default function userRepo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    case Types.ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

/***
 * Actions
 */

export const Creators = {
  addUserRepoRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),

  addUserRepoSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  })
};
