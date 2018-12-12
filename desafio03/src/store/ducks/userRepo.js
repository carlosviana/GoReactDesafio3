/***
 * Types
 */

export const Types = {
  ADD_REQUEST: "userRepos/ADD_REQUEST",
  ADD_SUCCESS: "userRepos/ADD_SUCCESS",
  ADD_FAILURE: "userRepos/ADD_FAILURE",
  // GET_REPOSITORY: "userRepos/GET_REPOSITORY",
  SET_REPOSITORY: "userRepos/SET_REPOSITORY"
};

/***
 * Reduces
 */

const INITIAL_STATE = {
  data: [],
  repository: ""
};

export default function userRepo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    case Types.ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    // case Types.GET_REPOSITORY:
    //   return { ...state };
    case Types.SET_REPOSITORY:
      return { ...state, repository: action.payload.repositoryInput };
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
  }),
  // getRepository: repository => ({
  //   type: Types.GET_REPOSITORY,
  //   payload: { repository }
  // }),

  setRepository: repositoryInput => ({
    type: Types.SET_REPOSITORY,
    payload: { repositoryInput }
  })
};
