import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UserRepoActions } from "../../store/ducks/userRepo";

export function* addUserRepo(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.repository}`);
    const { map } = action.payload.repository;
    const repositoryData = {
      id: data.id,
      avatar_url: data.avatar_url,
      latitude: map.latitude,
      longitude: map.longitude,
      name: data.login
    };

    yield put(UserRepoActions.addUserRepoSuccess(repositoryData));

    console.log(repositoryData);
  } catch (err) {}
}
