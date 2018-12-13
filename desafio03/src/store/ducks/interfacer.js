/****
 * Types
 */
export const Types = {
  SET_LATITUDELONGITUDE: "interfacer/SET_LATITUDELONGITUDE",
  SET_REPOSITORY: "interfacer/SET_REPOSITORY"
};
/***
 * Reduces
 */

const INITIAL_STATE = {
  repository: "",
  map: {
    latitude: 0,
    longitude: 0
  }
};

export default function interfacer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_REPOSITORY:
      return {
        ...state,
        repository: action.payload.repositoryInput
      };
    case Types.SET_LATITUDELONGITUDE:
      return { ...state, map: action.payload.map };
    default:
      return state;
  }
}

/****
 * Actions
 */

export const Creators = {
  setLatitudeLongitudeClick: map => ({
    type: Types.SET_LATIDUDELONGITUDE,
    payload: { map }
  }),

  setRepository: repositoryInput => ({
    type: Types.SET_REPOSITORY,
    payload: { repositoryInput }
  })
};
