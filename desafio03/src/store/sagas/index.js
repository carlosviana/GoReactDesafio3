import { all, takeLatest } from "redux-saga/effects";

import { addUserRepo } from "./userRepos";

import { Types as UserRepoTypes } from "../ducks/userRepo";

export default function* rootSaga() {
  yield all([takeLatest(UserRepoTypes.ADD_REQUEST, addUserRepo)]);
}
