// @flow

import { push } from 'react-router-redux';
import type { Action } from '../action';
import environment from '../environments/environment';

export type User =
  | {
      +id: string,
      +username: string,
      +displayName: string,
      +profileUrl: string,
      +photos: Array<string>,
      +country: string,
      +followers: Number,
      +product: string,
      +emails: Array<string>
    }
  | {};

export const getUser = () => (dispatch: Function) => {
  fetch(`${environment.server.baseURL}/users/me`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'USER_GET', user });
      dispatch(push('/home'));
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: 'FETCH_ERROR', error });
    });
};

const user = (state: User = {}, action: Action): User => {
  switch (action.type) {
    case 'USER_GET': {
      return action.user;
    }

    default:
      return state;
  }
};

export default user;
