import { call } from "redux-saga/effects";
import api from "../../services/api";

export function* addUserRepo(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      avatar_url: data.avatar_url,
      name: data.login
    };
    console.log(repositoryData);
  } catch (err) {}
}
