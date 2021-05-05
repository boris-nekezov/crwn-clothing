import { UserActionTypes } from './user.types';

//* actions literally are just functions that return objects
export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
