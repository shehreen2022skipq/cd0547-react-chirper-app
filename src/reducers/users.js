<<<<<<< HEAD
import { RECIEVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
=======
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
