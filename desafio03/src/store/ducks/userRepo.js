/***
 * Types
 */

export const Types = {
  ADD_REQUEST: "userRepo/ADD_REQUEST",
  ADD_SUCCESS: "userRepo/ADD_SUCCESS",
  ADD_FAILURE: "userRepo/ADD_FAILURE",
  SET_LATITUDELONGITUDE: "userRepo/GET_REPOSITORY",
  SET_REPOSITORY: "userRepo/SET_REPOSITORY"
};

/***
 * Reduces
 */

const INITIAL_STATE = {
  data: [],
  repository: "",
  map: {
    latitude: 0,
    longitude: 0
  }
};

export default function userRepo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    case Types.ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    case Types.SET_LATITUDELONGITUDE:
      return { ...state, map: action.payload.map };
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
  setLatitudeLongitudeClick: map => ({
    type: Types.SET_LATIDUDELONGITUDE,
    payload: { map }
  }),

  setRepository: repositoryInput => ({
    type: Types.SET_REPOSITORY,
    payload: { repositoryInput }
  })
};
