import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UserRepoActions } from "../ducks/userRepo";

export function* addUserRepo(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id
    };

    console.log(repositoryData);
  } catch (err) {}
}
