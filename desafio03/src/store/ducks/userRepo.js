/***
 * Types
 */

export const Types = {
  ADD_REQUEST: "userRepos/ADD_REQUEST",
  ADD_SUCCESS: "userRepos/ADD_SUCCESS",
  ADD_FAILURE: "userRepos/ADD_FAILURE"
};

/***
 * Reduces
 */

const INITIAL_STATE = {
  data: []
};

export default function userRepos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    default:
      return state;
  }
}

/***
 * Actions
 */

export const Creators = {
  addUserReposRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  })
};
